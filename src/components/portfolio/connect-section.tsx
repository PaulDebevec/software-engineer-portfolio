type ConnectSectionProps = {
    githubUrl: string;
    linkedinUrl: string;
  };
  
  export default function ConnectSection({
    githubUrl,
    linkedinUrl,
  }: ConnectSectionProps) {
    return (
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
    );
  }