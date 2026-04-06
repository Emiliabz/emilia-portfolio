import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <Navbar />
      <HeroSection />
      
      {/* 1. Projetos no topo */}
      <ProjectsSection /> 
      
      {/* 2. Sobre Mim e Trajetória Profissional */}
      <AboutSection />

      {/* 3. Formação e Especializações (Certificados) */}
      <EducationSection />
      
      <Footer />
    </main>
  );
}