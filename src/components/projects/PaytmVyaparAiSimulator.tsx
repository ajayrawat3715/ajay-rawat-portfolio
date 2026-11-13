"use client";

import React, { useState } from "react";
import { Sparkles, TrendingUp, AlertTriangle, ArrowUpRight, CheckCircle2, DollarSign, Users, ExternalLink, Bot } from "lucide-react";

export const PaytmVyaparAiSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "udhaar" | "sales">("ai");
  const [activePrompt, setActivePrompt] = useState<string>("Analyze high-risk udhaar accounts");
  const [aiResponse, setAiResponse] = useState<string>(
    "Found 3 merchants overdue > 30 days totaling ₹48,200. Automated WhatsApp payment reminders have a 78% recovery rate. Recommend sending scheduled reminders today at 4:00 PM."
  );

  const prompts = [
    {
      label: "High-risk Udhaar",
      prompt: "Analyze high-risk udhaar accounts",
      response:
        "Found 3 merchants overdue > 30 days totaling ₹48,200. Automated WhatsApp payment reminders have a 78% recovery rate. Recommend sending scheduled reminders today at 4:00 PM.",
    },
    {
      label: "Weekend Forecast",
      prompt: "Predict weekend sales velocity and stock requirements",
      response:
        "Based on the last 4 weeks of UPI and QR velocity, expect a +34% sales surge this Saturday. Fast-moving FMCG items require restock of 24 units before Friday evening.",
    },
    {
      label: "Cash Flow Health",
      prompt: "Evaluate weekly working capital and supplier liquidity",
      response:
        "Net weekly cash inflow is ₹2,18,400 against supplier payables of ₹1,40,000. Operating cash flow remains healthy with a 36% surplus margin.",
    },
  ];

  const handleSelectPrompt = (item: typeof prompts[0]) => {
    setActivePrompt(item.prompt);
    setAiResponse(item.response);
  };

  return (
    <div className="rounded-xl bg-canvas-surface border border-canvas-border overflow-hidden shadow-2xl">
      {/* Titlebar */}
      <div className="px-4 py-3 bg-canvas-subtle border-b border-canvas-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="font-mono text-xs font-semibold text-sand">
            Paytm VyaparAI · Merchant Copilot Simulator
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            Paytm AI Hackathon
          </span>
        </div>
        <a
          href="https://paytm-biz-copilot.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-accent hover:underline"
        >
          <span>Live on Vercel</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* KPI Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border">
            <div className="text-[10px] font-mono text-sand-muted">TODAY&apos;S REVENUE</div>
            <div className="text-base font-bold font-mono text-sand mt-0.5">₹38,450</div>
            <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> +14.2% vs yesterday
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border">
            <div className="text-[10px] font-mono text-sand-muted">ACTIVE UDHAAR BOOK</div>
            <div className="text-base font-bold font-mono text-sand mt-0.5">₹1,42,800</div>
            <div className="text-[10px] text-sand-dim font-mono">18 Open Accounts</div>
          </div>

          <div className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border">
            <div className="text-[10px] font-mono text-sand-muted">RECOVERY RATE</div>
            <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">86.4%</div>
            <div className="text-[10px] text-sand-dim font-mono">Via AI Alerts</div>
          </div>

          <div className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border">
            <div className="text-[10px] font-mono text-sand-muted">COPILOT HEALTH</div>
            <div className="text-base font-bold font-mono text-cyan-300 mt-0.5">94 / 100</div>
            <div className="text-[10px] text-sand-dim font-mono">Optimized</div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1.5 border-b border-canvas-border pb-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab("ai")}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "ai"
                ? "bg-accent text-[#05070B] font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]"
                : "text-sand-muted hover:text-sand"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Copilot Engine</span>
          </button>
          <button
            onClick={() => setActiveTab("udhaar")}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "udhaar"
                ? "bg-accent text-[#05070B] font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]"
                : "text-sand-muted hover:text-sand"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Udhaar Ledger</span>
          </button>
          <button
            onClick={() => setActiveTab("sales")}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "sales"
                ? "bg-accent text-[#05070B] font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)]"
                : "text-sand-muted hover:text-sand"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Sales Trends</span>
          </button>
        </div>

        {/* Tab 1: AI Copilot Demo */}
        {activeTab === "ai" && (
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-sand-muted">
              SELECT PROMPT TO TEST COPILOT INTELLIGENCE:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {prompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPrompt(p)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all border ${
                    activePrompt === p.prompt
                      ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300"
                      : "bg-canvas-subtle border-canvas-border text-sand-dim hover:text-sand hover:border-canvas-border-bright"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* AI Output Terminal Card */}
            <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-canvas-border space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-sand-muted flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> Query: &ldquo;{activePrompt}&rdquo;
                </span>
                <span className="text-cyan-400">AI SDK Stream · 24ms</span>
              </div>
              <p className="text-xs text-sand leading-relaxed font-sans font-medium">
                {aiResponse}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Udhaar Ledger */}
        {activeTab === "udhaar" && (
          <div className="space-y-2">
            {[
              { customer: "Sharma Kirana Stores", amount: "₹24,500", due: "32 days overdue", status: "High Risk", alert: true },
              { customer: "Rajesh Electronics", amount: "₹18,200", due: "14 days overdue", status: "Medium", alert: false },
              { customer: "Gupta Dairy", amount: "₹8,450", due: "Due tomorrow", status: "Nominal", alert: false },
            ].map((entry, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-canvas-subtle border border-canvas-border flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-semibold text-sand font-sans">{entry.customer}</div>
                  <div className="text-[10px] font-mono text-sand-muted">{entry.due}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold text-sand">{entry.amount}</div>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                      entry.alert
                        ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        : "bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {entry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Sales Velocity */}
        {activeTab === "sales" && (
          <div className="p-3 rounded-lg bg-canvas-subtle border border-canvas-border space-y-2 text-xs">
            <div className="flex items-center justify-between font-mono text-[11px] text-sand-muted">
              <span>WEEKLY REVENUE BREAKDOWN (RECHARTS ENGINE)</span>
              <span className="text-emerald-400">+18% MoM</span>
            </div>
            <div className="grid grid-cols-7 gap-1 pt-2 items-end h-28">
              {[
                { day: "Mon", val: 45, amt: "₹22k" },
                { day: "Tue", val: 60, amt: "₹28k" },
                { day: "Wed", val: 50, amt: "₹25k" },
                { day: "Thu", val: 75, amt: "₹34k" },
                { day: "Fri", val: 85, amt: "₹38k" },
                { day: "Sat", val: 100, amt: "₹49k" },
                { day: "Sun", val: 90, amt: "₹42k" },
              ].map((bar) => (
                <div key={bar.day} className="flex flex-col items-center gap-1 h-full justify-end">
                  <div
                    className="w-full rounded-sm bg-accent/80 hover:bg-accent transition-all"
                    style={{ height: `${bar.val}%` }}
                    title={`${bar.day}: ${bar.amt}`}
                  />
                  <span className="font-mono text-[9px] text-sand-subtle">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech details footer */}
        <div className="pt-2 border-t border-canvas-border flex items-center justify-between text-[11px] font-mono text-sand-subtle">
          <span>React.js · TypeScript · Vite · Tailwind · TanStack · Recharts · AI SDK</span>
          <a
            href="https://paytm-biz-copilot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Open Full App ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

