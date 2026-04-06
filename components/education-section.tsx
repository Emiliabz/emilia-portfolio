"use client";

import { useState } from "react";
// Importando sua lista de certificados do arquivo que criamos
import { educationData } from "@/lib/portfolio-data";

export function EducationSection() {
  const [tab, setTab] = useState("graduacao");

  const categorias = [
    { id: "graduacao", label: "Graduação" },
    { id: "dados", label: "Dados & BI" },
    { id: "gestao", label: "Gestão & Office" },
    { id: "programacao", label: "Programação" }
  ];

  return (
    <section id="formacao" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center text-[#4a3728]">
          Formação e Especializações
        </h2>
        <p className="text-center text-[#4a3728]/70 mb-12 max-w-2xl mx-auto">
          Minha jornada de aprendizado contínuo em análise de dados, business intelligence e desenvolvimento.
        </p>

        {/* Botões das Abas (Tabs) */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setTab(cat.id)}
              className={`px-6 py-2 rounded-xl border transition-all text-sm font-medium shadow-sm ${
                tab === cat.id 
                ? "bg-[#8c5a3c] text-white border-[#8c5a3c]" 
                : "bg-white text-[#4a3728] border-[#8c5a3c]/10 hover:bg-[#e6ddd3]/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Conteúdo Dinâmico */}
        <div className="min-h-[350px]">
          {tab === "graduacao" ? (
            /* EXIBIÇÃO DA GRADUAÇÃO */
            <div className="bg-white border border-[#8c5a3c]/10 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#e6ddd3]/50 rounded-2xl flex items-center justify-center text-2xl">🎓</div>
                <div>
                  <p className="text-xs text-[#8c5a3c] font-bold uppercase tracking-wider">{educationData.graduacao.instituicao}</p>
                  <h3 className="text-xl font-bold text-[#4a3728]">{educationData.graduacao.curso}</h3>
                </div>
              </div>
              <p className="text-[#8c5a3c] font-medium mb-4">{educationData.graduacao.status}</p>
              <p className="text-sm text-[#4a3728]/80 leading-relaxed border-t border-[#8c5a3c]/5 pt-4">
                {educationData.graduacao.descricao}
              </p>
            </div>
          ) : (
            /* EXIBIÇÃO DOS CARDS DE CERTIFICADOS */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationData.certificados
                .filter((cert) => cert.cat.toLowerCase() === tab.toLowerCase())
                .map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-[#8c5a3c]/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-[#e6ddd3]/40 text-[#8c5a3c] text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                          {cert.tag}
                        </span>
                        <span className="text-[#4a3728]/40 text-[10px] font-medium">🕒 {cert.horas}</span>
                      </div>
                      <h4 className="font-bold text-[#4a3728] leading-tight mb-2">
                        {cert.nome}
                      </h4>
                    </div>
                    <p className="text-xs text-[#8c5a3c] font-medium mt-4">
                      {cert.org}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}