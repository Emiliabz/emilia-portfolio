"use client";

import { useState } from "react";
import { educationData } from "@/lib/portfolio-data";

export function AboutSection() {
  const [activeExp, setActiveExp] = useState(0);

  // Verificação de segurança robusta
  const exps = educationData?.experiencias || [];
  const objetivo = educationData?.objetivo || "";

  if (exps.length === 0) {
    return <div className="text-center py-20 text-[#3F2A1D]">Carregando trajetórias...</div>;
  }

  return (
    <section id="sobre" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Lado Esquerdo: Objetivo */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif font-bold text-[#3F2A1D] mb-6 border-l-8 border-[#8C5A3C] pl-4">Sobre Mim</h2>
            <p className="text-[#3F2A1D]/80 leading-relaxed text-lg">
              {objetivo}
            </p>
          </div>

          {/* Lado Direito: Abas de Experiência */}
          <div className="md:col-span-7 bg-[#F5F1EA] p-8 rounded-3xl shadow-sm border border-[#8C5A3C]/5">
            <h3 className="text-xl font-bold text-[#3F2A1D] mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#8C5A3C] text-white rounded-lg flex items-center justify-center text-sm shadow-sm">💼</span>
              Trajetória Profissional
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Lista de Botões */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 min-w-[160px]">
                {exps.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExp(index)}
                    className={`px-4 py-3 rounded-xl text-[10px] font-bold text-left transition-all border ${
                      activeExp === index 
                      ? "bg-[#8C5A3C] text-white border-[#8C5A3C] shadow-md scale-105" 
                      : "bg-white/50 text-[#3F2A1D]/60 border-transparent hover:bg-white"
                    }`}
                  >
                    {exp.empresa.split(" – ")[0]}
                  </button>
                ))}
              </div>

              {/* Detalhes da Experiência */}
              <div className="flex-1 min-h-[250px] bg-white/40 p-6 rounded-2xl border border-white/50">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-[#3F2A1D] leading-tight">
                    {exps[activeExp].cargo}
                  </h4>
                  <div className="flex flex-col mt-2">
                    <span className="text-[#8C5A3C] font-semibold text-sm">
                      {exps[activeExp].empresa}
                    </span>
                    <span className="text-[10px] font-bold text-[#3F2A1D]/40 uppercase tracking-widest mt-1">
                      {exps[activeExp].periodo}
                    </span>
                  </div>
                </div>
                
                <p className="text-[#3F2A1D]/70 text-sm leading-relaxed border-t border-[#8C5A3C]/10 pt-4 whitespace-pre-line">
                  {exps[activeExp].descricao}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}