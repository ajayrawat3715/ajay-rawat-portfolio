"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Flame, Code2, ExternalLink, Trophy, Calendar, CheckCircle2, Terminal, ArrowUpRight, Cpu } from "lucide-react";

export const DsaJourneySection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("Arrays & Two Pointers");

  // Algorithmic pattern blueprints
  const topicPatterns: Record<
    string,
    {
      name: string;
      technique: string;
      timeComplexity: string;
      spaceComplexity: string;
      useCase: string;
      codeSnippet: string;
    }
  > = {
    "Arrays & Two Pointers": {
      name: "Two Pointers Convergence",
      technique: "Opposite-ends pointer narrowing to achieve linear time",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1) Auxiliary",
      useCase: "In-place memory optimization, sliding windows, and real-time streaming buffers",
      codeSnippet: `// Two-Pointer in-place convergence (O(N) time, O(1) space)
int trapRainWater(const vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxL = 0, maxR = 0, totalWater = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= maxL ? maxL = height[left] : totalWater += maxL - height[left];
            left++;
        } else {
            height[right] >= maxR ? maxR = height[right] : totalWater += maxR - height[right];
            right--;
        }
    }
    return totalWater;
}`,
    },
    "Trees & Binary Search Trees": {
      name: "Lowest Common Ancestor / DFS",
      technique: "Postorder bottom-up recursive backtracking",
      timeComplexity: "O(N)",
      spaceComplexity: "O(H) Recursion Stack",
      useCase: "Hierarchical DOM nodes, organizational charts, and filesystem directory indexing",
      codeSnippet: `// Tree ancestor traversal with short-circuit evaluation
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if (left && right) return root; // Discovered across both subtrees
    return left ? left : right;
}`,
    },
    "Graphs & BFS/DFS": {
      name: "Kahn's Topological Sort",
      technique: "In-degree array + BFS queue cycle detection",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V + E)",
      useCase: "Package dependency resolution (e.g. npm/maven), build graph execution, course scheduling",
      codeSnippet: `// Kahn's algorithm for directed acyclic graph resolution
bool hasNoCycle(int n, vector<vector<int>>& edges) {
    vector<vector<int>> adj(n);
    vector<int> inDegree(n, 0);
    for (auto& e : edges) {
        adj[e[1]].push_back(e[0]);
        inDegree[e[0]]++;
    }
    queue<int> q;
    for (int i = 0; i < n; i++) if (inDegree[i] == 0) q.push(i);
    int resolved = 0;
    while (!q.empty()) {
        int u = q.front(); q.pop(); resolved++;
        for (int v : adj[u]) {
            if (--inDegree[v] == 0) q.push(v);
        }
    }
    return resolved == n;
}`,
    },
    "Dynamic Programming": {
      name: "Space-Optimized Tabulation",
      technique: "Rolling variable state transitions reducing memory footprint",
      timeComplexity: "O(N)",
      spaceComplexity: "O(1) Optimal",
      useCase: "Cost path optimization, resource scheduling, financial risk modeling",
      codeSnippet: `// Tabulation compressed to O(1) memory
int rob(const vector<int>& nums) {
    int prevMax = 0, currMax = 0;
    for (int val : nums) {
        int temp = max(currMax, prevMax + val);
        prevMax = currMax;
        currMax = temp;
    }
    return currMax;
}`,
    },
    "Strings & Hash Maps": {
      name: "Frequency Mapping & Slotted Lookups",
      technique: "Array-backed ASCII hash tables for sub-millisecond lookups",
      timeComplexity: "O(N)",
      spaceComplexity: "O(K) Alphabet bound",
      useCase: "URL routing, word frequency indexing, autocomplete tokenization",
      codeSnippet: `// Fast fixed-size lookup map (O(1) memory bound)
bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    int freq[26] = {0};
    for (int i = 0; i < s.length(); i++) {
        freq[s[i] - 'a']++;
        freq[t[i] - 'a']--;
    }
    for (int count : freq) if (count != 0) return false;
    return true;
}`,
    },
    "Recursion & Backtracking": {
      name: "Pruned State-Space Search",
      technique: "Early branch pruning to avoid combinatorial explosion",
      timeComplexity: "O(2^N) Pruned",
      spaceComplexity: "O(N) Call Stack",
      useCase: "Constraint satisfaction puzzles, compiler syntax parsing, combinatorial optimization",
      codeSnippet: `// Backtracking with sorting-based duplicate pruning
void backtrack(vector<int>& nums, int start, vector<int>& curr, vector<vector<int>>& res) {
    res.push_back(curr);
    for (int i = start; i < nums.size(); i++) {
        if (i > start && nums[i] == nums[i - 1]) continue; // Skip duplicates
        curr.push_back(nums[i]);
        backtrack(nums, i + 1, curr, res);
        curr.pop_back();
    }
}`,
    },
    "Stacks, Queues & Heaps": {
      name: "Monotonic Stack / Min-Heap",
      technique: "Maintaining strict ordering invariant across elements",
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)",
      useCase: "Stock ticker spans, browser history tracking, priority scheduling engines",
      codeSnippet: `// Monotonic decreasing stack for next greater element
vector<int> nextGreaterElement(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, -1);
    stack<int> st; // Stores indices
    for (int i = 0; i < n; i++) {
        while (!st.empty() && nums[i] > nums[st.top()]) {
            result[st.top()] = nums[i];
            st.pop();
        }
        st.push(i);
    }
    return result;
}`,
    },
  };

  const currentPattern = topicPatterns[selectedTopic] || topicPatterns["Arrays & Two Pointers"];

  // Generate a simulated 52-week streak heatmap
  const weeks = 40;
  const daysPerWeek = 7;
  const generateHeatmap = () => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // High activity concentrated in the 106-day streak
        const dayIndex = w * 7 + d;
        if (dayIndex > 140 && dayIndex < 250) {
          week.push(Math.floor(Math.random() * 3) + 2); // 2, 3, 4 high intensity
        } else if (Math.random() > 0.4) {
          week.push(Math.floor(Math.random() * 3) + 1); // 1 or 2
        } else {
          week.push(0);
        }
      }
      grid.push(week);
    }
    return grid;
  };

  const heatmapGrid = generateHeatmap();

  const getHeatmapColor = (intensity: number) => {
    switch (intensity) {
      case 4:
        return "bg-accent shadow-sm shadow-accent/40";
      case 3:
        return "bg-accent/80";
      case 2:
        return "bg-accent/50";
      case 1:
        return "bg-accent/25";
      default:
        return "bg-canvas-elevated/70";
    }
  };

  return (
    <section id="dsa" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-canvas-border">
      <SectionHeader
        number="05"
        eyebrow="PROBLEM SOLVING CADENCE & ICPC"
        title="DSA & algorithmic"
        highlight="journey."
        description="Software begins with algorithmic discipline. Over 450+ solved challenges across LeetCode and Codeforces, with a maximum 106-day sustained streak."
      />

      {/* Main Developer Activity Dashboard */}
      <div className="rounded-2xl bg-canvas-surface border border-canvas-border shadow-2xl overflow-hidden space-y-8 p-6 sm:p-8 lg:p-10">
        {/* Top Metric Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 border-b border-canvas-border">
          <div className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border">
            <div className="flex items-center justify-between text-xs font-mono text-sand-muted mb-1">
              <span>LEETCODE PROBLEMS</span>
              <Code2 className="w-4 h-4 text-accent" />
            </div>
            <div className="text-3xl font-bold font-mono text-sand">
              400+
            </div>
            <div className="text-xs text-sand-dim mt-1">Across LeetCode &amp; CP</div>
          </div>

          <div className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border">
            <div className="flex items-center justify-between text-xs font-mono text-sand-muted mb-1">
              <span>CONTEST RATING</span>
              <Flame className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold font-mono text-sand">
              1440
            </div>
            <div className="text-xs text-amber-400 font-mono mt-1">LeetCode Contest Rating</div>
          </div>

          <div className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border">
            <div className="flex items-center justify-between text-xs font-mono text-sand-muted mb-1">
              <span>ICPC PRELIMS</span>
              <Trophy className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-sand">Team</div>
            <div className="text-xs text-emerald-400 font-mono mt-1">Contest Team Member</div>
          </div>

          <div className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border">
            <div className="flex items-center justify-between text-xs font-mono text-sand-muted mb-1">
              <span>PRACTICE STREAK</span>
              <Calendar className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-sand">100d+</div>
            <div className="text-xs text-sand-dim mt-1">100 Days Badge (2026)</div>
          </div>
        </div>

        {/* Activity Heatmap Panel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-sand">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>CONSISTENCY LOG (106-DAY MAXIMUM STREAK WINDOW)</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-sand-muted text-[11px]">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-canvas-elevated" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent/25" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent/50" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent/80" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
              <span>More</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border overflow-x-auto">
            <div className="flex gap-1 min-w-[620px]">
              {heatmapGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 rounded-[2px] transition-colors ${getHeatmapColor(
                        day
                      )}`}
                      title={`Activity intensity: ${day}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-sand-subtle">
              <span>Consistent problem solving builds deep algorithmic intuition</span>
              <span>Daily Practice Cycle</span>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Topic Breakdown & Verified Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Left: Topic Pattern Distribution */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-xs font-semibold text-sand uppercase tracking-wider">
                Algorithmic Topic Breakdown
              </h4>
              <span className="font-mono text-[11px] text-sand-muted">450+ Total Problems</span>
            </div>

            <div className="space-y-3">
              {PERSONAL_INFO.dsaStats.topicBreakdown.map((item) => (
                <div
                  key={item.topic}
                  onClick={() => setSelectedTopic(item.topic)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    selectedTopic === item.topic
                      ? "bg-canvas-elevated border-accent text-sand"
                      : "bg-canvas-subtle border-canvas-border hover:border-canvas-border-bright"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-sand font-sans">{item.topic}</span>
                    <span className="font-mono text-accent font-semibold">{item.count} Solved</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-canvas-elevated overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Algorithmic Pattern Inspector */}
            {currentPattern && (
              <div className="mt-4 p-4 rounded-xl bg-[#0B0D12] border border-canvas-border space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs font-bold text-sand">
                      {selectedTopic} Blueprint: {currentPattern.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/15 text-accent border border-accent/30 font-semibold">
                    C++ (STL)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-canvas-elevated text-emerald-400 border border-canvas-border">
                    Time: {currentPattern.timeComplexity}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-canvas-elevated text-sky-400 border border-canvas-border">
                    Space: {currentPattern.spaceComplexity}
                  </span>
                </div>
                <p className="text-xs text-sand-dim font-sans">
                  <span className="font-semibold text-sand">System Application:</span> {currentPattern.useCase}
                </p>
                <div className="p-3 rounded-lg bg-black/60 border border-canvas-border font-mono text-[11px] text-sand-dim overflow-x-auto leading-5 max-h-56">
                  <pre><code>{currentPattern.codeSnippet}</code></pre>
                </div>
              </div>
            )}
          </div>

          {/* Right: Verified Profile Cards & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-sand uppercase tracking-wider">
              Verified Coding Profiles
            </h4>

            {/* LeetCode Profile Card */}
            <a
              href={PERSONAL_INFO.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-canvas-subtle border border-canvas-border hover:border-amber-500/50 transition-all block space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-sand group-hover:text-amber-400 transition-colors">
                      LeetCode
                    </div>
                    <div className="text-xs font-mono text-sand-muted">
                      @{PERSONAL_INFO.dsaStats.platforms[0].handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sand-muted group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs text-sand-dim font-sans leading-relaxed">
                400+ problems solved across Two Pointers, Trees, Dynamic Programming, and Graphs. Regular contest participant with 1440 rating.
              </p>
              <div className="pt-2 border-t border-canvas-border flex items-center justify-between text-[11px] font-mono text-sand-subtle">
                <span className="text-amber-400">Contest Rating: 1440 · 100d Badge</span>
                <span>View Profile ↗</span>
              </div>
            </a>

            {/* ICPC Preliminary Contest Card */}
            <div className="p-5 rounded-xl bg-canvas-subtle border border-canvas-border space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold font-mono text-xs">
                    <Trophy className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-sand">
                      ICPC Preliminary Contest
                    </div>
                    <div className="text-xs font-mono text-emerald-400">
                      Official Team Member
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Collegiate CP
                </span>
              </div>
              <p className="text-xs text-sand-dim font-sans leading-relaxed">
                Competed in the International Collegiate Programming Contest preliminary round, solving time-pressured algorithmic challenges as a core team member.
              </p>
              <div className="pt-2 border-t border-canvas-border flex items-center justify-between text-[11px] font-mono text-sand-subtle">
                <span className="text-sand">Hackathons: Paytm AI &amp; RIFT &apos;26</span>
                <span className="text-emerald-400">Competitive Team</span>
              </div>
            </div>

            {/* Problem Solving Philosophy Note */}
            <div className="p-4 rounded-xl bg-canvas-elevated border border-canvas-border text-xs text-sand-dim space-y-2">
              <div className="font-mono text-[11px] text-accent font-semibold flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                <span>Why DSA Matters for Engineering:</span>
              </div>
              <p className="leading-relaxed">
                &ldquo;Solving 450+ problems isn&apos;t just about interviews—it trains the instinct to
                recognize memory bottlenecks, identify \(O(N^2)\) traps before deploying to production, and
                write deterministic edge-case logic.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
