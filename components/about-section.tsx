"use client";

import { useState } from "react";
import { educationData } from "@/lib/portfolio-data";

export function AboutSection() {
  const [activeExp, setActiveExp] = useState(0);

  const exps = educationData?.experiencias || [];
  const objetivo = educationData?.objetivo || "";

  if (exps.length === 0) return null;

  return (
    <section id="sobre" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#3F2A1D] mb-6 border-l-8 border-[#8C5A3C] pl-4">
            Sobre Mim
          </h2>
          <p className="text-[#3F2A1D]/80 leading-relaxed text-lg max-w-3xl">
            {objetivo}
          </p>
        </div>

        <div className="bg-[#F5F1EA] p-8 md:p-10 rounded-3xl shadow-sm border border-[#8C5A3C]/5">
          <h3 className="text-xl font-bold text-[#3F2A1D] mb-8 flex items-center gap-2 uppercase tracking-tighter">
            <span className="w-8 h-8 bg-[#8C5A3C] text-white rounded-lg flex items-center justify-center text-sm shadow-sm">💼</span>
            Trajetória Profissional
          </h3>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 min-w-[200px]">
              {exps.map((exp, index) => (
                <button
                  key={index}
                  type="button" // Garante que o clique funcione
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveExp(index);
                  }}
                  className={`relative z-10 cursor-pointer flex-shrink-0 px-5 py-4 rounded-xl text-[11px] font-bold text-left transition-all border ${
                    activeExp === index 
                    ? "bg-[#8C5A3C] text-white border-[#8C5A3C] shadow-md scale-105" 
                    : "bg-white/50 text-[#3F2A1D]/60 border-transparent hover:bg-white"
                  }`}
                >
                  {exp.empresa.split(" – ")[0]}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[280px] bg-white/40 p-8 rounded-2xl border border-white/50 shadow-inner">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-[#3F2A1D] leading-tight">
                  {exps[activeExp].cargo}
                </h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2">
                  <span className="text-[#8C5A3C] font-bold text-base">
                    {exps[activeExp].empresa}
                  </span>
                  <span className="text-[10px] font-black text-[#3F2A1D]/40 uppercase tracking-[0.2em] bg-white/60 px-3 py-1 rounded-full">
                    {exps[activeExp].periodo}
                  </span>
                </div>
              </div>
              <div className="h-px bg-[#8C5A3C]/10 w-full mb-6" />
              <p className="text-[#3F2A1D]/70 text-sm leading-relaxed whitespace-pre-line">
                {exps[activeExp].descricao}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}