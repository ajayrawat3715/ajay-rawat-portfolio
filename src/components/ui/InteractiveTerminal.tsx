"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, X, Minimize2, Maximize2, Sparkles, Send } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import { useSound } from "./AudioFeedback";

export const InteractiveTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: "init",
      output: (
        <div className="space-y-1 text-sand-dim">
          <div className="text-accent font-bold">AJAY RAWAT // SYSTEM SHELL v2.4</div>
          <div>B.Tech CSE (Expected 2029) · Physics Wallah Institute of Innovation · CGPA: 8.0/10</div>
          <div className="text-sand-subtle">
            Type <span className="text-sand font-bold">&apos;help&apos;</span> to inspect commands or <span className="text-accent font-bold">&apos;sudo hire ajay&apos;</span>.
          </div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const { playClick, playSuccess, playBeep } = useSound();

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    playClick();
    const lower = cmd.toLowerCase();
    let output: string | React.ReactNode = "";

    switch (lower) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <div>Available Commands:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sand-dim">
              <div><span className="text-accent font-mono font-bold">skills</span> - Display verified technical arsenal</div>
              <div><span className="text-accent font-mono font-bold">projects</span> - List live shipped web apps</div>
              <div><span className="text-accent font-mono font-bold">experience</span> - View Ceph open source PR details</div>
              <div><span className="text-accent font-mono font-bold">icpc</span> - ICPC preliminary contest info</div>
              <div><span className="text-accent font-mono font-bold">contact</span> - Phone, email, &amp; links</div>
              <div><span className="text-accent font-mono font-bold">clear</span> - Clear terminal buffer</div>
              <div><span className="text-accent font-mono font-bold">sudo hire ajay</span> - Fast-track interview access</div>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-sand-dim">
            <div><span className="text-accent font-bold">Frontend:</span> React.js, React Hooks, TypeScript, JavaScript (ES6+), Tailwind CSS, Vite, HTML5, CSS3</div>
            <div><span className="text-accent font-bold">Languages:</span> C++, Java, Python, C, JavaScript</div>
            <div><span className="text-accent font-bold">Technical:</span> DSA (400+ solved), OOP, REST API Integration, UI Debugging, Git-based Workflows</div>
            <div><span className="text-accent font-bold">Databases:</span> PostgreSQL, MySQL, MongoDB</div>
            <div><span className="text-accent font-bold">Tools:</span> Git, GitHub, VS Code, IntelliJ IDEA, Vercel</div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-xs text-sand-dim">
            <div>1. <span className="text-sand font-bold">Paytm VyaparAI (Paytm Biz Copilot)</span> - Live on Vercel: https://paytm-biz-copilot.vercel.app/ (React, TypeScript, Vite, TanStack, Recharts, AI SDK)</div>
            <div>2. <span className="text-sand font-bold">Swaad Wallah</span> - Live on Vercel: https://swaad-wallah.vercel.app/ (HTML, CSS, JS, LocalStorage)</div>
            <div>3. <span className="text-sand font-bold">Personal Portfolio</span> - Live on Vercel: https://ajay-rawat-portfolio.vercel.app/ (HTML, CSS, JS, Git, GitHub)</div>
          </div>
        );
        break;

      case "experience":
      case "ceph":
        output = (
          <div className="space-y-1 text-xs text-sand-dim">
            <div className="text-cyan-300 font-bold">Open-Source Website Contributor · Ceph (ceph.io)</div>
            <div>• Merged Pull Request into official ceph/ceph.io repository fixing page issues.</div>
            <div>• Authored comprehensive written UX feedback for Ceph redesign working group.</div>
            <div>• Reviewing new page mockups for phone and laptop responsive layouts.</div>
          </div>
        );
        break;

      case "icpc":
        output = (
          <div className="space-y-1 text-xs text-sand-dim">
            <div className="text-emerald-400 font-bold">ICPC Preliminary Contest Team Member</div>
            <div>• Official team member in the International Collegiate Programming Contest preliminary round.</div>
            <div>• Competitive Problem Solving: 400+ solved on LeetCode with 1440 contest rating.</div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-sand-dim font-mono">
            <div>Email: <span className="text-accent">coderajay86091@gmail.com</span></div>
            <div>Phone: <span className="text-sand">+91 9302699936</span></div>
            <div>Portfolio: https://ajay-rawat-portfolio-eight.vercel.app/</div>
            <div>GitHub: https://github.com/ajayrawat3715</div>
            <div>LinkedIn: https://www.linkedin.com/in/ajay-rawat-78a7b2390/</div>
          </div>
        );
        break;

      case "sudo hire ajay":
      case "hire ajay":
        playSuccess();
        output = (
          <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-xs space-y-1.5 animate-in fade-in">
            <div className="text-accent font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[AUTHENTICATION GRANTED] Candidate Profile Verified</span>
            </div>
            <div className="text-sand">
              Status: <span className="text-emerald-400 font-bold">Available for Frontend &amp; Software Engineering Internships</span>
            </div>
            <div className="text-sand-dim">
              Direct Contact: <a href="mailto:coderajay86091@gmail.com" className="text-cyan-300 underline font-mono">coderajay86091@gmail.com</a> / <span className="font-mono text-sand">+91 9302699936</span>
            </div>
            <div className="text-[11px] text-sand-muted">
              Ready to ship fast, clean, well-built React &amp; TypeScript interfaces.
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        playBeep();
        output = (
          <span className="text-rose-400">
            command not found: {cmd}. Type &apos;help&apos; for available commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInputVal("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
      {!isOpen ? (
        <button
          onClick={() => {
            playClick();
            setIsOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-canvas-surface/95 border border-hud text-sand hover:border-accent hover:text-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.45)] backdrop-blur-md"
        >
          <Terminal className="w-4 h-4 text-accent animate-pulse" />
          <span className="font-bold text-xs tracking-wider">CLI SHELL</span>
          <span className="px-1.5 py-0.2 rounded text-[10px] bg-accent/15 text-accent border border-accent/30">
            &gt;_
          </span>
        </button>
      ) : (
        <div className="w-[92vw] sm:w-[500px] h-84 rounded-xl bg-[#070A10]/95 border border-hud-bright shadow-[0_10px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.25)] backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Title Bar */}
          <div className="px-3 py-2 bg-canvas-surface border-b border-canvas-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00E5FF]" />
              <span className="font-bold text-[11px] text-sand">ajay-rawat-terminal // zsh</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-sand-muted hover:text-sand hover:bg-canvas-elevated transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Buffer */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 leading-relaxed text-[11px] text-sand-dim">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-1.5 text-accent font-semibold">
                  <span>❯</span>
                  <span className="text-sand">{item.cmd}</span>
                </div>
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Prompt Form */}
          <form onSubmit={handleCommand} className="p-2.5 bg-canvas-surface border-t border-canvas-border flex items-center gap-2">
            <span className="text-accent font-bold pl-1">❯</span>
            <input
              type="text"
              autoFocus
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help' or 'sudo hire ajay'..."
              className="flex-1 bg-transparent text-xs text-sand placeholder:text-sand-subtle focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="p-1 rounded bg-accent/15 text-accent hover:bg-accent hover:text-[#05070B] transition-colors"
            >
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
