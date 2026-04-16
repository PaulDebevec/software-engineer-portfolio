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
        <section id="home" className="py-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Full-stack Engineer / Lifelong Student
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            I build practical, maintainable applications with a focus on clean
            architecture, thoughtful user experience, and continuous growth.
          </p>
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