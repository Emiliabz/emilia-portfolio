"use client";

// CORREÇÃO: Linkedin e Github
import { Linkedin, Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#8C5A3C]/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-serif font-bold text-[#3F2A1D]">
          Emília Barboza
        </span>

        <div className="hidden md:flex gap-8 text-sm font-medium text-[#3F2A1D]/60">
          <a href="#projetos" className="hover:text-[#8C5A3C] transition-colors">Projetos</a>
          <a href="#sobre" className="hover:text-[#8C5A3C] transition-colors">Sobre Mim</a>
          <a href="#formacao" className="hover:text-[#8C5A3C] transition-colors">Formação</a>
        </div>

        <div className="flex items-center gap-5">
          <a 
            href="https://www.linkedin.com/in/emiliabarboza/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#3F2A1D]/40 hover:text-[#0A66C2] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/emiliabarboza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#3F2A1D]/40 hover:text-black transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}