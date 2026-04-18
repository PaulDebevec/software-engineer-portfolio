import type { PortfolioLinks, Project } from "@/types/portfolio";

export const portfolioLinks: PortfolioLinks = {
  resumeUrl: "/paul-debevec-resume.pdf",
  githubUrl: "https://github.com/PaulDebevec",
  linkedinUrl: "https://www.linkedin.com/in/pauldebevec",
};

export const projects: Project[] = [
  {
    title: "Fitness Tracker Rails",
    summary:
      "A full-stack Rails application for tracking check-ins, body measurements, progress photos, and long-term fitness trends.",
    problem:
      "I wanted to build a practical application that helps users track progress in one place instead of relying on scattered notes, spreadsheets, or disconnected photo history.",
    contribution:
      "Built the application end to end with nested resources, progress photo support, measurement reporting, and a clean interface for reviewing historical check-in data over time. I also focused on maintainability by structuring the application clearly and supporting it with automated testing.",
    stack: ["Ruby on Rails", "PostgreSQL", "RSpec", "Hotwire"],
    githubUrl: "https://github.com/PaulDebevec/fitness_tracker_rails",
    liveUrl: "https://skepti-fitness-rails-a5c9631ca248.herokuapp.com/",
    imageUrl: "/projects/fitness-tracker-2.png",
    imageAlt: "Screenshot of the Fitness Tracker Rails application dashboard"
  },
  {
    title: "Portfolio App",
    summary:
      "A responsive portfolio application built with Next.js to showcase projects, experience, and continued growth as a full-stack engineer.",
    problem:
      "I wanted a professional portfolio that presents my work clearly across desktop and mobile while also giving me hands-on experience building with Next.js and modern frontend patterns.",
    contribution:
      "Designed and built the site with reusable sections, responsive layouts, a mobile navigation menu, and structured project case studies that make the portfolio easier to scan and maintain.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/PaulDebevec",
    liveUrl: "",
  },
];

export const skills: string[] = [
  "Python",
  "Ruby on Rails",
  "Golang",
  "Django",
  "Flask",
  "PostgreSQL",
  "RSpec",
  "REST APIs",
  "JavaScript",
  "React",
  "Git",
];