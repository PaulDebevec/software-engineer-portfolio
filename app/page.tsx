"use client";

import { useState } from "react";

const resumeUrl = "/resume.pdf";
const githubUrl = "https://github.com/PaulDebevec";
const linkedinUrl = "https://www.linkedin.com/in/pauldebevec";

const projects = [
  {
    title: "Fitness Tracker Rails",
    description:
      "A full-stack Rails application for tracking check-ins, measurements, progress photos, and reporting over time.",
    stack: ["Ruby on Rails", "PostgreSQL", "RSpec", "Hotwire"],
    link: "https://github.com/PaulDebevec/fitness_tracker_rails",
  },
  {
    title: "Portfolio App",
    description:
      "A modern personal portfolio built with Next.js to showcase experience, projects, and professional growth.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/PaulDebevec/software-engineer-portfolio",
  },
];

const skills = [
  "Python",
  "Ruby on Rails",
  "Golang",
  "Django",
  "Flask",
  "PostgreSQL",
  "RSpec",
  "REST APIs",
  "JavaScript",
  "Git",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-lg font-semibold tracking-wide">
              Paul Debevec
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:bg-white/5 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              Menu
            </button>

            <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
              <a href="#home" className="transition hover:text-neutral-100">
                Home
              </a>
              <a href="#projects" className="transition hover:text-neutral-100">
                Projects
              </a>
              <a href="#resume" className="transition hover:text-neutral-100">
                Resume
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-neutral-100"
              >
                GitHub
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-neutral-100"
              >
                LinkedIn
              </a>
            </nav>
          </div>

          {menuOpen && (
            <nav className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 text-sm text-neutral-300 md:hidden">
              <a
                href="#home"
                className="transition hover:text-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#projects"
                className="transition hover:text-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#resume"
                className="transition hover:text-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                GitHub
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                LinkedIn
              </a>
            </nav>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <section
          id="home"
          className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20"
        >
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Full-Stack Engineer
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Full-stack engineer who is eager to learn
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              I build practical, maintainable applications with a focus on clean
              architecture, thoughtful user experience, and continuous growth.
              I enjoy solving real problems, learning new technologies, and
              creating software that feels both reliable and polished.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02] hover:bg-white"
              >
                View Projects
              </a>

              <a
                href="#resume"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-neutral-100 transition hover:bg-white/5"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-400">Currently focused on</p>
                  <p className="mt-2 text-base text-neutral-100">
                    Building polished portfolio projects and growing as a
                    full-stack engineer
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-400">Core strengths</p>
                  <p className="mt-2 text-base text-neutral-100">
                    Python, Ruby on Rails, Golang, Django, Flask
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-400">What I value</p>
                  <p className="mt-2 text-base text-neutral-100">
                    Maintainable systems, continuous learning, and thoughtful
                    user experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-white/10 py-12 md:py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              A few projects that reflect my experience building practical
              applications, exploring new ideas, and continuing to grow as an
              engineer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="mt-8 inline-block text-sm font-medium text-neutral-100 transition hover:text-neutral-300"
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="border-b border-white/10 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                Resume
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Experience and technical background
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                I bring professional software engineering experience across
                backend development, testing, production support, and building
                practical applications that prioritize maintainability and real
                user needs.
              </p>

              <a
                href={resumeUrl}
                download
                className="mt-8 inline-block rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-neutral-100 transition hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <h3 className="text-xl font-semibold">Highlights</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                  <li>
                    Software engineer with experience building and supporting
                    applications using Python, Ruby on Rails, Golang, Django,
                    and Flask.
                  </li>
                  <li>
                    Worked on practical product and platform problems including
                    backend development, debugging, testing, and maintainable
                    system design.
                  </li>
                  <li>
                    Enjoy collaborating with teams, learning quickly, and
                    building software that balances reliability with a polished
                    user experience.
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                Connect
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Let’s stay in touch
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                You can explore more of my work on GitHub, connect with me on
                LinkedIn, and follow along as I continue building projects and
                growing as a full-stack engineer.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  GitHub
                </p>
                <h3 className="mt-2 text-xl font-semibold text-neutral-100">
                  View my code and projects
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  Explore repositories, portfolio work, and ongoing development
                  projects.
                </p>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  LinkedIn
                </p>
                <h3 className="mt-2 text-xl font-semibold text-neutral-100">
                  Connect professionally
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  Learn more about my experience, background, and professional
                  journey.
                </p>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8">
          <p className="text-sm text-neutral-400">
            © 2026 Paul Debevec. Built with Next.js and Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}