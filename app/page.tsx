import AboutSection from "@/components/portfolio/about-section";
import ConnectSection from "@/components/portfolio/connect-section";
import Navbar from "@/components/portfolio/navbar";
import ProjectsSection from "@/components/portfolio/projects-section";
import ResumeSection from "@/components/portfolio/resume-section";
import { portfolioLinks, projects, skills } from "@/data/portfolio";

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

        <AboutSection />

        <ProjectsSection projects={projects} />

        <ResumeSection resumeUrl={resumeUrl} skills={skills} />

        <ConnectSection githubUrl={githubUrl} linkedinUrl={linkedinUrl} />

        <footer className="border-t border-white/10 py-8">
          <p className="text-sm text-neutral-400">
            © 2026 Paul Debevec. Built with Next.js and Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}