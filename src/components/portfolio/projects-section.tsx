import type { Project } from "@/types/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({
  projects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-b border-white/10 py-12 md:py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          A selection of projects that highlight my experience building practical
          applications, exploring new technologies, and continuously improving as
          a full-stack engineer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Case Study
            </p>

            <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

            <p className="mt-4 text-base leading-7 text-neutral-200">
              {project.summary}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-neutral-400">Problem</p>
                <p className="mt-1 text-sm leading-7 text-neutral-300">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-neutral-400">
                  What I built
                </p>
                <p className="mt-1 text-sm leading-7 text-neutral-300">
                  {project.contribution}
                </p>
              </div>
            </div>

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

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-white"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-neutral-100 transition hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}