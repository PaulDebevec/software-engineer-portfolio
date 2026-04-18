export default function HeroSection() {
    return (
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 py-12 md:py-20"
      >
        <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                Full-Stack Engineer • Backend Focus
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Full-stack engineer building reliable, production-ready systems
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                I design and build maintainable applications across multiple stacks, with a
                strong focus on backend systems, performance, and clean architecture. I enjoy
                solving real-world problems and continuously improving as an engineer.
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
                    Maintainable systems, continuous learning, and thoughtful user
                    experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }