export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Paul Debevec
          </a>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-neutral-300 md:gap-6">
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
              href="https://github.com/PaulDebevec"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-100"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-100"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section
          id="home"
          className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20"
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
                className="rounded-2xl bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
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

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
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

        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-4 text-neutral-300">
            Project cards will go here.
          </p>
        </section>

        <section id="resume" className="py-8">
          <h2 className="text-2xl font-semibold">Resume</h2>
          <p className="mt-4 text-neutral-300">
            Resume content will go here.
          </p>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold">Links</h2>
          <p className="mt-4 text-neutral-300">
            GitHub and LinkedIn links will go here.
          </p>
        </section>
      </div>
    </main>
  );
}