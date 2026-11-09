export interface PathwayLevel {
  id: string;
  levelNumber: string;
  title: string;
  duration: string;
  description: string;
  learningHighlights: string[];
  exampleProjects: string[];
}

export interface LearningPathway {
  id: 'programming' | 'ai';
  title: string;
  badge: string;
  progression: string;
  description: string;
  levels: PathwayLevel[];
}

export interface TrackOption {
  title: string;
  icon: string;
  duration: string;
  description: string;
}

export interface AgeTrack {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  themeColor: 'lime' | 'orange';
  options: TrackOption[];
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
