"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS, Project } from "@/data/portfolioData";
import { SwaadWallahModal } from "@/components/projects/SwaadWallahModal";
import { PaytmVyaparAiSimulator } from "@/components/projects/PaytmVyaparAiSimulator";
import { PortfolioShowcaseSimulator } from "@/components/projects/PortfolioShowcaseSimulator";
import { Github, ExternalLink, Play, Code2, ArrowUpRight, Sparkles, Layers, CheckCircle2 } from "lucide-react";

export const FeaturedProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<{ [projectId: string]: "simulator" | "blueprint" }>({
    "paytm-vyapar-ai": "simulator",
    swaadwallah: "simulator",
    "personal-portfolio": "simulator",
  });

  const setProjectView = (projectId: string, view: "simulator" | "blueprint") => {
    setActiveTab((prev) => ({ ...prev, [projectId]: view }));
  };

  const renderProjectInteractive = (project: Project) => {
    if (project.id === "paytm-vyapar-ai") {
      return <PaytmVyaparAiSimulator />;
    }
    if (project.id === "swaadwallah") {
      return <SwaadWallahModal />;
    }
    if (project.id === "personal-portfolio") {
      return <PortfolioShowcaseSimulator />;
    }
    return null;
  };

  return (
    <section id="projects" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="04"
        eyebrow="ENGINEERED SYSTEMS & APPS"
        title="Featured projects &"
        highlight="software."
        description="A curated showcase of applications engineered with React.js, TypeScript, Vite, Tailwind CSS, and persistent client state, all deployed live on Vercel."
      />

      {/* Projects Stack */}
      <div className="space-y-20 sm:space-y-28">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          const currentView = activeTab[project.id] || "simulator";

          return (
            <article
              key={project.id}
              className="relative rounded-2xl bg-canvas-subtle border border-canvas-border p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-canvas-border-bright"
            >
              {/* Project Top Index Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-canvas-border">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-accent">
                    PROJ / 0{index + 1}
                  </span>
                  <span className="w-4 h-[1px] bg-canvas-border" />
                  <span className="font-mono text-xs text-sand-muted uppercase">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent border border-accent/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* View Switcher: Interactive Demo vs Architecture Blueprint */}
                <div className="flex items-center gap-1 bg-canvas-surface p-1 rounded-lg border border-canvas-border text-xs font-mono">
                  <button
                    onClick={() => setProjectView(project.id, "simulator")}
                    className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 ${
                      currentView === "simulator"
                        ? "bg-accent text-[#05070B] font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]"
                        : "text-sand-muted hover:text-sand"
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    <span>Interactive Sandbox</span>
                  </button>
                  <button
                    onClick={() => setProjectView(project.id, "blueprint")}
                    className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 ${
                      currentView === "blueprint"
                        ? "bg-accent text-[#05070B] font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]"
                        : "text-sand-muted hover:text-sand"
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Technical Spec</span>
                  </button>
                </div>
              </div>

              {/* Main 2-Column Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-start">
                {/* Left Specs & Narrative */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-sand font-sans tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-accent font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-sand-dim leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="font-mono text-xs text-sand font-semibold uppercase tracking-wider">
                      Technical Highlights
                    </div>
                    <ul className="space-y-2 text-xs text-sand-dim">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Pills */}
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-xs text-sand-muted">TECH STACK</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-canvas-elevated border border-canvas-border text-xs font-mono text-sand"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Links Cluster */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-canvas-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-canvas-surface border border-canvas-border text-xs font-mono text-sand hover:border-accent hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-sand-muted" />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-[#05070B] text-xs font-mono font-bold hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,229,255,0.35)]"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                        <span>Live on Vercel ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Live Interactive Sandbox OR Architecture Blueprint */}
                <div className="lg:col-span-7">
                  {currentView === "simulator" ? (
                    renderProjectInteractive(project)
                  ) : (
                    /* Technical Blueprint View */
                    <div className="rounded-xl bg-canvas-surface border border-canvas-border p-6 space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                        <div className="font-mono text-xs font-semibold text-sand">
                          ARCHITECTURAL BREAKDOWN & SPECIFICATION
                        </div>
                        <span className="font-mono text-[10px] text-accent">Verified Design</span>
                      </div>

                      {project.architecture ? (
                        <div className="space-y-3">
                          {project.architecture.layers.map((layer, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-3 rounded-lg bg-canvas-subtle border border-canvas-border flex items-start gap-3"
                            >
                              <div className="font-mono text-xs text-accent font-bold mt-0.5">
                                0{lIdx + 1}
                              </div>
                              <div className="space-y-1">
                                <div className="text-xs font-bold text-sand flex items-center gap-2">
                                  <span>{layer.name}</span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-canvas-elevated text-sand-dim border border-canvas-border">
                                    {layer.tech}
                                  </span>
                                </div>
                                <div className="text-xs text-sand-muted leading-relaxed font-sans">
                                  {layer.desc}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-3 text-xs text-sand-dim font-sans leading-relaxed">
                          <p>
                            Designed with strict component boundaries, clear separation between data
                            fixtures and layout templates, and structured error boundaries.
                          </p>
                          <div className="p-3 rounded-lg bg-canvas-subtle border border-canvas-border font-mono text-[11px] text-sand-muted space-y-1.5">
                            <div className="text-sand font-semibold">Key Architectural Tenets:</div>
                            <div>• Zero client runtime overhead where static rendering suffices.</div>
                            <div>• Predictable state management with local storage fallbacks.</div>
                            <div>• Full accessibility and semantic document hierarchy.</div>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 text-right">
                        <button
                          onClick={() => setProjectView(project.id, "simulator")}
                          className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1"
                        >
                          <span>Switch to interactive live preview</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
