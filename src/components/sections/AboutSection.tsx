"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Award, Compass, Cpu, Target, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="01"
        eyebrow="ENGINEERING PHILOSOPHY & JOURNEY"
        title="Curious by nature."
        highlight="Disciplined by code."
        description="I am an undergraduate computer science engineer who treats software as both a craft and a problem-solving discipline."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Natural Narrative */}
        <div className="lg:col-span-7 space-y-6 text-sand-dim text-base sm:text-lg leading-relaxed font-normal">
          <p>
            I am a Frontend Developer Intern candidate focused on building responsive{" "}
            <span className="text-sand font-medium">React.js and TypeScript</span> interfaces with
            reusable components, custom React hooks, and predictable client-side state.
          </p>

          <p>
            I believe engineering competence is proven through working software. I shipped an
            AI-powered merchant analytics copilot (
            <a
              href="https://paytm-biz-copilot.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline font-medium"
            >
              Paytm VyaparAI
            </a>
            ) built during the Paytm AI Hackathon, and engineered{" "}
            <a
              href="https://swaad-wallah.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline font-medium"
            >
              Swaad Wallah
            </a>
            , both running live in production on Vercel.
          </p>

          <p>
            Beyond application development, I actively contribute to production open source. I have a{" "}
            <span className="text-sand font-semibold">merged pull request into the official ceph/ceph.io</span>{" "}
            repository (Ceph, a premier GSoC distributed storage project under the Linux Foundation),
            authored detailed UX feedback for their redesign working group, and review responsive mobile
            and desktop layouts.
          </p>

          <p>
            On the algorithmic side, I am an official{" "}
            <span className="text-sand font-medium">ICPC Preliminary Contest team member</span> and have
            solved <span className="text-sand font-medium">400+ problems on LeetCode</span> (Contest
            Rating: 1440, 100 Days Badge 2026), giving me the stamina to write clean \(O(N)\) logic and
            debug complex UI state transitions under pressure.
          </p>

          {/* Core Personal Principles */}
          <div className="pt-4 space-y-3">
            <h4 className="font-mono text-xs text-sand font-semibold uppercase tracking-wider">
              Engineering Commitments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-canvas-surface border border-canvas-border">
                <div className="text-accent font-mono text-xs font-semibold mb-1">01 / Rigor</div>
                <div className="text-sm font-semibold text-sand">Algorithmic Depth</div>
                <div className="text-xs text-sand-muted mt-1">
                  Clean asymptotic complexity over brute-force solutions.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-canvas-surface border border-canvas-border">
                <div className="text-accent font-mono text-xs font-semibold mb-1">02 / Structure</div>
                <div className="text-sm font-semibold text-sand">Clean Architecture</div>
                <div className="text-xs text-sand-muted mt-1">
                  Separation of concerns across controllers, services, and DAOs.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-canvas-surface border border-canvas-border">
                <div className="text-accent font-mono text-xs font-semibold mb-1">03 / Craft</div>
                <div className="text-sm font-semibold text-sand">Intuitive UX</div>
                <div className="text-xs text-sand-muted mt-1">
                  Accessible, responsive interfaces that perform smoothly on every device.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Academic & Background Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl bg-canvas-surface border border-canvas-border p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-canvas-border">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span className="font-mono text-xs font-semibold text-sand uppercase tracking-wider">
                  Academic Record
                </span>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                Class of 2029
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-sand-muted">DEGREE</div>
                <div className="text-base font-bold text-sand mt-0.5">
                  B.Tech in Computer Science and Engineering
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-sand-muted">INSTITUTION</div>
                <div className="text-sm text-sand-dim font-medium mt-0.5">
                  Physics Wallah Institute of Innovation
                </div>
                <div className="text-xs text-sand-muted">B.Tech CSE (Expected 2029)</div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-canvas-subtle border border-canvas-border">
                  <div className="text-[11px] font-mono text-sand-muted">CURRENT CGPA</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                    8.0 / 10
                  </div>
                  <div className="text-[10px] text-sand-subtle">First Year</div>
                </div>

                <div className="p-3 rounded-lg bg-canvas-subtle border border-canvas-border">
                  <div className="text-[11px] font-mono text-sand-muted">COMPETITIONS</div>
                  <div className="text-sm font-semibold text-sand mt-1">ICPC Prelims</div>
                  <div className="text-[10px] text-accent font-mono">Team Member</div>
                </div>
              </div>
            </div>

            {/* Verified Certifications */}
            <div className="pt-4 border-t border-canvas-border space-y-2">
              <div className="text-xs font-mono text-sand-muted">VERIFIED CREDENTIALS</div>
              <div className="space-y-1.5">
                {[
                  { name: "HackerRank Software Engineer Intern", date: "Oct 2026" },
                  { name: "IBM Skills Network / PW: FSD Project Based Learning", date: "Jun 2026" },
                  { name: "IBM Skills Network: HTML, CSS & JavaScript Fundamentals", date: "2026" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="p-2 rounded bg-canvas-elevated border border-canvas-border text-[11px] font-mono flex items-center justify-between"
                  >
                    <span className="text-sand">{cert.name}</span>
                    <span className="text-accent">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Callout */}
            <div className="p-3.5 rounded-lg bg-canvas-elevated border border-canvas-border flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div className="text-xs text-sand-dim">
                <span className="font-semibold text-sand">Internship Readiness:</span> Open to
                Software Engineering, Frontend, and Full Stack Development internship roles with
                immediate or Summer 2025/2026 availability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
