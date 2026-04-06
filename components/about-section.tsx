"use client";

import { useState } from "react";
import { educationData } from "@/lib/portfolio-data";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-bold text-[#D35400]">{children}</strong>
);

const experiencias = [
  {
    empresa: "INSS",
    icon: "🏛️",
    cargo: "Estagiária em Proteção e Análise de Dados",
    local: "INSS – Gerência Executiva de Jundiaí",
    periodo: "Set/2025 – Atual",
    descricao: (
      <div className="space-y-3">
        <p>📊 <Highlight>Análise de Dados:</Highlight> Processamento e garantia de qualidade em sistemas corporativos de larga escala.</p>
        <p>🛡️ <Highlight>Governança:</Highlight> Proteção de dados sensíveis e garantia de conformidade com normas de segurança (LGPD).</p>
        <p>📈 <Highlight>Inteligência de Negócio:</Highlight> Desenvolvimento de relatórios e visualizações para otimização de fluxos internos e suporte à decisão.</p>
        <p>⚙️ <Highlight>Otimização:</Highlight> Atuação direta na resolução de problemas técnicos e manutenção de ativos digitais.</p>
      </div>
    )
  },
  {
    empresa: "Esplanada Móveis",
    icon: "🛋️",
    cargo: "Auxiliar Administrativo",
    local: "Esplanada Móveis",
    periodo: "Abr/2025 – Jun/2025",
    descricao: (
      <div className="space-y-3">
        <p>📊 <Highlight>Gestão de Inventário:</Highlight> Controle e organização de planilhas utilizando Excel avançado.</p>
        <p>📂 <Highlight>Organização Documental:</Highlight> Arquivamento e digitalização de documentos para otimização do fluxo administrativo.</p>
        <p>🤝 <Highlight>Suporte ao Cliente:</Highlight> Atendimento consultivo e resolução de problemas, garantindo a satisfação do consumidor final.</p>
      </div>
    )
  },
  {
    empresa: "Eco Pousada",
    icon: "🌿",
    cargo: "Gestora de Operações",
    local: "Eco Pousada Vegana Maha Devas",
    periodo: "Mai/2021 – Fev/2025",
    descricao: (
      <div className="space-y-3">
        <p>📈 <Highlight>Análise de Performance:</Highlight> Acompanhamento de métricas e KPIs de desempenho digital para ajuste de estratégias de branding.</p>
        <p>📱 <Highlight>Marketing Digital:</Highlight> Criação de conteúdo multimídia e gestão de redes sociais com foco em crescimento orgânico e tráfego pago.</p>
        <p>👥 <Highlight>Liderança de Equipe:</Highlight> Gestão direta de funcionários e voluntários, além da coordenação de reservas e comunicação via WhatsApp.</p>
        <p>🏨 <Highlight>Gestão Operacional:</Highlight> Gerenciamento completo da pousada, garantindo a eficiência dos processos e qualidade da experiência do hóspede.</p>
      </div>
    )
  },
  {
    empresa: "Autônoma",
    icon: "💄",
    cargo: "Empreendedora – Cosméticos Naturais",
    local: "Autônoma",
    periodo: "Ago/2014 – Mai/2021",
    descricao: (
      <div className="space-y-3">
        <p>💰 <Highlight>Gestão Financeira e Custos:</Highlight> Análise detalhada de custos, precificação estratégica e controle completo de finanças e logística.</p>
        <p>📦 <Highlight>Planejamento de Produção:</Highlight> Gestão de estoque e cadeia de suprimentos por meio de planilhas de controle automatizadas.</p>
        <p>🚀 <Highlight>Estratégia de Vendas:</Highlight> Desenvolvimento de táticas de vendas online e presenciais fundamentadas em análise de resultados históricos.</p>
        <p>🎯 <Highlight>CRM:</Highlight> Atendimento personalizado e gestão de relacionamento, focando na fidelização de clientes.</p>
      </div>
    )
  }
];

export function AboutSection() {
  const [activeExp, setActiveExp] = useState(0);

  const objetivo = educationData?.objetivo || "";

  if (experiencias.length === 0) return null;

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
              {experiencias.map((exp, index) => (
                <button
                  key={index}
                  type="button" // Garante que o clique funcione
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveExp(index);
                  }}
                  className={`relative z-10 cursor-pointer flex-shrink-0 px-6 py-5 rounded-2xl text-sm font-bold text-left transition-all border flex items-center gap-3 ${
                    activeExp === index 
                    ? "bg-gradient-to-br from-[#8C5A3C] to-[#A0522D] text-white border-transparent shadow-lg scale-105" 
                    : "bg-white text-[#3F2A1D]/70 border border-[#8C5A3C]/10 hover:bg-[#F5F1EA] hover:text-[#3F2A1D]"
                  }`}
                >
                  <span>{exp.icon}</span>
                  {exp.empresa}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[280px] bg-white/40 p-8 rounded-2xl border border-white/50 shadow-inner">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-[#3F2A1D] leading-tight">
                  {experiencias[activeExp].cargo}
                </h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2">
                  <span className="text-[#8C5A3C] font-bold text-base">
                    {experiencias[activeExp].local}
                  </span>
                  <span className="text-[10px] font-black text-[#3F2A1D]/40 uppercase tracking-[0.2em] bg-white/60 px-3 py-1 rounded-full">
                    {experiencias[activeExp].periodo}
                  </span>
                </div>
              </div>
              <div className="h-px bg-[#8C5A3C]/10 w-full mb-6" />
              <div className="text-[#3F2A1D]/80 text-sm leading-relaxed">
                {experiencias[activeExp].descricao}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}