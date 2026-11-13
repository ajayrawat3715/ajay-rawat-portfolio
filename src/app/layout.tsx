import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajay Rawat — Frontend & Software Engineering Intern | CS '29",
  description:
    "Portfolio of Ajay Rawat. B.Tech Computer Science student at Physics Wallah Institute of Innovation (Class of 2029). React.js, TypeScript, Tailwind CSS, DSA (400+ solved on LeetCode), and Ceph open-source contributor. Seeking Frontend & Software Engineering internships.",
  keywords: [
    "Ajay Rawat",
    "Frontend Developer Intern",
    "Software Engineer Intern",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "LeetCode",
    "DSA",
    "Ceph",
    "Physics Wallah Institute of Innovation",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ajay Rawat", url: "https://github.com/ajayrawat3715" }],
  creator: "Ajay Rawat",
  metadataBase: new URL("https://github.com/ajayrawat3715"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ajayrawat3715",
    title: "Ajay Rawat — Frontend & Software Engineering Intern",
    description:
      "B.Tech Computer Science student at Physics Wallah Institute of Innovation. React.js, TypeScript, DSA (400+ solved), and Ceph open-source contributor. Available for internships.",
    siteName: "Ajay Rawat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Rawat — Software Engineering & Full-Stack Developer",
    description: "CS student & developer. 450+ DSA problems solved. Building full-stack projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajay Rawat",
    jobTitle: "Aspiring Software Engineer & Undergraduate Computer Science Student",
    url: "https://github.com/ajayrawat3715",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "PW Institute of Innovation (Medhavi Skills University)",
    },
    sameAs: [
      "https://github.com/ajayrawat3715",
      "https://leetcode.com/u/ajayrawat3715/",
      "https://codeforces.com/profile/ajay_rawat01",
      "https://linkedin.com/in/ajay-rawat-78a7b2390/",
    ],
    knowsAbout: [
      "React.js",
      "React Hooks",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Data Structures & Algorithms",
      "C++",
      "Java",
      "Python",
      "REST API Integration",
      "UI Engineering",
      "Open Source Software (Ceph)",
      "Vite",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}

