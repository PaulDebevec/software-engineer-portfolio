export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="py-8">
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

        <section className="py-8">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-4 text-neutral-300">
            Project cards will go here.
          </p>
        </section>

        <section className="py-8">
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