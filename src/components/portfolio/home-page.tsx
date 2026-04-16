import AboutSection from "@/components/portfolio/about-section";
import ConnectSection from "@/components/portfolio/connect-section";
import Footer from "@/components/portfolio/footer";
import HeroSection from "@/components/portfolio/hero-section";
import Navbar from "@/components/portfolio/navbar";
import ProjectsSection from "@/components/portfolio/projects-section";
import ResumeSection from "@/components/portfolio/resume-section";
import { portfolioLinks, projects, skills } from "@/data/portfolio";

export default function HomePage() {
  const { resumeUrl, githubUrl, linkedinUrl } = portfolioLinks;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar githubUrl={githubUrl} linkedinUrl={linkedinUrl} />

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ResumeSection resumeUrl={resumeUrl} skills={skills} />
        <ConnectSection githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
        <Footer />
      </div>
    </main>
  );
}