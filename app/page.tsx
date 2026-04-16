import Navbar from "@/components/portfolio/navbar";
import { portfolioLinks, projects, skills } from "@/data/portfolio";
import ProjectsSection from "@/components/portfolio/projects-section";

export default function Home() {
  const { resumeUrl, githubUrl, linkedinUrl } = portfolioLinks;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar githubUrl={githubUrl} linkedinUrl={linkedinUrl} />

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
              Full-stack Engineer & Lifelong Learner
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
                    Ruby on Rails, Python, Django, Flask, JavaScript, React, RSpec, Unittest
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

        <section className="border-b border-white/10 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Full-stack engineer focused on practical, reliable systems
              </h2>
            </div>

            <div className="space-y-4 text-neutral-300 leading-7">
              <p>
                I'm a software engineer with a strong backend focus, experienced in
                building and maintaining production systems across industries including
                aerospace and insurance. I enjoy solving real-world problems and building
                software that is both reliable and maintainable.
              </p>

              <p>
                My work has included developing Python-based services for satellite
                operations, improving system performance through logging and observability
                improvements, and migrating legacy systems to modern, well-tested
                architectures.
              </p>

              <p>
                I care about clean code, strong testing practices, and continuous
                learning. I enjoy working collaboratively with teams and building
                systems that other developers can easily understand and extend.
              </p>
            </div>
          </div>
        </section>

        <ProjectsSection projects={projects} />

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
                Software engineer with professional experience building and maintaining
                backend systems, improving performance, and developing reliable
                applications across multiple industries. Strong focus on clean
                architecture, testing, and real-world problem solving.
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
                <h3 className="text-xl font-semibold">Experience Highlights</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                  <li>
                    Built and maintained backend systems for satellite operations at
                    Maxar, including Python-based services and internal tooling.
                  </li>
                  <li>
                    Migrated legacy APIs from Ruby to Python, adding automated tests and
                    ensuring safe production deployment.
                  </li>
                  <li>
                    Improved system performance by auditing and refactoring logging
                    pipelines, reducing excessive log volume and increasing observability quality.
                  </li>
                  <li>
                    Developed and maintained Rails features in large production
                    applications, collaborating through pair and mob programming.
                  </li>
                  <li>
                    Implemented automated testing frameworks using Cucumber, Gherkin,
                    and Behave to replace manual testing workflows.
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <h3 className="text-xl font-semibold">Core Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Ruby on Rails",
                    "Golang",
                    "Django",
                    "Flask",
                    "PostgreSQL",
                    "REST APIs",
                    "RSpec",
                    "Cucumber",
                    "AWS S3",
                    "Elasticsearch",
                    "Docker",
                    "JavaScript",
                    "React",
                  ].map((skill) => (
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