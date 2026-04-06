"use client";

// CORREÇÃO: Linkedin e Github (com I e H maiúsculos)
import { Linkedin, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-40 pb-24 px-6 text-center bg-[#FDFCFB]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-[#3F2A1D] mb-6 leading-tight">
          Analista de Dados & <br /> Estudante de ADS
        </h1>
        <p className="text-xl text-[#3F2A1D]/60 mb-10 max-w-2xl mx-auto italic font-serif">
          Transformando bases de dados complexas em insights estratégicos e decisões inteligentes.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/emiliabarboza/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#0A66C2] text-white rounded-2xl font-bold hover:bg-[#084d91] transition-all shadow-md active:scale-95"
          >
            <Linkedin size={20} />
            Meu LinkedIn
          </a>
          
          <a 
            href="https://github.com/emiliabarboza" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#3F2A1D] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-md active:scale-95"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}