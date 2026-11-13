"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/layout/ResumeModal";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecruiterQuickSummary } from "@/components/sections/RecruiterQuickSummary";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { DsaJourneySection } from "@/components/sections/DsaJourneySection";
import { CurrentlyExploringSection } from "@/components/sections/CurrentlyExploringSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SoundProvider } from "@/components/ui/AudioFeedback";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global key listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToQuickSummary = () => {
    const el = document.getElementById("recruiter-summary");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SoundProvider>
      <div className="min-h-screen bg-canvas text-sand font-sans selection:bg-accent selection:text-canvas">
        {/* Fixed Sticky Header Navigation */}
        <Navigation
          onOpenResume={() => setResumeOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          {/* Section A: Hero Section */}
          <HeroSection
            onOpenResume={() => setResumeOpen(true)}
            onOpenQuickScan={scrollToQuickSummary}
          />

          {/* Recruiter 30-Second Fast Scan Bar */}
          <div id="recruiter-summary">
            <RecruiterQuickSummary onOpenResume={() => setResumeOpen(true)} />
          </div>

          {/* Section B: About Me & Engineering Journey */}
          <AboutSection />

          {/* Section B.2: Open-Source Impact & Ceph Experience */}
          <ExperienceSection />

          {/* Section C: Technical Arsenal & Skills */}
          <TechStackSection />

          {/* Section D: Featured Projects & Interactive Simulators */}
          <FeaturedProjectsSection />

          {/* Section E: DSA & Problem Solving Journey */}
          <DsaJourneySection />

          {/* Section F: Currently Exploring & Forward Momentum */}
          <CurrentlyExploringSection />

          {/* Section G: Contact & Outreach */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Printable / Interactive Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

        {/* Command Palette (Cmd+K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Interactive Floating Terminal Shell */}
        <InteractiveTerminal />
      </div>
    </SoundProvider>
  );
}

