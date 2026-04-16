export default function AboutSection() {
    return (
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
  
          <div className="space-y-4 leading-7 text-neutral-300">
            <p>
              I'm a software engineer with a strong backend focus, experienced in
              building and maintaining production systems across industries
              including aerospace and insurance. I enjoy solving real-world
              problems and building software that is both reliable and
              maintainable.
            </p>
  
            <p>
              My work has included developing Python-based services for satellite
              operations, improving system performance through logging and
              observability improvements, and migrating legacy systems to modern,
              well-tested architectures.
            </p>
  
            <p>
              I care about clean code, strong testing practices, and continuous
              learning. I enjoy working collaboratively with teams and building
              systems that other developers can easily understand and extend.
            </p>
          </div>
        </div>
      </section>
    );
  }