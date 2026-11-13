"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Search, Terminal, Filter, Code2, Database, Layout, Server, Wrench, BookOpen } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.name)];

  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, category: c.name }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesQuery =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-3.5 h-3.5 text-accent" />;
      case "Frontend":
        return <Layout className="w-3.5 h-3.5 text-sky-400" />;
      case "Technical Skills":
        return <BookOpen className="w-3.5 h-3.5 text-purple-400" />;
      case "Databases":
        return <Database className="w-3.5 h-3.5 text-amber-400" />;
      case "Tools & Platforms":
        return <Wrench className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Terminal className="w-3.5 h-3.5 text-accent" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Proficient":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Proficient
          </span>
        );
      case "Working Knowledge":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
            Working Knowledge
          </span>
        );
      case "Learning":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
            Currently Learning
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="03"
        eyebrow="ENGINEERING ARSENAL"
        title="Technical stack &amp;"
        highlight="competencies."
        description="Technologies I actively use in codebases, algorithms, and projects. Grouped by specialization with practical application context."
      />

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? allSkills.length
                : allSkills.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-accent text-[#05070B] border-accent font-bold shadow-[0_0_15px_rgba(0,229,255,0.35)]"
                    : "bg-canvas-surface text-sand-muted border-canvas-border hover:text-sand hover:border-canvas-border-bright"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isSelected
                      ? "bg-black/20 text-black font-bold"
                      : "bg-canvas-subtle text-sand-subtle"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-sand-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter technologies or notes..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-canvas-surface border border-canvas-border text-xs font-mono text-sand placeholder:text-sand-subtle focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group p-4 rounded-xl bg-canvas-surface border border-canvas-border hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5 space-y-2.5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded bg-canvas-subtle border border-canvas-border group-hover:border-accent/30 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-sand group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                </div>
                {getLevelBadge(skill.level)}
              </div>

              {skill.note && (
                <p className="text-xs text-sand-muted mt-2 font-normal leading-relaxed">
                  {skill.note}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-canvas-border/60 flex items-center justify-between text-[11px] font-mono text-sand-subtle">
              <span>{skill.category}</span>
              <span className="text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity">
                verified in code
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="py-12 text-center text-sand-muted font-mono text-xs">
          No technologies match &ldquo;{searchQuery}&rdquo;. Try another term.
        </div>
      )}
    </section>
  );
};
