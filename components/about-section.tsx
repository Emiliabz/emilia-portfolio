"use client";

import { useState } from "react";
import { educationData } from "@/lib/portfolio-data";
import { 
  Landmark, Armchair, Leaf, Sparkles,
  BarChart, ShieldCheck, TrendingUp, Settings,
  FolderOpen, Handshake, Smartphone, Users,
  Building, Coins, Package, Rocket, Target, Briefcase
} from "lucide-react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-bold text-[#6F4E37]">{children}</strong>
);

const ListItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <Icon className="w-5 h-5 text-[#A67B5B] shrink-0 mt-0.5" />
    <p className="text-[#8D8078] text-sm leading-relaxed">
      <Highlight>{title}</Highlight> {children}
    </p>
  </div>
);

const experiencias = [
  {
    empresa: "INSS",
    icon: Landmark,
    cargo: "Estagiária em Proteção e Análise de Dados",
    local: "INSS – Gerência Executiva de Jundiaí",
    periodo: "Set/2025 – Atual",
    descricao: (
      <div className="space-y-4">
        <ListItem icon={BarChart} title="Análise de Dados:">
          Processamento e garantia de qualidade em sistemas corporativos de larga escala.
        </ListItem>
        <ListItem icon={ShieldCheck} title="Governança:">
          Proteção de dados sensíveis e garantia de conformidade com normas de segurança (LGPD).
        </ListItem>
        <ListItem icon={TrendingUp} title="Inteligência de Negócio:">
          Desenvolvimento de relatórios e visualizações para otimização de fluxos internos e suporte à decisão.
        </ListItem>
        <ListItem icon={Settings} title="Otimização:">
          Atuação direta na resolução de problemas técnicos e manutenção de ativos digitais.
        </ListItem>
      </div>
    )
  },
  {
    empresa: "Esplanada Móveis",
    icon: Armchair,
    cargo: "Auxiliar Administrativo",
    local: "Esplanada Móveis",
    periodo: "Abr/2025 – Jun/2025",
    descricao: (
      <div className="space-y-4">
        <ListItem icon={BarChart} title="Gestão de Inventário:">
          Controle e organização de planilhas utilizando Excel avançado.
        </ListItem>
        <ListItem icon={FolderOpen} title="Organização Documental:">
          Arquivamento e digitalização de documentos para otimização do fluxo administrativo.
        </ListItem>
        <ListItem icon={Handshake} title="Suporte ao Cliente:">
          Atendimento consultivo e resolução de problemas, garantindo a satisfação do consumidor final.
        </ListItem>
      </div>
    )
  },
  {
    empresa: "Eco Pousada",
    icon: Leaf,
    cargo: "Gestora de Operações",
    local: "Eco Pousada Vegana Maha Devas",
    periodo: "Mai/2021 – Fev/2025",
    descricao: (
      <div className="space-y-4">
        <ListItem icon={TrendingUp} title="Análise de Performance:">
          Acompanhamento de métricas e KPIs de desempenho digital para ajuste de estratégias de branding.
        </ListItem>
        <ListItem icon={Smartphone} title="Marketing Digital:">
          Criação de conteúdo multimídia e gestão de redes sociais com foco em crescimento orgânico e tráfego pago.
        </ListItem>
        <ListItem icon={Users} title="Liderança de Equipe:">
          Gestão direta de funcionários e voluntários, além da coordenação de reservas e comunicação via WhatsApp.
        </ListItem>
        <ListItem icon={Building} title="Gestão Operacional:">
          Gerenciamento completo da pousada, garantindo a eficiência dos processos e qualidade da experiência do hóspede.
        </ListItem>
      </div>
    )
  },
  {
    empresa: "Autônoma",
    icon: Sparkles,
    cargo: "Empreendedora – Cosméticos Naturais",
    local: "Autônoma",
    periodo: "Ago/2014 – Mai/2021",
    descricao: (
      <div className="space-y-4">
        <ListItem icon={Coins} title="Gestão Financeira e Custos:">
          Análise detalhada de custos, precificação estratégica e controle completo de finanças e logística.
        </ListItem>
        <ListItem icon={Package} title="Planejamento de Produção:">
          Gestão de estoque e cadeia de suprimentos por meio de planilhas de controle automatizadas.
        </ListItem>
        <ListItem icon={Rocket} title="Estratégia de Vendas:">
          Desenvolvimento de táticas de vendas online e presenciais fundamentadas em análise de resultados históricos.
        </ListItem>
        <ListItem icon={Target} title="CRM:">
          Atendimento personalizado e gestão de relacionamento, focando na fidelização de clientes.
        </ListItem>
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
          <h2 className="text-4xl font-serif font-bold text-[#6F4E37] mb-6 border-l-8 border-[#6F4E37] pl-4">
            Sobre Mim
          </h2>
          <p className="text-[#8D8078] leading-relaxed text-lg max-w-3xl">
            {objetivo}
          </p>
        </div>

        <div className="bg-[#F5F1EA] p-8 md:p-10 rounded-3xl shadow-sm border border-[#6F4E37]/5">
          <h3 className="text-xl font-bold text-[#6F4E37] mb-8 flex items-center gap-3 uppercase tracking-tighter">
            <span className="w-8 h-8 bg-[#6F4E37] text-white rounded-lg flex items-center justify-center shadow-sm">
              <Briefcase size={16} />
            </span>
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
                  className={`relative z-10 cursor-pointer flex-shrink-0 px-6 py-5 rounded-2xl text-base md:text-lg font-bold text-left transition-all border flex items-center gap-3 ${
                    activeExp === index 
                    ? "bg-[#6F4E37] text-white border-transparent shadow-lg scale-105" 
                    : "bg-white text-[#8D8078] border border-[#6F4E37]/10 hover:bg-[#FDFBF9] hover:text-[#6F4E37]"
                  }`}
                >
                  <exp.icon className={`w-5 h-5 shrink-0 ${activeExp === index ? "text-white" : "text-[#6F4E37]"}`} />
                  {exp.empresa}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[280px] bg-[#FDFBF9] p-8 rounded-2xl border border-[#6F4E37]/10 shadow-sm transition-all">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-[#6F4E37] leading-tight mb-2">
                  {experiencias[activeExp].cargo}
                </h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <span className="text-[#A67B5B] font-bold text-base flex items-center gap-1.5">
                    {experiencias[activeExp].local}
                  </span>
                  <span className="text-[10px] font-black text-[#8D8078] uppercase tracking-[0.2em] bg-white border border-[#8D8078]/10 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    {experiencias[activeExp].periodo}
                  </span>
                </div>
              </div>
              <div className="h-px bg-[#6F4E37]/10 w-full mb-6" />
              <div className="text-[#8D8078] text-sm leading-relaxed">
                {experiencias[activeExp].descricao}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}