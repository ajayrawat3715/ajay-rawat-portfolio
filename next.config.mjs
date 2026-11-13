/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/ajay-rawat-portfolio" : "",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

