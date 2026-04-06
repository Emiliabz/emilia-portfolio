"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { useLanguage } from "@/components/language-context";

const ChevronLeft = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const projects = portfolioData[language]?.projects || [];
  const notebooks = portfolioData[language]?.notebooks || [];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  // Recorta a lista para mostrar apenas os 2 da página atual
  const currentProjects = projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => totalPages > 0 ? (prev + 1) % totalPages : 0);
  const prevPage = () => setCurrentPage((prev) => totalPages > 0 ? (prev - 1 + totalPages) % totalPages : 0);

  return (
    <section id="projetos" className="py-24 px-6 bg-[#E5DFD3]">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div>
            <span className="text-[#3F2A1D] font-black tracking-widest uppercase text-sm mb-3 block opacity-80">{t("Portfólio", "Portfolio")}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3F2A1D] leading-tight max-w-xl">{t("Projetos feitos com Power BI e Streamlit", "Projects built with Power BI and Streamlit")}</h2>
          </div>
          
          {/* Botões de Navegação */}
          <div className="flex gap-3">
            <button onClick={prevPage} className="p-3 bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-full text-[#3F2A1D] hover:bg-[#8C5A3C] hover:text-white transition-colors shadow-sm active:scale-95" aria-label={t("Anteriores", "Previous")}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextPage} className="p-3 bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-full text-[#3F2A1D] hover:bg-[#8C5A3C] hover:text-white transition-colors shadow-sm active:scale-95" aria-label={t("Próximos", "Next")}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[450px]">
          {currentProjects.map((proj, index) => (
            <div key={index} className="bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-[2.5rem] p-10 shadow-sm transition-all hover:shadow-md flex flex-col">
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

              {/* O "mt-auto" força o botão a ficar sempre alinhado na base do card */}
              <div className="mt-auto pt-4">
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#6F4E37] border border-transparent rounded-2xl text-[#FDFBF9] font-bold text-sm hover:bg-[#5A3F2C] hover:text-white transition-all shadow-sm"
                >
                  📊 {t("Acessar Projeto", "View Project")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bolinhas Indicadoras do Slideshow */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentPage(idx)}
              className={`h-2 rounded-full transition-all ${currentPage === idx ? "bg-[#8C5A3C] w-6" : "bg-[#8C5A3C]/30 w-2"}`}
              aria-label={t(`Ir para a página ${idx + 1}`, `Go to page ${idx + 1}`)}
            />
          ))}
        </div>
        {/* Nova Seção: Notebooks & Análises (Python) */}
        <div className="mt-32">
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3F2A1D] mb-4">{t("Notebooks & Análises (Python)", "Notebooks & Analytics (Python)")}</h2>
            <p className="text-[#3F2A1D]/70 max-w-2xl text-lg mx-auto sm:mx-0">
              {t("Explorações de dados, modelagem e análises desenvolvidas no Google Colab.", "Data explorations, modeling, and analytics developed in Google Colab.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notebooks.map((nb, index) => (
              <div key={index} className="bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-[1.5rem] p-6 shadow-sm transition-all hover:shadow-md flex flex-col">
                <h3 className="text-xl font-serif font-bold text-[#3F2A1D] mb-2">{nb.title}</h3>
                <p className="text-[#3F2A1D]/70 text-sm mb-5 line-clamp-2">{nb.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {nb.tags?.map((tag, tIndex) => (
                    <span key={tIndex} className="bg-[#E7F0F4] text-[#4682A9] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Snippet de Código */}
                <div className="bg-[#1E1E1E] rounded-xl p-4 mb-6 mt-auto overflow-hidden">
                  <pre className="text-[#D4D4D4] text-[11px] font-mono overflow-x-auto whitespace-pre">
                    <code>{nb.codeSnippet}</code>
                  </pre>
                </div>

                <a 
                  href={nb.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#6F4E37] border border-transparent rounded-xl text-[#FDFBF9] font-bold text-sm hover:bg-[#5A3F2C] hover:text-white transition-all shadow-sm"
                >
                  <Github size={16} /> {t("Acessar Colab", "Open in Colab")}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Acessar Códigos (GitHub) */}
        <div className="flex justify-center mt-16">
          <a 
            href="https://github.com/Emiliabz" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3F2A1D] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-md active:scale-95"
          >
            <Github size={20} />
            {t("Ver todos os repositórios", "View all repositories")}
          </a>
        </div>
      </div>
    </section>
  );
}