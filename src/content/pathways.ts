import { LearningPathway } from "@/types/curriculum";

export const pathwaysData: Record<'programming' | 'ai', LearningPathway> = {
  programming: {
    id: "programming",
    title: "Programming Pathway",
    badge: "PROGRESSION",
    progression: "Scratch → Python → Web Development",
    description:
      "Each level is a separate two-month programme that builds on previous knowledge. Every level includes guided learning, weekly practical exercises, assignments or mini-projects, progressive skill development, and one major final project.",
    levels: [
      {
        id: "prog-level-1",
        levelNumber: "01",
        title: "Level 1 — Scratch Foundations",
        duration: "Level 1 • 2 Months",
        description:
          "Learn the foundations of programming through interactive activities, animations and games.",
        learningHighlights: [
          "Programming logic & sequencing",
          "Events and user interactions",
          "Loops and logical conditions",
          "Variables & basic game mechanics",
          "Creative problem-solving",
        ],
        exampleProjects: [
          "Interactive educational game",
          "Simple adventure game",
          "Quiz game",
          "Interactive story",
        ],
      },
      {
        id: "prog-level-2",
        levelNumber: "02",
        title: "Level 2 — Python Foundations",
        duration: "Level 2 • 2 Months",
        description:
          "Move from visual programming to writing code, logical thinking, and creating practical programmes.",
        learningHighlights: [
          "Python fundamentals & syntax",
          "Variables and data types",
          "Conditions and loops",
          "Modular functions & lists",
          "Problem-solving and debugging",
        ],
        exampleProjects: [
          "Quiz application",
          "Number guessing game",
          "Simple calculator",
          "Personal task organiser",
        ],
      },
      {
        id: "prog-level-3",
        levelNumber: "03",
        title: "Level 3 — Web Development",
        duration: "Level 3 • 2 Months",
        description:
          "Discover how websites are structured, styled and made interactive using modern web technologies.",
        learningHighlights: [
          "HTML semantic website structure",
          "CSS styling and responsive layouts",
          "JavaScript fundamentals",
          "Basic website interactivity & DOM",
          "Web publishing best practices",
        ],
        exampleProjects: [
          "Personal portfolio website",
          "Educational website",
          "Interactive quiz website",
          "Simple themed website",
        ],
      },
    ],
  },
  ai: {
    id: "ai",
    title: "Artificial Intelligence Pathway",
    badge: "PROGRESSION",
    progression: "AI Foundations → AI Creativity & Productivity → AI Projects & Applications",
    description:
      "Proposed programme descriptions for our progressive AI curriculum. Each level is an independent two-month programme focused on age-appropriate exploration and responsible application.",
    levels: [
      {
        id: "ai-level-1",
        levelNumber: "01",
        title: "Level 1 — AI Foundations",
        duration: "Level 1 • 2 Months",
        description:
          "Discover artificial intelligence, explore how it is used, and learn to give AI clear instructions responsibly.",
        learningHighlights: [
          "Understanding what AI is & how it works",
          "Everyday AI applications in society",
          "Prompting fundamentals & clear phrasing",
          "Responsible and ethical AI use",
          "AI-assisted interactive learning",
        ],
        exampleProjects: [
          "Illustrated story",
          "Educational learning resource",
          "Creative character project",
        ],
      },
      {
        id: "ai-level-2",
        levelNumber: "02",
        title: "Level 2 — AI Creativity and Productivity",
        duration: "Level 2 • 2 Months",
        description:
          "Explore how AI can support research, creativity, content development and practical problem-solving.",
        learningHighlights: [
          "Prompt refinement & multi-turn reasoning",
          "AI-assisted research & fact-checking",
          "Writing and content development",
          "Visual creativity & image generation",
          "Multimedia creation & productivity workflows",
        ],
        exampleProjects: [
          "Educational content package",
          "Multimedia project",
          "AI-assisted research resource",
          "Productivity workflow",
        ],
      },
      {
        id: "ai-level-3",
        levelNumber: "03",
        title: "Level 3 — AI Projects and Applications",
        duration: "Level 3 • 2 Months",
        description:
          "Combine AI tools and problem-solving skills to develop projects that address practical needs.",
        learningHighlights: [
          "Project planning & scoping",
          "AI tool selection & integration",
          "Advanced prompt design & system setup",
          "AI-assisted prototyping & testing",
          "Responsible AI application & safety",
        ],
        exampleProjects: [
          "AI-supported study assistant",
          "Simple chatbot for defined purpose",
          "AI-assisted educational resource",
          "Productivity prototype",
        ],
      },
    ],
  },
};
