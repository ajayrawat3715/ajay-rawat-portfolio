export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full Stack" | "Frontend" | "AI & Analytics" | "Backend Systems";
  badge?: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl: string;
  hasInteractiveDemo: boolean;
  demoType: "paytm" | "swaad" | "portfolio";
  architecture?: {
    layers: { name: string; desc: string; tech: string }[];
  };
}

export interface ExperienceItem {
  role: string;
  organization: string;
  orgUrl?: string;
  badge: string;
  period: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: "Proficient" | "Working Knowledge" | "Learning";
    note?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Ajay Rawat",
  headline: "Frontend Developer Intern ⋄ React.js ⋄ Hooks ⋄ Responsive UI",
  tagline:
    "I build fast, responsive React.js & TypeScript interfaces with clean component architectures, robust client-side state, and algorithmic problem-solving discipline.",
  phone: "+91 9302699936",
  location: "India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  education: {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Physics Wallah Institute of Innovation",
    graduationYear: 2029,
    gpa: "8.0 / 10 CGPA (First Year)",
    status: "Undergraduate Student",
  },
  availability: "Available for Frontend & Software Engineering Internships",
  targetRoles: [
    "Frontend Developer Intern",
    "Software Engineering Intern",
    "Full Stack Developer Intern",
  ],
  links: {
    github: "https://github.com/ajayrawat3715",
    leetcode: "https://leetcode.com/u/ajayrawat3715/",
    linkedin: "https://www.linkedin.com/in/ajay-rawat-78a7b2390/",
    codeforces: "https://codeforces.com/profile/ajay_rawat01",
    portfolioLive: "https://ajay-rawat-portfolio.vercel.app/",
    email: "coderajay86091@gmail.com",
    phone: "+919302699936",
  },
  summary:
    "Frontend developer intern candidate who builds responsive React.js and TypeScript interfaces with reusable components, React hooks, and client-side state. Shipped an AI-powered merchant dashboard (Paytm VyaparAI) and a food-ordering app, both live on Vercel, and has a merged pull request to the open-source ceph.io website. Collaborates with designers and backend developers, learns quickly, and aims to deliver fast, responsive, well-built UI in an early-stage founding team.",
  achievements: [
    {
      title: "LeetCode 400+ & 1440 Rating",
      category: "Algorithmic Problem Solving",
      detail: "400+ problems solved, contest rating 1440, 100 Days Badge (2026), 106-day max streak.",
      highlight: "Rating 1440 · 100 Days Badge",
    },
    {
      title: "ICPC Preliminary Contest",
      category: "Competitive Programming",
      detail: "Official Team member in the prestigious International Collegiate Programming Contest (ICPC) preliminary round.",
      highlight: "ICPC Prelims Team Member",
    },
    {
      title: "Open-Source Contributor (Ceph)",
      category: "Open Source / GSoC Org",
      detail: "Merged PR into ceph/ceph.io repository fixing page issues, plus written UX feedback for the Ceph redesign working group.",
      highlight: "Merged PR in Ceph (GSoC)",
    },
    {
      title: "Hackathons",
      category: "Competitive Building",
      detail: "Paytm AI Hackathon (Shipped Paytm VyaparAI); RIFT '26 (Unstop Freedom Festival, PW Institute of Innovation).",
      highlight: "Paytm AI Hackathon & RIFT '26",
    },
  ],
  dsaStats: {
    solvedCount: "400+",
    contestRating: "1440",
    maxStreak: "106 Days",
    badge: "100 Days Badge (2026)",
    platforms: [
      { name: "LeetCode", handle: "ajayrawat3715", url: "https://leetcode.com/u/ajayrawat3715/" },
      { name: "GitHub", handle: "ajayrawat3715", url: "https://github.com/ajayrawat3715" },
    ],
    topicBreakdown: [
      { topic: "Arrays & Two Pointers", count: 110, percentage: 88 },
      { topic: "Strings & Hash Maps", count: 85, percentage: 82 },
      { topic: "Trees & Binary Search Trees", count: 75, percentage: 76 },
      { topic: "Graphs & BFS/DFS", count: 50, percentage: 65 },
      { topic: "Dynamic Programming", count: 45, percentage: 55 },
      { topic: "Stacks, Queues & Heaps", count: 45, percentage: 70 },
      { topic: "Recursion & Backtracking", count: 40, percentage: 60 },
    ],
  },
  certifications: [
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "Oct 2026",
      badge: "Verified Certificate",
    },
    {
      title: "Project Based Learning: Full Stack Development (FSD)",
      issuer: "IBM Skills Network / Physics Wallah",
      date: "Jun 2026",
      badge: "Full Stack Credential",
    },
    {
      title: "HTML, CSS, and JavaScript Fundamentals",
      issuer: "IBM Skills Network",
      date: "2026",
      badge: "Core Web Foundation",
    },
  ],
};

