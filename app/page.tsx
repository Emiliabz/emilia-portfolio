import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Navbar />
      <HeroSection />
      
      {/* 1. Projetos no topo */}
      <ProjectsSection /> 
      
      {/* 2. Sobre Mim e Trajetória Profissional */}
      <AboutSection />

      {/* 3. Formação e Especializações (Certificados) */}
      <EducationSection />
      
      <footer className="py-12 bg-[#3F2A1D] text-[#EBE3D5] text-center text-sm">
        <p>© 2026 Emília Barboza • Analista de Dados</p>
      </footer>
    </main>
  );
}