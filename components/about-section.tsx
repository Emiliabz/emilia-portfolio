"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { useLanguage } from "@/components/language-context";
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

export function AboutSection() {
  const { t, language } = useLanguage();
  const [activeExp, setActiveExp] = useState(0);

  const objetivo = portfolioData[language]?.objetivo || "";

  const experiencias = [
    {
      empresa: "INSS",
      icon: Landmark,
      cargo: t("Estagiária em Proteção e Análise de Dados", "Data Analysis & Protection Intern"),
      local: t("INSS – Gerência Executiva de Jundiaí", "INSS – Jundiaí Executive Branch"),
      periodo: t("Set/2025 – Atual", "Sep/2025 – Present"),
      descricao: (
        <div className="space-y-4">
          <ListItem icon={BarChart} title={t("Análise de Dados:", "Data Analysis:")}>
            {t("Processamento e garantia de qualidade em sistemas corporativos de larga escala.", "Processing and quality assurance in large-scale corporate systems.")}
          </ListItem>
          <ListItem icon={ShieldCheck} title={t("Governança:", "Governance:")}>
            {t("Proteção de dados sensíveis e garantia de conformidade com normas de segurança (LGPD).", "Sensitive data protection and compliance with security regulations (LGPD).")}
          </ListItem>
          <ListItem icon={TrendingUp} title={t("Inteligência de Negócio:", "Business Intelligence:")}>
            {t("Desenvolvimento de relatórios e visualizações para otimização de fluxos internos e suporte à decisão.", "Development of reports and visualizations to optimize internal flows and support decision-making.")}
          </ListItem>
          <ListItem icon={Settings} title={t("Otimização:", "Optimization:")}>
            {t("Atuação direta na resolução de problemas técnicos e manutenção de ativos digitais.", "Direct action in solving technical problems and maintaining digital assets.")}
          </ListItem>
        </div>
      )
    },
    {
      empresa: "Esplanada Móveis",
      icon: Armchair,
      cargo: t("Auxiliar Administrativo", "Administrative Assistant"),
      local: "Esplanada Móveis",
      periodo: t("Abr/2025 – Jun/2025", "Apr/2025 – Jun/2025"),
      descricao: (
        <div className="space-y-4">
          <ListItem icon={BarChart} title={t("Gestão de Inventário:", "Inventory Management:")}>
            {t("Controle e organização de planilhas utilizando Excel avançado.", "Spreadsheet control and organization using advanced Excel.")}
          </ListItem>
          <ListItem icon={FolderOpen} title={t("Organização Documental:", "Document Organization:")}>
            {t("Arquivamento e digitalização de documentos para otimização do fluxo administrativo.", "Archiving and digitizing documents to optimize the administrative flow.")}
          </ListItem>
          <ListItem icon={Handshake} title={t("Suporte ao Cliente:", "Customer Support:")}>
            {t("Atendimento consultivo e resolução de problemas, garantindo a satisfação do consumidor final.", "Consultative service and problem-solving, ensuring end-consumer satisfaction.")}
          </ListItem>
        </div>
      )
    },
    {
      empresa: "Eco Pousada",
      icon: Leaf,
      cargo: t("Gestora de Operações", "Operations Manager"),
      local: "Eco Pousada Vegana Maha Devas",
      periodo: t("Mai/2021 – Fev/2025", "May/2021 – Feb/2025"),
      descricao: (
        <div className="space-y-4">
          <ListItem icon={TrendingUp} title={t("Análise de Performance:", "Performance Analysis:")}>
            {t("Acompanhamento de métricas e KPIs de desempenho digital para ajuste de estratégias de branding.", "Monitoring metrics and digital performance KPIs to adjust branding strategies.")}
          </ListItem>
          <ListItem icon={Smartphone} title={t("Marketing Digital:", "Digital Marketing:")}>
            {t("Criação de conteúdo multimídia e gestão de redes sociais com foco em crescimento orgânico e tráfego pago.", "Multimedia content creation and social media management focusing on organic growth and paid traffic.")}
          </ListItem>
          <ListItem icon={Users} title={t("Liderança de Equipe:", "Team Leadership:")}>
            {t("Gestão direta de funcionários e voluntários, além da coordenação de reservas e comunicação via WhatsApp.", "Direct management of employees and volunteers, in addition to booking coordination and WhatsApp communication.")}
          </ListItem>
          <ListItem icon={Building} title={t("Gestão Operacional:", "Operational Management:")}>
            {t("Gerenciamento completo da pousada, garantindo a eficiência dos processos e qualidade da experiência do hóspede.", "Complete lodge management, ensuring process efficiency and guest experience quality.")}
          </ListItem>
        </div>
      )
    },
    {
      empresa: "Autônoma",
      icon: Sparkles,
      cargo: t("Empreendedora – Cosméticos Naturais", "Entrepreneur – Natural Cosmetics"),
      local: t("Autônoma", "Freelance"),
      periodo: t("Ago/2014 – Mai/2021", "Aug/2014 – May/2021"),
      descricao: (
        <div className="space-y-4">
          <ListItem icon={Coins} title={t("Gestão Financeira e Custos:", "Financial & Cost Management:")}>
            {t("Análise detalhada de custos, precificação estratégica e controle completo de finanças e logística.", "Detailed cost analysis, strategic pricing, and complete control of finances and logistics.")}
          </ListItem>
          <ListItem icon={Package} title={t("Planejamento de Produção:", "Production Planning:")}>
            {t("Gestão de estoque e cadeia de suprimentos por meio de planilhas de controle automatizadas.", "Inventory and supply chain management through automated control spreadsheets.")}
          </ListItem>
          <ListItem icon={Rocket} title={t("Estratégia de Vendas:", "Sales Strategy:")}>
            {t("Desenvolvimento de táticas de vendas online e presenciais fundamentadas em análise de resultados históricos.", "Development of online and in-person sales tactics based on historical result analysis.")}
          </ListItem>
          <ListItem icon={Target} title={t("CRM:", "CRM:")}>
            {t("Atendimento personalizado e gestão de relacionamento, focando na fidelização de clientes.", "Personalized service and relationship management, focusing on customer loyalty.")}
          </ListItem>
        </div>
      )
    }
  ];

  if (experiencias.length === 0) return null;

  return (
    <section id="sobre" className="py-24 px-6 bg-[#F5F1EA]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#6F4E37] mb-6 border-l-8 border-[#6F4E37] pl-4">
            {t("Sobre Mim", "About Me")}
          </h2>
          <p className="text-[#8D8078] leading-relaxed text-lg max-w-3xl">
            {objetivo}
          </p>
        </div>

        <div className="bg-[#FDFBF9] p-8 md:p-10 rounded-3xl shadow-sm border border-[#6F4E37]/5">
          <h3 className="text-xl font-bold text-[#6F4E37] mb-8 flex items-center gap-3 uppercase tracking-tighter">
            <span className="w-8 h-8 bg-[#6F4E37] text-white rounded-lg flex items-center justify-center shadow-sm">
              <Briefcase size={16} />
            </span>
            {t("Trajetória Profissional", "Professional Trajectory")}
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
                    : "bg-[#F5F1EA] text-[#8D8078] border border-[#6F4E37]/10 hover:bg-white hover:text-[#6F4E37]"
                  }`}
                >
                  <exp.icon className={`w-5 h-5 shrink-0 ${activeExp === index ? "text-white" : "text-[#6F4E37]"}`} />
                  {exp.empresa}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[280px] bg-[#F5F1EA] p-8 rounded-2xl border border-[#6F4E37]/10 shadow-sm transition-all">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-[#6F4E37] leading-tight mb-2">
                  {experiencias[activeExp].cargo}
                </h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <span className="text-[#A67B5B] font-bold text-base flex items-center gap-1.5">
                    {experiencias[activeExp].local}
                  </span>
                  <span className="text-[10px] font-black text-[#8D8078] uppercase tracking-[0.2em] bg-[#FDFBF9] border border-[#8D8078]/10 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
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