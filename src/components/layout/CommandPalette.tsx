"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight, FileText, Copy, Check, Terminal, ExternalLink, Code2, Github, Linkedin, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const navActions = [
    {
      title: "View Selected Projects (Paytm VyaparAI, Swaad Wallah)",
      category: "Navigation",
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
      icon: <Terminal className="w-4 h-4 text-accent" />,
    },
    {
      title: "View Open-Source Experience (Ceph · GSoC)",
      category: "Navigation",
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: "Explore DSA & ICPC (400+ Solved · 1440 Rating)",
      category: "Navigation",
      action: () => {
        window.location.hash = "#dsa";
        onClose();
      },
      icon: <Code2 className="w-4 h-4 text-amber-500" />,
    },
    {
      title: "Inspect Technical Arsenal & Stack",
      category: "Navigation",
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
    },
    {
      title: "View Engineering Journey & Academics",
      category: "Navigation",
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
      icon: <ArrowRight className="w-4 h-4 text-sand-muted" />,
    },
    {
      title: "Jump to Contact / Send Inquiry",
      category: "Navigation",
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
      icon: <ArrowRight className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: "Open Official Technical Resume",
      category: "Document",
      action: () => {
        onClose();
        onOpenResume();
      },
      icon: <FileText className="w-4 h-4 text-accent" />,
    },
    {
      title: `Copy Email (${PERSONAL_INFO.links.email})`,
      category: "Action",
      action: handleCopyEmail,
      icon: <Copy className="w-4 h-4 text-sand" />,
    },
    {
      title: "Visit GitHub Profile (@ajayrawat3715)",
      category: "External",
      action: () => {
        window.open(PERSONAL_INFO.links.github, "_blank");
        onClose();
      },
      icon: <Github className="w-4 h-4 text-sand" />,
    },
    {
      title: "Visit LeetCode Profile (@ajayrawat3715)",
      category: "External",
      action: () => {
        window.open(PERSONAL_INFO.links.leetcode, "_blank");
        onClose();
      },
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
    },
    {
      title: "Visit LinkedIn Profile",
      category: "External",
      action: () => {
        window.open(PERSONAL_INFO.links.linkedin, "_blank");
        onClose();
      },
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
    },
  ];

  const filteredActions = navActions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl rounded-xl bg-canvas-surface border border-canvas-border shadow-2xl overflow-hidden font-mono text-xs">
        {/* Search Input Bar */}
        <div className="p-3 bg-canvas-subtle border-b border-canvas-border flex items-center gap-3">
          <Search className="w-4 h-4 text-accent shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, sections, or external links..."
            className="w-full bg-transparent text-sand placeholder:text-sand-subtle focus:outline-none text-xs"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-sand-muted hover:text-sand hover:bg-canvas-elevated"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.map((action, idx) => (
            <button
              key={idx}
              onClick={action.action}
              className="w-full p-2.5 rounded-lg hover:bg-canvas-elevated hover:border-canvas-border border border-transparent transition-colors flex items-center justify-between text-left text-sand group"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded bg-canvas-subtle border border-canvas-border">
                  {action.icon}
                </span>
                <span className="group-hover:text-white transition-colors">
                  {action.title}
                </span>
              </div>
              <span className="text-[10px] text-sand-subtle font-mono uppercase">
                {action.category}
              </span>
            </button>
          ))}

          {filteredActions.length === 0 && (
            <div className="py-8 text-center text-sand-muted">
              No actions match &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-canvas-subtle border-t border-canvas-border flex items-center justify-between text-[11px] text-sand-subtle">
          <span>Navigate with mouse or keyboard</span>
          <span className="font-sans">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};

