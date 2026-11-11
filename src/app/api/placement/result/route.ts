import { NextResponse } from 'next/server';
import {
  createPlacementResult,
  isTallySubmissionPayload,
} from '@/lib/placement';

export const runtime = 'nodejs';

const TALLY_FORM_ID = 'RWMW1p';
const SUBMISSION_ID_PATTERN = /^[A-Za-z0-9_-]{1,128}$/;
const SESSION_TOKEN_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function jsonResponse(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store, private' },
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.TALLY_API_KEY;
  if (!apiKey) {
    return jsonResponse(
      { message: 'Placement results are not available yet. Please contact Admissions.' },
      503
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ message: 'Invalid placement request.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse({ message: 'Invalid placement request.' }, 400);
  }
  const { submissionId, sessionToken } = body as {
    submissionId?: unknown;
    sessionToken?: unknown;
  };
  if (
    typeof submissionId !== 'string' ||
    !SUBMISSION_ID_PATTERN.test(submissionId) ||
    typeof sessionToken !== 'string' ||
    !SESSION_TOKEN_PATTERN.test(sessionToken)
  ) {
    return jsonResponse({ message: 'Invalid placement request.' }, 400);
  }

  try {
    const tallyResponse = await fetch(
      `https://api.tally.so/forms/${TALLY_FORM_ID}/submissions/${encodeURIComponent(submissionId)}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
        cache: 'no-store',
      }
    );

    if (tallyResponse.status === 404) {
      return jsonResponse({ message: 'This assessment could not be verified.' }, 404);
    }
    if (tallyResponse.status === 401 || tallyResponse.status === 403) {
      console.error('Tally submission verification credentials were rejected.');
      return jsonResponse(
        { message: 'Placement verification is not configured correctly. Please contact Admissions.' },
        503
      );
    }
    if (!tallyResponse.ok) {
      console.error('Tally submission verification failed:', tallyResponse.status);
      return jsonResponse(
        { message: 'We could not verify the assessment yet. Please try again.' },
        502
      );
    }

    const body: unknown = await tallyResponse.json();
    if (!isTallySubmissionPayload(body)) {
      console.error('Tally returned a submission in an unexpected format.');
      return jsonResponse(
        { message: 'We could not verify the assessment yet. Please try again.' },
        502
      );
    }

    const payload = body;
    if (payload.submission?.formId !== TALLY_FORM_ID) {
      return jsonResponse({ message: 'This assessment could not be verified.' }, 404);
    }

    const result = createPlacementResult(payload, submissionId, sessionToken);
    if (!result) {
      return jsonResponse(
        {
          message:
            'The assessment is incomplete or could not be matched to this session. Please contact Admissions.',
        },
        422
      );
    }

    return jsonResponse(result);
  } catch (error) {
    console.error(
      'Tally submission verification request failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return jsonResponse(
      { message: 'We could not verify the assessment yet. Please try again.' },
      502
    );
  }
}