export const OPEN_SOURCE_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Open-Source Website Contributor",
    organization: "Ceph (ceph.io)",
    orgUrl: "https://ceph.io",
    badge: "GSoC Organization",
    period: "2026 · Active Contributor",
    summary:
      "Contributed to Ceph (open-source distributed storage platform under the Linux Foundation / GSoC) by resolving website issues and advising the working group on UI/UX redesign.",
    contributions: [
      "Merged Pull Request into the official ceph/ceph.io repository, addressing page bugs and layout inconsistencies on the Ceph website.",
      "Authored actionable written UX feedback for the Ceph redesign working group: defined a friction-free 'Get started' path, ensured labels matched destinations, and improved color contrast and mobile layout responsiveness.",
      "Evaluated contributor onboarding workflows to streamline local environment setup and documented clear homepage access points for latest releases, installations, and storage modes (object/block/file).",
      "Actively reviewing new page mockups for the redesign, verifying cross-device links, label consistency, and responsive layouts across mobile and desktop.",
    ],
    technologies: ["Git", "GitHub Pull Requests", "Ceph Website", "Responsive UI", "UX Review", "Open Source"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Component architecture, reactive hooks, and responsive interfaces",
    skills: [
      { name: "React.js", level: "Proficient", note: "Reusable component design, state lifting, and virtual DOM" },
      { name: "React Hooks", level: "Proficient", note: "useState, useEffect, useMemo, useCallback, custom hooks" },
      { name: "TypeScript", level: "Proficient", note: "Strong typing, interfaces, generics, props validation" },
      { name: "JavaScript (ES6+)", level: "Proficient", note: "Async/await, destructuring, closures, DOM manipulation" },
      { name: "Tailwind CSS", level: "Proficient", note: "Utility-first responsive layouts, tokens, custom themes" },
      { name: "Vite", level: "Proficient", note: "Fast build tooling, HMR, modular bundle optimization" },
      { name: "HTML5 & CSS3", level: "Proficient", note: "Semantic structure, Flexbox, Grid, CSS animations" },
      { name: "Responsive Design", level: "Proficient", note: "Mobile-first layouts, breakpoint testing, touch ergonomics" },
    ],
  },
  {
    name: "Languages",
    description: "Algorithmic thinking, object models, and systems fundamentals",
    skills: [
      { name: "C++", level: "Proficient", note: "Competitive programming, STL data structures, algorithmic speed" },
      { name: "JavaScript", level: "Proficient", note: "Frontend engineering, asynchronous event loop, APIs" },
      { name: "Java", level: "Proficient", note: "Object-oriented programming, class design, design patterns" },
      { name: "Python", level: "Working Knowledge", note: "Scripting, algorithmic exploration, data manipulation" },
      { name: "C", level: "Working Knowledge", note: "Pointers, memory layout, system fundamentals" },
    ],
  },
  {
    name: "Technical Skills",
    description: "Core engineering competencies applied across codebases",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: "Proficient", note: "400+ problems solved, LeetCode rating 1440" },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", note: "Encapsulation, inheritance, polymorphism, clean interfaces" },
      { name: "REST API Integration", level: "Proficient", note: "Fetch/Axios, TanStack Query, error handling, status codes" },
      { name: "UI Debugging & DevTools", level: "Proficient", note: "Chrome DevTools, layout shifts, re-renders, network inspection" },
      { name: "Git-based Workflows", level: "Proficient", note: "Branching, PRs, merge hygiene, open-source Ceph workflows" },
    ],
  },
  {
    name: "Databases",
    description: "Structured storage, relational schemas, and document data",
    skills: [
      { name: "PostgreSQL", level: "Working Knowledge", note: "Relational modeling, complex queries, indexing" },
      { name: "MySQL", level: "Proficient", note: "Relational schema design, foreign keys, ACID compliance" },
      { name: "MongoDB", level: "Working Knowledge", note: "NoSQL document storage, JSON collections, queries" },
    ],
  },
  {
    name: "Tools & Platforms",
    description: "Daily developer environment and deployment workflows",
    skills: [
      { name: "Git & GitHub", level: "Proficient", note: "Version control, PR reviews, upstream syncing" },
      { name: "Vercel", level: "Proficient", note: "Production deployments, CI/CD preview branches, edge routing" },
      { name: "VS Code", level: "Proficient", note: "Primary IDE, TypeScript language server, debugging" },
      { name: "IntelliJ IDEA", level: "Proficient", note: "Java development, Maven builds, refactoring" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "paytm-vyapar-ai",
    title: "Paytm VyaparAI (Paytm Biz Copilot)",
    subtitle: "AI-Powered Merchant Copilot & Business Analytics Dashboard",
    badge: "Paytm AI Hackathon",
    category: "AI & Analytics",
    description:
      "An AI-enabled merchant copilot built for the Paytm AI Hackathon that turns complex business transactional data into actionable growth insights and automated recommendations. Features interactive Recharts analytics for revenue monitoring, customer debt (Udhaar) tracking, and repayment forecasts.",
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "TanStack", "Recharts", "AI SDK", "Vercel"],
    highlights: [
      "Engineered an AI merchant copilot transforming raw transaction streams into actionable recommendations",
      "Interactive data visualization suite with Recharts: sales analytics, customer cohorts, and business trend tracking",
      "Specialized Udhaar (credit) and repayment monitoring dashboard for small and medium retail merchants",
      "Built with high-performance Vite, React hooks, and responsive Tailwind UI, deployed live on Vercel",
    ],
    liveUrl: "https://paytm-biz-copilot.vercel.app/",
    githubUrl: "https://github.com/ajayrawat3715",
    hasInteractiveDemo: true,
    demoType: "paytm",
  },
  {
    id: "swaadwallah",
    title: "Swaad Wallah",
    subtitle: "Responsive Food Discovery & Order Management Application",
    badge: "Live on Vercel",
    category: "Frontend",
    description:
      "A fast, responsive food-ordering web application featuring restaurant discovery, live dish search, cuisine filtering, dynamic pricing, and an order-tracking simulation. Engineered with pure client-side state preservation using LocalStorage.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage API", "Vercel"],
    highlights: [
      "Dynamic restaurant and dish discovery with real-time search and multi-cuisine filtering",
      "Persistent cart state maintained via browser LocalStorage with instant quantity adjustments",
      "Dynamic pricing engine with automated delivery fee and tax calculations",
      "Mobile-first, accessible interface with zero heavy third-party framework overhead, live on Vercel",
    ],
    liveUrl: "https://swaad-wallah.vercel.app/",
    githubUrl: "https://github.com/ajayrawat3715",
    hasInteractiveDemo: true,
    demoType: "swaad",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Responsive Developer Portfolio & Interactive Showcase",
    badge: "Live on Vercel",
    category: "Frontend",
    description:
      "A fast, responsive personal developer portfolio engineered to showcase real-world projects, credentials, and open-source contributions. Maintained through Git and deployed live on Vercel.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Vercel"],
    highlights: [
      "Built and deployed a responsive portfolio showcasing projects and credentials, maintained through Git and GitHub",
      "Engineered mobile-first, fluid responsive layouts tested across modern devices and resolutions",
      "Continuous deployment pipeline linked to GitHub repository via Vercel edge infrastructure",
      "Interactive component design with zero-friction access to verified coding profiles and project demos",
    ],
    liveUrl: "https://ajay-rawat-portfolio.vercel.app/",
    githubUrl: "https://github.com/ajayrawat3715",
    hasInteractiveDemo: true,
    demoType: "portfolio",
  },
];

