import React from 'react';
import { TopNavigation } from '@/components/layout/TopNavigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TechnologyTracks } from '@/components/sections/TechnologyTracks';
import { SchoolEngagement } from '@/components/sections/SchoolEngagement';
import { LearningPathways } from '@/components/sections/LearningPathways';
import { SafetyEnvironment } from '@/components/sections/SafetyEnvironment';
import { FAQSection } from '@/components/sections/FAQSection';
import { EnrolmentDesk } from '@/components/sections/EnrolmentDesk';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNavigation />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseSection />
        <TechnologyTracks />
        <SchoolEngagement />
        <LearningPathways />
        <SafetyEnvironment />
        <FAQSection />
        <EnrolmentDesk />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
