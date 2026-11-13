"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OPEN_SOURCE_EXPERIENCE } from "@/data/portfolioData";
import { GitPullRequest, ExternalLink, CheckCircle2, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="02"
        eyebrow="OPEN-SOURCE IMPACT & EXPERIENCE"
        title="Production contributions &"
        highlight="open source."
        description="Real-world collaboration with global open-source communities. Merged pull requests and technical design feedback in production codebases."
      />

      <div className="space-y-6">
        {OPEN_SOURCE_EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="rounded-2xl bg-canvas-surface border border-canvas-border p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-canvas-border">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-sans font-bold text-xl text-sand">
                      {exp.role}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent/15 text-accent border border-accent/30 font-semibold">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="text-xs text-sand-dim font-mono mt-0.5">
                    {exp.organization} · {exp.period}
                  </div>
                </div>
              </div>

              {exp.orgUrl && (
                <a
                  href={exp.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-subtle border border-canvas-border text-xs font-mono text-sand hover:border-accent hover:text-white transition-colors self-start sm:self-auto"
                >
                  <span>Visit ceph.io</span>
                  <ExternalLink className="w-3 h-3 text-sand-muted" />
                </a>
              )}
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-sand-dim leading-relaxed font-sans">
                  {exp.summary}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs text-sand font-semibold uppercase tracking-wider">
                    Key Deliverables &amp; PR Milestones
                  </div>
                  <ul className="space-y-2.5 text-xs text-sand-dim">
                    {exp.contributions.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right metadata badge box */}
              <div className="lg:col-span-4 p-5 rounded-xl bg-canvas-subtle border border-canvas-border space-y-4">
                <div className="font-mono text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Contribution Scope</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-sand font-medium">Repository:</div>
                  <div className="p-2 rounded bg-canvas-elevated font-mono text-[11px] text-sand-dim border border-canvas-border">
                    ceph/ceph.io (GitHub)
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-sand font-medium">Skills Exercised:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-canvas-elevated border border-canvas-border font-mono text-[10px] text-sand-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-canvas-border text-[11px] font-mono text-sand-subtle">
                  ✓ Verified open-source merged PR
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

