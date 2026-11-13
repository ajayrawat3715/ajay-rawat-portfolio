"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPLORATION_TOPICS } from "@/data/portfolioData";
import { Sparkles, Terminal, ArrowUpRight, Cpu, GitPullRequest, BookOpen, Layers } from "lucide-react";

export const CurrentlyExploringSection: React.FC = () => {
  const getTopicIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-accent" />;
      case 1:
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 2:
        return <GitPullRequest className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <BookOpen className="w-4 h-4 text-sky-400" />;
      default:
        return <Terminal className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="exploring" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="06"
        eyebrow="FORWARD MOMENTUM"
        title="Currently exploring &amp;"
        highlight="researching."
        description="Great engineers never stay static. Here is what I am actively reading, building, and experimenting with outside of class."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPLORATION_TOPICS.map((topic, index) => (
          <div
            key={topic.title}
            className="group p-6 sm:p-7 rounded-xl bg-canvas-surface border border-canvas-border hover:border-canvas-border-bright transition-all duration-300 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-canvas-subtle border border-canvas-border">
                    {getTopicIcon(index)}
                  </span>
                  <span className="font-mono text-xs font-semibold text-accent">
                    {topic.tag}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-canvas-elevated text-sand-dim border border-canvas-border">
                  {topic.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-sand font-sans group-hover:text-white transition-colors">
                {topic.title}
              </h3>

              <p className="text-sm text-sand-dim leading-relaxed font-sans font-normal">
                {topic.description}
              </p>
            </div>

            <div className="pt-4 border-t border-canvas-border/70 space-y-2">
              <div className="font-mono text-[11px] text-sand-muted">FOCUS AREAS</div>
              <div className="flex flex-wrap gap-1.5">
                {topic.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded bg-canvas-subtle border border-canvas-border text-xs font-mono text-sand-dim"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
