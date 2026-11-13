"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, Linkedin, Github, Code2, ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Internship Opportunity",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto URI
    const subject = encodeURIComponent(
      `[Portfolio Contact - ${formData.role}] From ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Ajay,\n\n${formData.message}\n\n---\nSender: ${formData.name} (${formData.email})\nRole Context: ${formData.role}`
    );

    window.open(`mailto:${PERSONAL_INFO.links.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="07"
        eyebrow="GET IN TOUCH"
        title="Let's build something"
        highlight="worth talking about."
        description="Currently available for Software Engineering, Frontend, and Full Stack Development internships. I respond quickly to inquiries from recruiters and engineering teams."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Outreach & Verified Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h3 className="font-sans font-bold text-xl text-sand">
              Direct Communication
            </h3>
            <p className="text-sm text-sand-dim leading-relaxed font-sans">
              Whether you are an engineering manager looking for a disciplined intern, a recruiter
              reviewing candidates, or an engineer who wants to discuss code, feel free to reach out.
            </p>
          </div>

          {/* Direct Email Action Box */}
          <div className="p-5 rounded-xl bg-canvas-surface border border-canvas-border space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-sand-muted">PRIMARY EMAIL</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Fast Response
              </span>
            </div>

            <div className="font-mono text-base font-bold text-sand break-all">
              {PERSONAL_INFO.links.email}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={copyEmail}
                className="flex-1 py-2 px-3 rounded-lg bg-canvas-elevated border border-canvas-border text-xs font-mono text-sand hover:border-accent hover:text-white transition-all flex items-center justify-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-sand-muted" />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.links.email}`}
                className="py-2 px-4 rounded-lg bg-accent text-canvas text-xs font-mono font-semibold hover:bg-accent-hover transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-sand-muted">DIRECT CHANNELS &amp; PROFILES</span>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3 rounded-lg bg-canvas-surface border border-canvas-border hover:border-emerald-500/50 transition-all flex items-center justify-between text-xs text-sand"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono">{PERSONAL_INFO.phone}</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-canvas-surface border border-canvas-border hover:border-blue-400/50 transition-all flex items-center justify-between text-xs text-sand"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-canvas-surface border border-canvas-border hover:border-canvas-border-bright transition-all flex items-center justify-between text-xs text-sand"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-sand" />
                  <span className="font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
              </a>

              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-canvas-surface border border-canvas-border hover:border-amber-400/50 transition-all flex items-center justify-between text-xs text-sand"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">LeetCode (1440)</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
              </a>

              <a
                href={PERSONAL_INFO.links.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-canvas-surface border border-canvas-border hover:border-sky-400/50 transition-all flex items-center justify-between text-xs text-sand"
              >
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded text-sky-400 font-bold font-mono text-[10px] flex items-center justify-center">
                    CF
                  </span>
                  <span className="font-medium">Codeforces</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Message Dispatcher */}
        <div className="lg:col-span-7">
          <div className="rounded-xl bg-canvas-surface border border-canvas-border p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-canvas-border mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <h4 className="font-sans font-bold text-sm text-sand">
                  Direct Inbound Message
                </h4>
              </div>
              <span className="font-mono text-[11px] text-sand-muted">
                Direct to ajayrawat3715@gmail.com
              </span>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h5 className="font-sans font-bold text-lg text-sand">
                  Message Prepared in Mail Client!
                </h5>
                <p className="text-xs text-sand-dim max-w-md mx-auto leading-relaxed">
                  Your mail client has been opened with your message pre-filled. If it didn&apos;t open
                  automatically, you can also copy my email directly:{" "}
                  <span className="font-mono text-accent">{PERSONAL_INFO.links.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-canvas-elevated border border-canvas-border text-xs font-mono text-sand hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-sand-muted block">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Engineering Recruiter)"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-canvas-border text-sand placeholder:text-sand-subtle focus:border-accent focus:outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-sand-muted block">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sjenkins@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-canvas-border text-sand placeholder:text-sand-subtle focus:border-accent focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-sand-muted block">PURPOSE / OPPORTUNITY</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-canvas-border text-sand font-mono focus:border-accent focus:outline-none"
                  >
                    <option value="Software Engineering Internship">
                      Software Engineering Internship
                    </option>
                    <option value="Frontend Development Internship">
                      Frontend Development Internship
                    </option>
                    <option value="Full Stack Internship">Full Stack Internship</option>
                    <option value="Open Source Collaboration / GSoC">
                      Open Source Collaboration / GSoC
                    </option>
                    <option value="Technical Networking & Inquiry">
                      Technical Networking &amp; Inquiry
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-sand-muted block">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, team, timeline, or project..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-subtle border border-canvas-border text-sand placeholder:text-sand-subtle focus:border-accent focus:outline-none font-sans"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sand-subtle">
                    Reliable delivery via mail client
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-accent text-[#05070B] font-mono font-bold hover:bg-accent-hover transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