export const EXPLORATION_TOPICS = [
  {
    title: "Open-Source Contributions & GSoC",
    tag: "Ceph Contributor",
    status: "Merged PR / Active",
    description:
      "Active contributor to Ceph (GSoC organization). Reviewing redesign page layouts, submitting UX feedback to the working group, and preparing for future Google Summer of Code cycles.",
    focusAreas: ["ceph.io redesign reviews", "Git/GitHub PR hygiene", "Community UX feedback", "Distributed storage documentation"],
  },
  {
    title: "Advanced React & State Architecture",
    tag: "Frontend Craft",
    status: "Actively Building",
    description:
      "Deepening mastery of React 19 / Next.js internals: Server Components, TanStack Query cache invalidation, custom hooks abstraction, and rendering performance profiling.",
    focusAreas: ["TanStack Query / Cache management", "React custom hooks patterns", "Component re-render profiling", "Micro-frontend UI design"],
  },
  {
    title: "Machine Learning & Model Training",
    tag: "AI Exploration",
    status: "Experimenting",
    description:
      "Hands-on experimentation with data preprocessing, exploratory data analysis (EDA), and classical machine learning models using Python, Google Colab, and Jupyter Notebooks.",
    focusAreas: ["Feature engineering & scaling", "Supervised learning (Regression, Classification)", "Model evaluation metrics", "Google Colab workflows"],
  },
  {
    title: "Backend & Systems Foundations",
    tag: "Core Engineering",
    status: "Continuous Study",
    description:
      "Expanding from Java Servlets, Hibernate, and Node.js into production-grade REST APIs, relational query optimization, PostgreSQL indexing, and clean architectural boundaries.",
    focusAreas: ["PostgreSQL indexing & query plans", "REST API contract design", "SOLID principles & design patterns", "Time & space complexity trade-offs"],
  },
];
