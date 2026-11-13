"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Code2, Heart, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-canvas-subtle border-t border-canvas-border py-12 sm:py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Column 1: Monogram & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-sand font-bold text-sm">
              <span className="w-6 h-6 rounded bg-canvas-surface border border-canvas-border flex items-center justify-center text-accent text-xs">
                AR
              </span>
              <span>Ajay Rawat</span>
              <span className="text-sand-subtle text-xs">/ B.Tech CSE &apos;29</span>
            </div>
            <p className="text-sand-muted font-sans text-xs max-w-sm leading-relaxed">
              Frontend Developer Intern candidate at Physics Wallah Institute of Innovation (Class of 2029).
              Shipped Paytm VyaparAI and Swaad Wallah live on Vercel, with merged contributions to Ceph (GSoC Org).
            </p>
            <div className="text-[11px] text-sand-subtle">
              Phone: +91 9302699936 · coderajay86091@gmail.com
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-sand font-semibold uppercase tracking-wider text-[11px]">
              Directory
            </div>
            <ul className="space-y-1.5 text-sand-muted">
              <li>
                <a href="#about" className="hover:text-sand transition-colors">
                  01 / Engineering Journey
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sand transition-colors">
                  02 / Open Source (Ceph)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sand transition-colors">
                  03 / Technical Arsenal
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sand transition-colors">
                  04 / Engineered Projects
                </a>
              </li>
              <li>
                <a href="#dsa" className="hover:text-sand transition-colors">
                  05 / DSA &amp; ICPC Log
                </a>
              </li>
              <li>
                <a href="#exploring" className="hover:text-sand transition-colors">
                  06 / Currently Exploring
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sand transition-colors">
                  07 / Inquiries &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Profiles & System Status */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-sand font-semibold uppercase tracking-wider text-[11px]">
              External Profiles
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-canvas-surface border border-canvas-border text-sand-muted hover:text-sand hover:border-canvas-border-bright transition-colors"
              >
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-canvas-surface border border-canvas-border text-sand-muted hover:text-sand hover:border-canvas-border-bright transition-colors"
              >
                LeetCode
              </a>
              <a
                href={PERSONAL_INFO.links.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-canvas-surface border border-canvas-border text-sand-muted hover:text-sand hover:border-canvas-border-bright transition-colors"
              >
                Codeforces
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-canvas-surface border border-canvas-border text-sand-muted hover:text-sand hover:border-canvas-border-bright transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas-elevated border border-canvas-border text-sand-dim hover:text-sand hover:border-accent transition-colors text-[11px]"
              >
                <ArrowUp className="w-3.5 h-3.5 text-accent" />
                <span>Return to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sand-subtle">
          <div>
            © {new Date().getFullYear()} Ajay Rawat. Crafted with Next.js, TypeScript, &amp; Tailwind.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>All systems nominal</span>
            <span>·</span>
            <span>Zero AI-template artifacts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

