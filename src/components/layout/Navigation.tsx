"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, FileText, Menu, X, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SoundToggle } from "@/components/ui/AudioFeedback";

interface NavigationProps {
  onOpenResume?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenResume,
  onOpenCommandPalette,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update IST clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const istTime = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setCurrentTime(`${istTime} IST`);
      } catch {
        setCurrentTime("Active");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "DSA & ICPC", href: "#dsa" },
    { label: "Exploring", href: "#exploring" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070B]/90 backdrop-blur-md border-b border-canvas-border shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2.5 font-mono text-sm tracking-wider font-semibold text-sand hover:text-white transition-colors"
            >
              <span className="w-8 h-8 rounded bg-canvas-surface border border-canvas-border flex items-center justify-center text-accent group-hover:border-accent transition-colors font-bold text-xs shadow-inner">
                AR
              </span>
              <span className="hidden sm:inline-block font-sans font-bold text-sm text-sand">
                Ajay Rawat
              </span>
              <span className="text-sand-subtle text-xs font-mono hidden md:inline">
                / CS &apos;29
              </span>
            </Link>

            {/* Live IST Status indicator */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-canvas-surface border border-canvas-border text-[11px] font-mono text-sand-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Internships</span>
              {currentTime && (
                <span className="text-sand-subtle pl-1.5 border-l border-canvas-border">
                  {currentTime}
                </span>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-canvas-subtle/80 p-1 rounded-full border border-canvas-border backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-sand-muted hover:text-sand hover:bg-canvas-surface transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Command shortcut */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-canvas-surface border border-canvas-border text-xs font-mono text-sand-muted hover:text-sand hover:border-canvas-border-bright transition-colors"
                title="Open Command Palette (Cmd+K)"
              >
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px]">Cmd+K</span>
              </button>
            )}

            {/* Sound Toggle */}
            <SoundToggle />

            {/* Quick Email Copy */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-canvas-surface border border-canvas-border text-xs font-mono text-sand hover:border-accent hover:text-white transition-all"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sand-muted" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-accent text-[#05070B] font-mono text-xs font-bold hover:bg-accent-hover transition-all shadow-[0_0_18px_rgba(0,229,255,0.35)] hover:shadow-[0_0_25px_rgba(0,229,255,0.55)]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <SoundToggle />
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="p-1.5 rounded-md bg-accent text-canvas text-xs font-semibold"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-canvas-surface border border-canvas-border text-sand-muted hover:text-sand"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-xl bg-canvas-surface border border-canvas-border shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-canvas-border text-xs font-mono text-sand-muted">
              <span>Status: Active & Available</span>
              <span className="text-accent">{currentTime}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-canvas-subtle border border-canvas-border text-xs font-medium text-sand hover:text-accent hover:border-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-sand-subtle" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-canvas-elevated border border-canvas-border text-xs font-mono text-sand flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5 text-accent" />
                <span>{copiedEmail ? "Email Copied!" : `Copy ${PERSONAL_INFO.links.email}`}</span>
              </button>
              {onOpenResume && (
                <button
                  onClick={() => {
                    onOpenResume();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-accent text-canvas text-xs font-semibold font-mono flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Official Resume</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

