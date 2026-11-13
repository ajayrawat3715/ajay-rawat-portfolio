"use client";

import React, { useState } from "react";
import { X, Printer, Copy, Check, FileText, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyResumePlainText = () => {
    const text = `AJAY RAWAT
Frontend Developer Intern ⋄ React.js ⋄ Hooks ⋄ Responsive UI
Phone: +91 9302699936 | Email: coderajay86091@gmail.com
Portfolio: https://ajay-rawat-portfolio.vercel.app/
GitHub: https://github.com/ajayrawat3715
LinkedIn: https://www.linkedin.com/in/ajay-rawat-78a7b2390/
LeetCode: https://leetcode.com/u/ajayrawat3715/

SUMMARY
Frontend developer intern candidate who builds responsive React.js and TypeScript interfaces with reusable components, React hooks, and client-side state. Shipped an AI-powered merchant dashboard (Paytm VyaparAI) and a food-ordering app, both live on Vercel, and has a merged pull request to the open-source ceph.io website. Collaborates with designers and backend developers, learns quickly, and aims to deliver fast, responsive, well-built UI in an early-stage founding team.

SKILLS
Frontend: React.js, React Hooks, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Responsive Design
Languages: C++, Java, Python, C, JavaScript
Technical Skills: DSA, OOP, REST API Integration, UI Debugging, Git-based Workflows
Databases: PostgreSQL, MySQL, MongoDB
Tools: Git, GitHub, VS Code, IntelliJ IDEA, Vercel

EXPERIENCE
Open-Source Website Contributor | ceph.io
Ceph (GSoC Organization) | Open Source
- Had a pull request merged into the ceph/ceph.io repository, fixing small page issues on the Ceph website.
- Gave the redesign working group written UX feedback as a first-time contributor: one clear "Get started" path, labels that match their destinations, readable contrast and mobile layouts, a simple contributor setup path, and homepage basics (latest release, install, object/block/file storage).
- Reviewing new page designs for the redesign, checking links, labels, and responsive layouts on phone and laptop.

PROJECTS
1. Paytm VyaparAI (Paytm Biz Copilot) | https://paytm-biz-copilot.vercel.app/
   React.js, TypeScript, Vite, Tailwind CSS, TanStack, Recharts, AI SDK | Paytm AI Hackathon
   - Built an AI-enabled merchant copilot that turns business data into actionable insights and recommendations.
   - Developed interactive dashboards with Recharts for sales analytics, customer management, udhaar tracking, repayment monitoring, and business trends.

2. Swaad Wallah | https://swaad-wallah.vercel.app/
   HTML, CSS, JavaScript, LocalStorage | Food-ordering web app
   - Developed a responsive app with restaurant discovery, search, cuisine filters, cart, checkout, and order tracking.
   - Implemented persistent cart state, quantity controls, dynamic pricing, and filtering.

3. Personal Portfolio | https://ajay-rawat-portfolio.vercel.app/
   HTML, CSS, JavaScript, Git, GitHub, Vercel
   - Built and deployed a responsive portfolio showcasing projects and credentials, maintained through Git and GitHub.

RANKS AND ACHIEVEMENTS
- LeetCode: 400+ problems solved, contest rating 1440, 100 Days Badge (2026).
- ICPC: Team member in the ICPC Preliminary Contest.
- Hackathons: Paytm AI Hackathon; RIFT '26 (Unstop Freedom Festival, Physics Wallah Institute of Innovation).

EDUCATION
B.Tech, Computer Science and Engineering (Expected 2029)
Physics Wallah Institute of Innovation
Current CGPA: 8.0/10 (First Year)
Certifications:
- HackerRank Software Engineer Intern (Oct 2026)
- IBM Skills Network / Physics Wallah, Project Based Learning: FSD (Jun 2026)
- IBM Skills Network, HTML, CSS, and JavaScript Fundamentals
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-canvas-surface border border-canvas-border shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-canvas-subtle border-b border-canvas-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm font-semibold text-sand">
              Official Resume · Ajay Rawat
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyResumePlainText}
              className="px-3 py-1.5 rounded-lg bg-canvas-elevated border border-canvas-border text-xs font-mono text-sand hover:text-white transition-colors flex items-center gap-1.5"
              title="Copy plain text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sand-muted" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-accent text-[#05070B] text-xs font-mono font-bold hover:bg-accent-hover transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.35)]"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-sand-muted hover:text-sand hover:bg-canvas-elevated transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans text-sand-dim text-sm leading-relaxed bg-[#0A0E17]">
          {/* Header */}
          <div className="border-b border-canvas-border pb-6 space-y-2 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-sand font-sans tracking-tight">
              AJAY RAWAT
            </h1>
            <p className="text-sm text-accent font-mono font-semibold">
              Frontend Developer Intern ⋄ React.js ⋄ Hooks ⋄ Responsive UI
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs font-mono text-sand-muted pt-1">
              <span>+91 9302699936</span>
              <span>⋄</span>
              <a href="mailto:coderajay86091@gmail.com" className="text-sand hover:underline">
                coderajay86091@gmail.com
              </a>
              <span>⋄</span>
              <a
                href="https://ajay-rawat-portfolio-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-sand hover:underline"
              >
                Portfolio Live
              </a>
              <span>⋄</span>
              <a
                href="https://github.com/ajayrawat3715"
                target="_blank"
                rel="noreferrer"
                className="text-sand hover:underline"
              >
                GitHub
              </a>
              <span>⋄</span>
              <a
                href="https://www.linkedin.com/in/ajay-rawat-78a7b2390/"
                target="_blank"
                rel="noreferrer"
                className="text-sand hover:underline"
              >
                LinkedIn
              </a>
              <span>⋄</span>
              <a
                href="https://leetcode.com/u/ajayrawat3715/"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline"
              >
                LeetCode
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              SUMMARY
            </h2>
            <p className="text-xs text-sand-dim leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              SKILLS
            </h2>
            <div className="space-y-1 text-xs">
              <div>
                <span className="font-bold text-sand">Frontend:</span> React.js, React Hooks, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Responsive Design
              </div>
              <div>
                <span className="font-bold text-sand">Languages:</span> C++, Java, Python, C, JavaScript
              </div>
              <div>
                <span className="font-bold text-sand">Technical Skills:</span> DSA, OOP, REST API Integration, UI Debugging, Git-based Workflows
              </div>
              <div>
                <span className="font-bold text-sand">Databases:</span> PostgreSQL, MySQL, MongoDB
              </div>
              <div>
                <span className="font-bold text-sand">Tools:</span> Git, GitHub, VS Code, IntelliJ IDEA, Vercel
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              EXPERIENCE
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sand">
                <span>Open-Source Website Contributor · ceph.io</span>
                <span className="text-sand-muted font-mono font-normal">ceph.io · Open Source</span>
              </div>
              <div className="text-[11px] font-mono text-accent">Ceph (GSoC Organization)</div>
              <ul className="list-disc list-inside space-y-1 text-sand-dim pl-1">
                <li>Had a pull request merged into the ceph/ceph.io repository, fixing small page issues on the Ceph website.</li>
                <li>Gave the redesign working group written UX feedback as a first-time contributor: one clear &ldquo;Get started&rdquo; path, labels that match their destinations, readable contrast and mobile layouts, a simple contributor setup path, and homepage basics (latest release, install, object/block/file storage).</li>
                <li>Reviewing new page designs for the redesign, checking links, labels, and responsive layouts on phone and laptop.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sand">
                <a
                  href="https://paytm-biz-copilot.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1 text-accent"
                >
                  <span>Paytm VyaparAI (Paytm Biz Copilot)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-sand-muted font-mono font-normal">Paytm AI Hackathon</span>
              </div>
              <div className="text-[11px] font-mono text-sand-muted">
                React.js, TypeScript, Vite, Tailwind CSS, TanStack, Recharts, AI SDK
              </div>
              <ul className="list-disc list-inside space-y-1 text-sand-dim pl-1">
                <li>Built an AI-enabled merchant copilot that turns business data into actionable insights and recommendations.</li>
                <li>Developed interactive dashboards with Recharts for sales analytics, customer management, udhaar tracking, repayment monitoring, and business trends.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sand">
                <a
                  href="https://swaad-wallah.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1 text-accent"
                >
                  <span>Swaad Wallah</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-sand-muted font-mono font-normal">Food-ordering web app</span>
              </div>
              <div className="text-[11px] font-mono text-sand-muted">
                HTML, CSS, JavaScript, LocalStorage
              </div>
              <ul className="list-disc list-inside space-y-1 text-sand-dim pl-1">
                <li>Developed a responsive app with restaurant discovery, search, cuisine filters, cart, checkout, and order tracking.</li>
                <li>Implemented persistent cart state, quantity controls, dynamic pricing, and filtering.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sand">
                <a
                  href="https://ajay-rawat-portfolio-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1 text-sand"
                >
                  <span>Personal Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-sand-muted font-mono font-normal">Vercel</span>
              </div>
              <div className="text-[11px] font-mono text-sand-muted">
                HTML, CSS, JavaScript, Git, GitHub, Vercel
              </div>
              <ul className="list-disc list-inside space-y-1 text-sand-dim pl-1">
                <li>Built and deployed a responsive portfolio showcasing projects and credentials, maintained through Git and GitHub.</li>
              </ul>
            </div>
          </div>

          {/* Ranks & Achievements */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              RANKS AND ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-sand-dim pl-1">
              <li><span className="font-bold text-sand">LeetCode:</span> 400+ problems solved, contest rating 1440, 100 Days Badge (2026).</li>
              <li><span className="font-bold text-sand">ICPC:</span> Team member in the ICPC Preliminary Contest.</li>
              <li><span className="font-bold text-sand">Hackathons:</span> Paytm AI Hackathon; RIFT &apos;26 (Unstop Freedom Festival, Physics Wallah Institute of Innovation).</li>
            </ul>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-2 border-t border-canvas-border pt-4">
            <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
            <div className="space-y-1.5 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sand">
                <span>B.Tech, Computer Science and Engineering</span>
                <span className="text-sand-muted font-mono font-normal">Expected 2029</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sand-dim">
                <span>Physics Wallah Institute of Innovation</span>
                <span className="font-mono text-accent font-semibold">Current CGPA: 8.0/10 (First Year)</span>
              </div>
              <div className="pt-2 text-sand-dim space-y-1">
                <div className="font-semibold text-sand">Certifications:</div>
                <div className="text-[11px] pl-2">• HackerRank Software Engineer Intern (Oct 2026)</div>
                <div className="text-[11px] pl-2">• IBM Skills Network / Physics Wallah, Project Based Learning: FSD (Jun 2026)</div>
                <div className="text-[11px] pl-2">• IBM Skills Network, HTML, CSS, and JavaScript Fundamentals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
