import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { LinkedinFeedSection } from "@/components/linkedin-feed-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <EducationSection />
      <LinkedinFeedSection />
      <Footer />
    </main>
  );
}
