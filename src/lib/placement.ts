import type { PlacementProgramme, PlacementResult } from '@/types/placement';

const PROGRAMME_FEE_NGN = 50000;

interface TallyQuestion {
  id: string;
  title: string;
}

interface TallyResponse {
  questionId: string;
  answer: unknown;
  formattedAnswer?: string;
}

export interface TallySubmissionPayload {
  questions: TallyQuestion[];
  submission: {
    id: string;
    formId: string;
    isCompleted: boolean;
    responses: TallyResponse[];
  };
}

export function isTallySubmissionPayload(
  value: unknown
): value is TallySubmissionPayload {
  if (!value || typeof value !== 'object') return false;
  const record = value as Partial<TallySubmissionPayload>;
  return (
    Array.isArray(record.questions) &&
    record.questions.every(
      (question) =>
        Boolean(question) &&
        typeof question.id === 'string' &&
        typeof question.title === 'string'
    ) &&
    record.submission !== undefined &&
    typeof record.submission.id === 'string' &&
    typeof record.submission.formId === 'string' &&
    typeof record.submission.isCompleted === 'boolean' &&
    Array.isArray(record.submission.responses) &&
    record.submission.responses.every(
      (response) =>
        Boolean(response) &&
        typeof response.questionId === 'string' &&
        'answer' in response
    )
  );
}

function normalize(value: string): string {
  return value
    .normalize('NFKC')
    .replace(/[–—]/g, '-')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function answerText(answer: unknown): string {
  if (typeof answer === 'string' || typeof answer === 'number') {
    return String(answer).trim();
  }
  if (Array.isArray(answer)) {
    return answer.map(answerText).filter(Boolean).join(', ');
  }
  if (answer && typeof answer === 'object') {
    const record = answer as Record<string, unknown>;
    if (typeof record.label === 'string') return record.label.trim();
    if (typeof record.value === 'string') return record.value.trim();
  }
  return '';
}

function getAnswer(
  payload: TallySubmissionPayload,
  title: string
): string {
  const question = payload.questions.find(
    (item) => normalize(item.title) === normalize(title)
  );
  if (!question) return '';

  const response = payload.submission.responses.find(
    (item) => item.questionId === question.id
  );
  if (!response) return '';

  return response.formattedAnswer?.trim() || answerText(response.answer);
}

function hasSessionToken(
  payload: TallySubmissionPayload,
  sessionToken: string
): boolean {
  return payload.submission.responses.some((response) => {
    const question = payload.questions.find(
      (item) => item.id === response.questionId
    );
    if (!question || normalize(question.title) !== 'mindra_session') return false;

    if (answerText(response.answer) === sessionToken) return true;
    if (response.answer && typeof response.answer === 'object') {
      return (
        (response.answer as Record<string, unknown>).mindra_session === sessionToken
      );
    }
    return false;
  });
}

function getAgeRange(value: string): PlacementResult['ageRange'] | null {
  const ageRange = normalize(value).replace(/\s/g, '');
  if (ageRange === '7-12' || ageRange === 'ages7-12') return '7-12';
  if (ageRange === '13-18' || ageRange === 'ages13-18') return '13-18';
  return null;
}

function getProgrammes(value: string): PlacementProgramme[] {
  const programme = normalize(value);
  if (programme === 'programming') return ['Programming'];
  if (
    programme === 'artificial intelligence (ai)' ||
    programme === 'artificial intelligence' ||
    programme === 'ai'
  ) {
    return ['Artificial Intelligence'];
  }
  if (
    programme === 'both programming and ai' ||
    programme === 'both programmes' ||
    programme === 'both'
  ) {
    return ['Programming', 'Artificial Intelligence'];
  }
  return [];
}

export function createPlacementResult(
  payload: TallySubmissionPayload,
  expectedSubmissionId: string,
  sessionToken: string
): PlacementResult | null {
  const { submission } = payload;
  if (
    !submission.isCompleted ||
    submission.id !== expectedSubmissionId ||
    !hasSessionToken(payload, sessionToken)
  ) {
    return null;
  }

  const childName = getAnswer(payload, "Child's Full Name");
  const parentName = getAnswer(payload, 'Parent/Guardian Full Name');
  const parentEmail = getAnswer(payload, 'Parent/Guardian Email Address');
  const parentPhone = getAnswer(payload, 'Parent/Guardian Phone Number');
  const ageRange = getAgeRange(getAnswer(payload, "Child's Age"));
  const programmes = getProgrammes(
    getAnswer(payload, 'Which programme are you interested in?')
  );

  if (
    !childName ||
    !parentName ||
    !parentEmail ||
    !parentPhone ||
    !ageRange ||
    programmes.length === 0
  ) {
    return null;
  }

  const levelRange = ageRange === '7-12' ? 'Level 1 or Level 2' : 'Level 2 or Level 3';
  const recommendations = programmes.map((programme) => ({
    programme,
    levelRange,
    feeNgn: PROGRAMME_FEE_NGN,
  }));

  return {
    childName,
    parentName,
    ageRange,
    programmes: recommendations,
    totalFeeNgn: recommendations.reduce((total, item) => total + item.feeNgn, 0),
  };
}
