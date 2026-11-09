# Mindra Labs Academy Website

Official website for **Mindra Labs Academy**, a technology education academy empowering young learners (ages 7–17) with structured programming, artificial intelligence, and digital problem-solving skills.

Developed based on **PRD v1.3** and the **Stitch UI Prototype**.

---

## 🚀 Features

- **The Mindra Method:** 4-pillar practical pedagogy built on *Learn → Practise → Build → Progress*.
- **Tailored Age Tracks:**
  - *Young Innovators (Ages 7–12):* Visual coding, Scratch foundations, age-appropriate AI exploration.
  - *Future Creators (Ages 13–17):* Python, web development, computational logic, and responsible AI.
- **Interactive Pathways Switcher:**
  - *Programming Pathway:* Level 1 (Scratch) → Level 2 (Python) → Level 3 (Web Development).
  - *Artificial Intelligence Pathway:* Level 1 (Foundations) → Level 2 (Creativity & Productivity) → Level 3 (Projects & Applications).
- **Placement Guidance System:** Clear 3-step readiness flow explaining that ability and prerequisites, not age alone, guide cohort placement.
- **School Engagement Section:** Dedicated showcase for institutional partners, school tech clubs, and educator workshops.
- **Admissions & Enrolment Desk:**
  - Validated contact form for parent/guardian enquiries with safeguarding compliance.
  - Direct WhatsApp quick-connect integration with pre-filled enquiry messages.
- **Child Safeguarding & Responsible AI:** Embedded guidelines and policy pages (`/privacy` and `/terms`).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Plus Jakarta Sans & Inter (via `next/font/google`)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx                # Global typography and metadata
│   ├── page.tsx                  # Complete landing page
│   ├── api/
│   │   └── enquiry/route.ts      # Serverless admissions enquiry endpoint
│   ├── privacy/page.tsx          # Privacy & Safeguarding policy
│   └── terms/page.tsx            # Terms of service
├── components/
│   ├── layout/
│   │   ├── TopNavigation.tsx     # Sticky header with responsive mobile drawer
│   │   └── SiteFooter.tsx        # 5-column footer with locations and legal links
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero with ambient pattern, pulse pill, and badges
│   │   ├── WhyChooseSection.tsx  # The Mindra Method 4-pillar cards
│   │   ├── TechnologyTracks.tsx  # Young Innovators vs Future Creators cards
│   │   ├── SchoolEngagement.tsx  # School collaboration showcase & workshop card
│   │   ├── LearningPathways.tsx  # Tab switcher for Programming and AI pathways
│   │   ├── PlacementGuidance.tsx # 3-step placement explanation & reassurance note
│   │   ├── SafetyEnvironment.tsx # Child safeguarding & responsible AI cards
│   │   ├── FAQSection.tsx        # Accessible interactive FAQ accordion
│   │   └── EnrolmentDesk.tsx     # 2-column contact desk with multi-field form
│   └── ui/
│       └── WhatsAppButton.tsx    # Floating quick-connect button
├── content/                      # Decoupled content layer for easy copy updates
│   ├── pathways.ts
│   ├── tracks.ts
│   ├── faqs.ts
│   └── siteConfig.ts
└── styles/
    └── globals.css
```

---

## 📧 Admissions & Contact

- **Admissions Email:** [mindralabsacademy@gmail.com](mailto:mindralabsacademy@gmail.com)
- **Locations:** Osun • Lagos (Nigeria) • London (UK)

