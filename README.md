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

## Placement assessment and WhatsApp setup

The placement questionnaire is hosted by Tally and embedded in the Enrolment Desk. Tally manages
the submission and redirects the parent to Mindra Labs on WhatsApp after completion. The website
does not display a separate placement result or payment page, and the parent does not need to
complete another form. The site does not need a Tally API key or `mindra_session` hidden field for
this journey. The previous result/payment UI and verifier remain isolated in the codebase for
possible reuse, but the public flow does not call them. `TALLY_API_KEY` is only needed if that
legacy verifier is intentionally re-enabled.

Before the flow is ready:

1. In the Tally form, set **Child's Age** choices to exactly `7–12` and `13–18`.
2. Set conditional logic for the programme-specific descriptions and questions: show Programming
   content for Programming or Both, and AI content for Artificial Intelligence or Both.
3. Under Tally's [**Redirect on completion**](https://tally.so/help/redirect-on-completion) setting,
   use this URL:
   `https://wa.me/2348139444569?text=Hello%20Mindra%20Labs%2C%0A%0AI%20have%20completed%20the%20placement%20assessment%20for%20my%20child%20and%20would%20like%20to%20proceed%20with%20the%20enrolment%20process.%0A%0APlease%20guide%20me%20on%20the%20recommended%20programme%20level%20and%20payment%20details.%0A%0AThank%20you.`
4. Remove the `mindra_session` hidden field if one was added for the previous website-side result flow.
5. Test each programme option and verify that the submission redirects to the correct WhatsApp number with the complete message. Do not send a real enrolment or payment during testing.

After the redirect, Mindra Labs reviews the assessment and continues placement, enrolment and
payment guidance in WhatsApp. Recommendations remain preliminary until the team confirms placement;
the approved age ranges are 7–12 (Level 1 or 2) and 13–18 (Level 2 or 3).
