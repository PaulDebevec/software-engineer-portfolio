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
                I'm a full-stack software engineer with a strong backend focus, experienced
                in building and maintaining production systems across multiple stacks and
                industries, including aerospace and insurance. I enjoy solving real-world
                problems and developing software that is reliable, scalable, and easy to
                maintain.
            </p>
            <p>
                My work spans Python, Ruby on Rails, and Golang, where I've built backend
                services, contributed to full-stack applications, and helped evolve systems
                from legacy implementations to modern, well-tested architectures. I've also
                focused on improving performance and observability through logging and system
                optimization.
            </p>
            <p>
                I care about clean code, strong testing practices, and continuous learning.
                I enjoy collaborating with teams and building systems that other engineers
                can easily understand, extend, and trust in production.
            </p>
          </div>
        </div>
      </section>
    );
  }