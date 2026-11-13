"use client";

import React, { useState } from "react";
import { Laptop, Tablet, Smartphone, ExternalLink, CheckCircle2, GitBranch, Globe, Sparkles } from "lucide-react";

export const PortfolioShowcaseSimulator: React.FC = () => {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[280px]";
      case "tablet":
        return "max-w-[420px]";
      default:
        return "w-full";
    }
  };

  return (
    <div className="rounded-xl bg-canvas-surface border border-canvas-border overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="px-4 py-3 bg-canvas-subtle border-b border-canvas-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="font-mono text-xs font-semibold text-sand">
            Personal Portfolio · Vercel Deployment Architecture
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Live on Vercel
          </span>
        </div>
        <a
          href="https://ajay-rawat-portfolio-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-accent hover:underline"
        >
          <span>Open Live Site</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Device Switcher toolbar */}
        <div className="flex items-center justify-between border-b border-canvas-border pb-2.5 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-sand-muted mr-1">RESPONSIVE VIEWPORT:</span>
            <button
              onClick={() => setViewport("desktop")}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                viewport === "desktop"
                  ? "bg-accent text-[#05070B] font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                  : "text-sand-muted hover:text-sand"
              }`}
            >
              <Laptop className="w-3 h-3" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewport("tablet")}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                viewport === "tablet"
                  ? "bg-accent text-[#05070B] font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                  : "text-sand-muted hover:text-sand"
              }`}
            >
              <Tablet className="w-3 h-3" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setViewport("mobile")}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                viewport === "mobile"
                  ? "bg-accent text-[#05070B] font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                  : "text-sand-muted hover:text-sand"
              }`}
            >
              <Smartphone className="w-3 h-3" />
              <span>Mobile</span>
            </button>
          </div>

          <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Vercel Edge: 100% Uptime</span>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="flex justify-center p-3 bg-canvas-subtle/60 rounded-xl border border-canvas-border">
          <div
            className={`transition-all duration-300 rounded-lg bg-[#070A10] border border-canvas-border overflow-hidden p-4 space-y-3 ${getViewportWidth()}`}
          >
            <div className="flex items-center justify-between border-b border-canvas-border/60 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-canvas-surface border border-canvas-border flex items-center justify-center font-mono text-[9px] font-bold text-accent">
                  AR
                </span>
                <span className="text-xs font-bold text-sand">Ajay Rawat</span>
              </div>
              <span className="text-[9px] font-mono text-accent">ajay-rawat-portfolio.vercel.app</span>
            </div>

            <div className="space-y-1.5 text-xs text-sand-dim">
              <div className="text-[10px] font-mono text-accent uppercase tracking-wider">
                Engineering Cadre · 2029
              </div>
              <div className="font-bold text-sand text-sm">
                Frontend Developer Intern &amp; Open Source Contributor
              </div>
              <p className="text-[11px] text-sand-muted leading-relaxed">
                Responsive showcase architecture engineered with clean HTML, CSS, JavaScript, and deployed via continuous integration on Vercel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10px]">
              <div className="p-2 rounded bg-canvas-surface border border-canvas-border">
                <div className="text-sand-muted">HOSTING</div>
                <div className="text-sand font-bold">Vercel Global CDN</div>
              </div>
              <div className="p-2 rounded bg-canvas-surface border border-canvas-border">
                <div className="text-sand-muted">SOURCE REPO</div>
                <div className="text-sand font-bold">Git &amp; GitHub</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-sand-dim">
          <div className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Zero build lag / Static HTML &amp; CSS delivery</span>
          </div>
          <div className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Continuous branch deployments via GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

