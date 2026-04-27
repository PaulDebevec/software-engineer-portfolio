import PersonalPhotoSlider from "@/components/portfolio/personal-photo-slider";

const personalPhotos = [
  {
    src: "/about/paul-tycho.jpg",
    alt: "Paul and Tycho on a trip",
  },
  {
    src: "/about/nature.jpg",
    alt: "Example of Paul's outdoor photography",
  },
  {
    src: "/about/tycho.jpg",
    alt: "The pupper Tycho",
  },
  {
    src: "/about/stars.jpg",
    alt: "Example of Paul's astrophotography",
  },
];

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

          <div className="hidden md:block mt-28">
            <PersonalPhotoSlider photos={personalPhotos} />
          </div>
        </div>

        <div className="space-y-10 text-neutral-300">
          {/* Professional Section */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Professional
            </p>

            <div className="mt-4 space-y-4 leading-7">
              <p>
                I'm a full-stack software engineer with a strong backend focus,
                experienced in building and maintaining production systems across
                multiple stacks and industries, including aerospace and insurance.
                I enjoy solving real-world problems and developing software that is
                reliable, scalable, and easy to maintain.
              </p>

              <p>
                My work spans Python, Ruby on Rails, and Golang, where I've built
                backend services, contributed to full-stack applications, and helped
                evolve systems from legacy implementations to modern, well-tested
                architectures. I've also focused on improving performance and
                observability through logging and system optimization.
              </p>

              <p>
                I care about clean code, strong testing practices, and continuous
                learning. I enjoy collaborating with teams and building systems that
                other engineers can easily understand, extend, and trust in
                production.
              </p>
            </div>
          </div>

          {/* Personal Section */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Personal
            </p>

            <div className="mt-4 space-y-4 leading-7">
            <p>
              Outside of software, I enjoy staying active with my dog and spending time
              outdoors; especially climbing, camping, fishing, and hiking. I enjoy getting
              away from screens, exploring new places, and pushing myself both physically
              and mentally.
            </p>

            <p>
              I see myself as a lifelong learner and believe that continuous growth is key
              to a fulfilling life. Whether it's picking up new skills, reading, or
              refining what I already know, I enjoy the process of improving and building
              over time.
            </p>

            <p>
              In my free time, I also enjoy gaming (both video and board), spending time
              with friends, creative writing, and learning photography.
            </p>
            </div>

            <div className="md:hidden">
              <PersonalPhotoSlider photos={personalPhotos} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}