"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { useLanguage } from "@/components/language-context";

export function EducationSection() {
  const { t, language } = useLanguage();
  const [tab, setTab] = useState("graduacao");

  const categorias = [
    { id: "graduacao", label: t("Graduação", "Degree"), emoji: "🎓" },
    { id: "dados", label: t("Dados & BI", "Data & BI"), emoji: "📊" },
    { id: "gestao", label: t("Gestão & Office", "Management & Office"), emoji: "📋" },
    { id: "programacao", label: t("Programação", "Programming"), emoji: "</>" }
  ];

  const getTagStyle = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("python") || t.includes("pandas") || t.includes("numpy") || t.includes("data science")) {
      return "bg-[#F5E6E0] text-[#A0522D]"; 
    }
    if (t.includes("sql")) {
      return "bg-[#FDF2E9] text-[#D35400]";
    }
    if (t.includes("excel")) return "bg-[#EAE2D6] text-[#8C7B6C]"; 
    if (t.includes("lgpd")) return "bg-[#D0D7DE] text-[#57606A]";
    if (t.includes("redação") || t.includes("ética") || t.includes("oficial")) {
      return "bg-[#EAE2D6] text-[#8C7B6C]";
    }
    if (t.includes("power bi") || t.includes("qlik")) return "bg-[#E7F0F4] text-[#4682A9]";

    return "bg-[#EBE3D5] text-[#3F2A1D]";
  };

  const certificados = portfolioData[language]?.certificados || [];
  const graduacao = portfolioData[language]?.graduacao;

  return (
    <section id="formacao" className="py-24 px-6 bg-[#F5F1EA]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-4 text-[#3F2A1D]">
          {t("Formação e Especializações", "Education & Specializations")}
        </h2>
        <p className="text-center text-[#3F2A1D]/70 mb-12 max-w-2xl mx-auto italic">
          {t("Minha jornada de aprendizado contínuo em análise de dados, business intelligence e desenvolvimento.", "My continuous learning journey in data analysis, business intelligence, and development.")}
        </p>

        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              type="button" // Garante o clique
              onClick={() => setTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl border transition-all text-sm font-medium flex items-center gap-2 shadow-sm ${
                tab === cat.id 
                ? "bg-[#8C5A3C] text-white border-[#8C5A3C]" 
                : "bg-[#FDFBF9] text-[#3F2A1D] border-[#8C5A3C]/10 hover:bg-[#EBE3D5]"
              }`}
            >
              <span className="text-xs opacity-70">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {tab === "graduacao" && graduacao ? (
            <div className="bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-3xl overflow-hidden shadow-sm max-w-3xl mx-auto">
              <div className="bg-[#D5D9D9] p-8 flex items-center gap-6">
                <div className="w-16 h-16 bg-[#EBE3D5] rounded-2xl flex items-center justify-center text-3xl shadow-inner">🎓</div>
                <div>
                  <p className="text-xs text-[#3F2A1D]/60 uppercase font-bold tracking-widest mb-1">{graduacao.instituicao}</p>
                  <h3 className="text-2xl font-serif font-bold text-[#3F2A1D] leading-tight">{graduacao.curso}</h3>
                  <p className="text-[#3F2A1D]/80 font-medium mt-1">{graduacao.status}</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[#8C5A3C] font-bold mb-4">
                  <span>🔖</span> {t("Em andamento", "In progress")}
                </div>
                <p className="text-[#3F2A1D]/80 leading-relaxed italic border-t border-[#8C5A3C]/5 pt-4">
                  {graduacao.descricao}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificados
                .filter((c: any) => c.cat.toLowerCase() === tab.toLowerCase())
                .map((cert: any, index: number) => (
                  <div key={index} className="group relative bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-md ${getTagStyle(cert.tag)}`}>
                          {cert.tag}
                        </span>
                        <span className="text-[#3F2A1D]/40 text-[10px] font-medium flex items-center gap-1">🕒 {cert.horas}</span>
                      </div>
                      <h4 className="font-bold text-[#3F2A1D] group-hover:text-[#8C5A3C] transition-colors text-lg leading-tight mb-2">{cert.nome}</h4>
                      <p className="text-xs text-[#3F2A1D]/50 uppercase tracking-wide font-semibold">{cert.org}</p>
                    </div>
                    
                    {/* Overlay e Botão Flutuante no Hover */}
                    <div className="absolute inset-0 bg-[#FDFBF9]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <a 
                        href={cert.link || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-[#3F2A1D] text-white text-sm font-bold rounded-xl hover:scale-105 transition-transform shadow-md"
                      >
                        {t("Visualizar Certificado", "View Certificate")}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        
        {tab !== "graduacao" && (
          <div className="text-center mt-12 text-[#3F2A1D]/40 text-sm">
             {certificados.filter((c: any) => c.cat.toLowerCase() === tab.toLowerCase()).length} {t("certificados em", "certificates in")} {categorias.find(c => c.id === tab)?.label}
          </div>
        )}
      </div>
    </section>
  );
}