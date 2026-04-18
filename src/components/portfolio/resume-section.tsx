type ResumeSectionProps = {
    resumeUrl: string;
    skills: string[];
  };
  
  export default function ResumeSection({
    resumeUrl,
    skills,
  }: ResumeSectionProps) {
    return (
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
              Software engineer with professional experience building and
              maintaining backend systems, improving performance, and developing
              reliable applications across multiple industries. Strong focus on
              clean architecture, testing, and real-world problem solving.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-neutral-100 transition hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>
          </div>
  
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
              <h3 className="text-xl font-semibold">Experience Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                <li>
                    Built and maintained backend systems supporting satellite operations at Maxar,
                    developing Python-based services and internal tooling for mission-critical workflows.
                </li>

                <li>
                    Migrated legacy APIs from Ruby to Python, introducing automated test coverage
                    and ensuring reliable, low-risk production deployments.
                </li>

                <li>
                    Improved system performance and observability by auditing and refactoring
                    logging pipelines, reducing unnecessary log volume and increasing signal quality.
                </li>

                <li>
                    Contributed to large-scale Rails applications, developing features in
                    production environments and collaborating through pair and mob programming.
                </li>

                <li>
                    Designed and implemented automated testing frameworks using Cucumber,
                    Gherkin, and Behave, replacing manual QA processes and improving test reliability.
                </li>
              </ul>
            </div>
  
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
              <h3 className="text-xl font-semibold">Core Skills</h3>
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
    );
  }