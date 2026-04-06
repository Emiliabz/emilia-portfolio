"use client";

import { educationData } from "@/lib/portfolio-data";

export function ProjectsSection() {
  const projects = educationData?.projects || [];

  return (
    <section id="projetos" className="py-24 px-6 bg-[#F5F1EA]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-[#3F2A1D] mb-12">Projetos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white border border-[#8C5A3C]/10 rounded-[2.5rem] p-10 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-3xl font-serif font-bold text-[#3F2A1D] mb-4">{proj.title}</h3>
              
              <p className="text-[#3F2A1D]/70 text-base mb-8 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tags?.map((tag, tIndex) => (
                  <span key={tIndex} className="bg-[#EAE2D6] text-[#8C7B6C] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-4 mb-10">
                {proj.features?.map((feat, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-[#3F2A1D]/80">
                    <span className="text-[#8C5A3C] font-bold text-lg leading-none">›</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F5F1EA] border border-[#8C5A3C]/10 rounded-2xl text-[#3F2A1D] font-bold text-sm hover:bg-[#8C5A3C] hover:text-white transition-all shadow-sm"
              >
                📊 Acessar Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}