"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, FileText, Sparkles, UserCheck, ShieldCheck, Clock } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface RecruiterQuickSummaryProps {
  onOpenResume?: () => void;
}

export const RecruiterQuickSummary: React.FC<RecruiterQuickSummaryProps> = ({
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-canvas-subtle border-y border-canvas-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-canvas-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans font-bold text-base text-sand">
                  Recruiter Executive Summary
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  30-Second Scan
                </span>
              </div>
              <p className="text-xs text-sand-muted">
                Key qualifications and hiring metrics for technical recruiters &amp; engineering managers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-canvas-surface border border-canvas-border text-xs font-mono text-sand hover:border-accent transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sand-muted" />
                  <span>Copy coderajay86091@gmail.com</span>
                </>
              )}
            </button>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-accent text-canvas text-xs font-mono font-semibold hover:bg-accent-hover transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>
            )}
          </div>
        </div>

        {/* 4-Column Quick Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
          {/* Card 1: Candidate & Education */}
          <div className="space-y-1.5">
            <div className="font-mono text-accent text-[11px] font-semibold uppercase tracking-wider">
              01 / Candidate &amp; Education
            </div>
            <div className="text-sm font-semibold text-sand">{PERSONAL_INFO.name}</div>
            <div className="text-sand-dim">B.Tech Computer Science (Grad. 2029)</div>
            <div className="text-sand-muted text-[11px]">
              {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.gpa}
            </div>
          </div>

          {/* Card 2: Target Roles & Timing */}
          <div className="space-y-1.5">
            <div className="font-mono text-accent text-[11px] font-semibold uppercase tracking-wider">
              02 / Target Roles
            </div>
            <div className="text-sm font-semibold text-sand">Frontend Developer Intern</div>
            <div className="text-sand-dim">React.js · Hooks · Responsive UI</div>
            <div className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Available for Internships</span>
            </div>
          </div>

          {/* Card 3: Problem Solving Proof */}
          <div className="space-y-1.5">
            <div className="font-mono text-accent text-[11px] font-semibold uppercase tracking-wider">
              03 / Competitive Proof
            </div>
            <div className="text-sm font-semibold text-sand">
              400+ Solved · Rating 1440
            </div>
            <div className="text-sand-dim">ICPC Prelims Member · 100d Badge</div>
            <div className="flex items-center gap-2 text-sand-muted text-[11px] font-mono">
              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-0.5"
              >
                LeetCode <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>·</span>
              <span className="text-cyan-400 font-bold">Ceph (GSoC) PR</span>
            </div>
          </div>

          {/* Card 4: Verified Core Stack */}
          <div className="space-y-1.5">
            <div className="font-mono text-accent text-[11px] font-semibold uppercase tracking-wider">
              04 / Shipped Live Apps
            </div>
            <div className="text-sm font-semibold text-sand">
              Paytm VyaparAI &amp; Swaad Wallah
            </div>
            <div className="text-sand-dim">React.js, Vite, TypeScript, Tailwind</div>
            <div className="text-sand-muted text-[11px] font-mono">
              Live on Vercel · Monitored
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

