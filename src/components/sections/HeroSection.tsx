"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Code2, Linkedin, Terminal, Sparkles, Check, Copy, Flame, Layers } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenResume?: () => void;
  onOpenQuickScan?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenQuickScan,
}) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const developerObject = `// ajay_rawat.config.ts
export const developer = {
  name: "Ajay Rawat",
  role: "Frontend Developer Intern",
  specialization: "React.js · Hooks · TypeScript · Responsive UI",
  academics: {
    institution: "Physics Wallah Institute of Innovation",
    program: "B.Tech CSE (Expected 2029)",
    cgpa: "8.0 / 10 (First Year)",
  },
  openSource: "Ceph (ceph.io - GSoC Org) · Merged PR",
  competitions: [
    "ICPC Preliminary Contest Team Member",
    "Paytm AI Hackathon (Shipped VyaparAI)",
    "RIFT '26 (Unstop Freedom Festival)",
  ],
  leetcode: "400+ Solved · Contest Rating 1440 · 100 Days Badge",
  shippedLive: [
    "https://paytm-biz-copilot.vercel.app/",
    "https://swaad-wallah.vercel.app/",
  ],
  status: "Available for Frontend & Software Engineering Internships",
};`;

  const copySnippet = () => {
    navigator.clipboard.writeText(developerObject);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-canvas-border">
      {/* Editorial engineering subtle grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-60 pointer-events-none" />
      
      {/* Subtle single ambient warmth at top-right corner */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top metadata eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-surface border border-hud text-xs font-mono text-sand">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#00E5FF]" />
              <span className="text-sand-dim font-bold tracking-widest">SYS.CADRE</span>
              <span className="text-sand-subtle">/</span>
              <span className="text-accent font-semibold">CLASS OF 2029</span>
            </div>

            {/* Prominent Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-sand font-sans leading-[1.08]">
                Ajay <span className="text-accent">Rawat</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-sand-dim tracking-tight">
                Frontend Developer Intern <span className="text-accent">⋄</span> React.js <span className="text-accent">⋄</span> Hooks <span className="text-accent">⋄</span> Responsive UI
              </p>
            </div>

            {/* Human Tagline (Directly from Resume) */}
            <p className="text-base sm:text-lg text-sand-muted leading-relaxed max-w-2xl font-normal">
              I build responsive React.js and TypeScript interfaces with reusable components, React
              hooks, and client-side state. Shipped an AI-powered merchant dashboard (Paytm VyaparAI)
              and a food-ordering app, both live on Vercel, with a merged pull request to the
              open-source <span className="text-sand font-medium">ceph.io</span> website.
            </p>

            {/* Metrics Ribbon (Real verified metrics from Resume) */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3 rounded-lg bg-canvas-surface/80 border border-canvas-border">
                <div className="flex items-center gap-1.5 text-accent text-xs font-mono mb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LEETCODE</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-sand">
                  400+
                </div>
                <div className="text-[11px] text-amber-400 font-mono">Rating 1440 · 100d</div>
              </div>

              <div className="p-3 rounded-lg bg-canvas-surface/80 border border-canvas-border">
                <div className="flex items-center gap-1.5 text-accent text-xs font-mono mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>ICPC PRELIMS</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-sand">
                  Team
                </div>
                <div className="text-[11px] text-emerald-400 font-mono">Contest Member</div>
              </div>

              <div className="p-3 rounded-lg bg-canvas-surface/80 border border-canvas-border">
                <div className="flex items-center gap-1.5 text-accent text-xs font-mono mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>OPEN SOURCE</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-sand truncate">
                  Ceph
                </div>
                <div className="text-[11px] text-accent font-mono">Merged PR (GSoC)</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-[#05070B] font-mono font-bold text-xs tracking-wider uppercase hover:bg-accent-hover transition-all shadow-[0_0_28px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.65)]"
              >
                <span>Explore Projects ❯</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-canvas-surface border border-canvas-border text-sand font-mono font-semibold text-xs tracking-wider uppercase hover:border-canvas-border-bright hover:bg-canvas-elevated transition-all"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sand-muted" />
              </a>

              {onOpenQuickScan && (
                <button
                  onClick={onOpenQuickScan}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-canvas-subtle border border-canvas-border text-sand-dim font-mono text-xs hover:text-accent hover:border-accent transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span className="hidden sm:inline">Recruiter 30s Summary</span>
                  <span className="sm:hidden">Recruiter Summary</span>
                </button>
              )}
            </div>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-4 pt-3 text-xs font-mono text-sand-muted">
              <span>PROFILES:</span>
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sand transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-sand-subtle">·</span>
              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sand transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>LeetCode</span>
              </a>
              <span className="text-sand-subtle">·</span>
              <a
                href={PERSONAL_INFO.links.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sand transition-colors"
              >
                <span className="text-sky-400 font-bold">CF</span>
                <span>Codeforces</span>
              </a>
              <span className="text-sand-subtle">·</span>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sand transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Craft Interactive System Spec Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-canvas-surface border border-canvas-border shadow-2xl overflow-hidden">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-canvas-subtle border-b border-canvas-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[11px] text-sand-muted">
                    ajay-rawat-spec.ts
                  </span>
                </div>
                <button
                  onClick={copySnippet}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-canvas-elevated hover:bg-canvas-border text-[11px] font-mono text-sand-muted hover:text-sand transition-colors"
                  title="Copy developer snippet"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-sand-dim bg-[#0B0D11]">
                <pre className="text-[12px] leading-5">
                  <code>
                    <span className="text-sand-subtle">// Developer Profile Specification</span>
                    {"\n"}
                    <span className="text-accent">const</span>{" "}
                    <span className="text-sand">candidate</span> = &#123;
                    {"\n"}  <span className="text-sand-muted">name</span>:{" "}
                    <span className="text-emerald-300">&quot;Ajay Rawat&quot;</span>,
                    {"\n"}  <span className="text-sand-muted">role</span>:{" "}
                    <span className="text-emerald-300">&quot;Frontend Developer Intern&quot;</span>,
                    {"\n"}  <span className="text-sand-muted">academics</span>: &#123;
                    {"\n"}    <span className="text-sand-muted">institution</span>:{" "}
                    <span className="text-emerald-300">&quot;Physics Wallah Institute of Innovation&quot;</span>,
                    {"\n"}    <span className="text-sand-muted">cgpa</span>:{" "}
                    <span className="text-emerald-300">&quot;8.0 / 10 (First Year)&quot;</span>,
                    {"\n"}    <span className="text-sand-muted">graduation</span>:{" "}
                    <span className="text-amber-300">2029</span>,
                    {"\n"}  &#125;,
                    {"\n"}  <span className="text-sand-muted">openSource</span>:{" "}
                    <span className="text-cyan-300">&quot;Ceph (ceph.io) · Merged PR&quot;</span>,
                    {"\n"}  <span className="text-sand-muted">competitions</span>: [
                    {"\n"}    <span className="text-emerald-300">&quot;ICPC Prelims Member&quot;</span>,
                    {"\n"}    <span className="text-emerald-300">&quot;Paytm AI Hackathon&quot;</span>
                    {"\n"}  ],
                    {"\n"}  <span className="text-sand-muted">leetcode</span>: &#123;
                    {"\n"}    <span className="text-sand-muted">solved</span>:{" "}
                    <span className="text-amber-300">&quot;400+&quot;</span>,
                    {"\n"}    <span className="text-sand-muted">contestRating</span>:{" "}
                    <span className="text-amber-300">1440</span>,
                    {"\n"}    <span className="text-sand-muted">streakBadge</span>:{" "}
                    <span className="text-amber-300">&quot;100 Days Badge (2026)&quot;</span>,
                    {"\n"}  &#125;,
                    {"\n"}  <span className="text-sand-muted">shippedLive</span>: [
                    {"\n"}    <span className="text-accent">&quot;paytm-biz-copilot.vercel.app&quot;</span>,
                    {"\n"}    <span className="text-accent">&quot;swaad-wallah.vercel.app&quot;</span>
                    {"\n"}  ],
                    {"\n"}  <span className="text-sand-muted">contactEmail</span>:{" "}
                    <span className="text-sand">&quot;coderajay86091@gmail.com&quot;</span>,
                    {"\n"}&#125;;
                  </code>
                </pre>
              </div>

              {/* Status Footer */}
              <div className="px-4 py-3 bg-canvas-subtle border-t border-canvas-border flex items-center justify-between text-[11px] font-mono text-sand-muted">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Credentials</span>
                </div>
                <span className="text-sand-subtle">UTF-8 · TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

