import { AgeTrack } from "@/types/curriculum";

export const ageTracksData: AgeTrack[] = [
  {
    id: "young-innovators",
    title: "Young Innovators Track",
    ageRange: "AGES 7-12",
    description:
      "Explore coding and AI through creative activities and hands-on projects while building foundational digital skills, logical thinking and confidence.",
    themeColor: "lime",
    options: [
      {
        title: "Young Innovators — Coding",
        icon: "</>",
        duration: "Duration: 8 Weeks",
        description:
          "Build programming fundamentals through visual logic, hands-on coding and interactive projects.",
      },
      {
        title: "Young Innovators — AI",
        icon: "🤖",
        duration: "Duration: 8 Weeks",
        description:
          "Age-appropriate AI fundamentals, creative exploration & problem-solving.",
      },
    ],
    ctaText: "Enrol in Young Innovators",
  },
  {
    id: "future-creators",
    title: "Future Creators Track",
    ageRange: "AGES 13-18",
    description:
      "Teenagers explore coding and AI in greater depth, strengthening their technical skills, creative thinking and ability to build practical digital solutions.",
    themeColor: "orange",
    options: [
      {
        title: "Future Creators — Coding",
        icon: "</>",
        duration: "Duration: 8 Weeks",
        description:
          "Structured programming, web development & computational logic.",
      },
      {
        title: "Future Creators — AI",
        icon: "🤖",
        duration: "Duration: 8 Weeks",
        description:
          "Machine learning, practical AI tools and responsible AI use.",
      },
    ],
    ctaText: "Enrol in Future Creators",
  },
];
