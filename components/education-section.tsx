"use client";

import { useState } from "react";

type Tab = "graduacao" | "dados" | "gestao" | "programacao";

export function EducationSection() {
  const [tab, setTab] = useState<Tab>("graduacao");

  return (
    <section id="formacao" className="py-24 px-6 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[#4a3728]">
          Formação e Especializações
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button 
            onClick={() => setTab("graduacao")}
            className={`px-6 py-2 rounded-full transition-all border ${tab === "graduacao" ? "bg-[#8c5a3c] text-white border-[#8c5a3c]" : "bg-transparent text-[#4a3728] border-[#8c5a3c]/30 hover:bg-[#e6ddd3]/50"}`}
          >
            Graduação
          </button>
          <button 
            onClick={() => setTab("dados")}
            className={`px-6 py-2 rounded-full transition-all border ${tab === "dados" ? "bg-[#8c5a3c] text-white border-[#8c5a3c]" : "bg-transparent text-[#4a3728] border-[#8c5a3c]/30 hover:bg-[#e6ddd3]/50"}`}
          >
            Dados & BI
          </button>
          <button 
            onClick={() => setTab("gestao")}
            className={`px-6 py-2 rounded-full transition-all border ${tab === "gestao" ? "bg-[#8c5a3c] text-white border-[#8c5a3c]" : "bg-transparent text-[#4a3728] border-[#8c5a3c]/30 hover:bg-[#e6ddd3]/50"}`}
          >
            Gestão & Office
          </button>
          <button 
            onClick={() => setTab("programacao")}
            className={`px-6 py-2 rounded-full transition-all border ${tab === "programacao" ? "bg-[#8c5a3c] text-white border-[#8c5a3c]" : "bg-transparent text-[#4a3728] border-[#8c5a3c]/30 hover:bg-[#e6ddd3]/50"}`}
          >
            Programação
          </button>
        </div>

        {/* Conteúdo */}
        <div className="min-h-[200px]">
          {tab === "graduacao" && (
            <div className="border border-[#8c5a3c]/20 p-8 rounded-xl bg-[#e6ddd3]/20">
              <h3 className="font-bold text-xl text-[#4a3728]">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-[#8c5a3c] font-medium">
                Estácio de Sá - 3º semestre (2027)
              </p>
            </div>
          )}

          {tab === "dados" && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">Power BI</div>
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">SQL</div>
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">Python</div>
            </div>
          )}

          {tab === "gestao" && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">Excel Avançado</div>
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">LGPD</div>
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">Ética</div>
            </div>
          )}

          {tab === "programacao" && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">Pandas</div>
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">NumPy</div>
              <div className="border border-[#8c5a3c]/20 p-6 rounded-xl bg-[#e6ddd3]/20 text-[#4a3728] font-semibold text-center hover:bg-[#e6ddd3]/40 transition-colors">Data Science</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}