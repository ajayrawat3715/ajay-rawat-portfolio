import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajay Rawat — Software Engineering & Full-Stack Developer",
  description:
    "Portfolio of Ajay Rawat. Computer Science Engineering student (Class of 2029) focused on DSA, Full-Stack Development, and Systems. 450+ solved problems on LeetCode & Codeforces. Seeking Software Engineering & Frontend internships.",
  keywords: [
    "Ajay Rawat",
    "Software Engineer Intern",
    "Frontend Developer",
    "Full Stack Developer",
    "DSA",
    "LeetCode",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Computer Science",
  ],
  authors: [{ name: "Ajay Rawat", url: "https://github.com/ajayrawat3715" }],
  creator: "Ajay Rawat",
  metadataBase: new URL("https://github.com/ajayrawat3715"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ajayrawat3715",
    title: "Ajay Rawat — Software Engineering & Full-Stack Developer",
    description:
      "Computer Science Engineering student focused on DSA, full-stack systems, and clean interfaces. 450+ algorithmic problems solved. Available for internships.",
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
      "Data Structures & Algorithms",
      "C++",
      "Java",
      "React.js",
      "Next.js",
      "Hibernate ORM",
      "Java Servlets",
      "MySQL",
      "Spring Boot",
      "Full-Stack Development",
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

