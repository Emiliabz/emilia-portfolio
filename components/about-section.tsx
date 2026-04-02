"use client";

import { Briefcase, GraduationCap, Shield, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Empreendedorismo",
    description:
      "Experiência sólida em gestão empresarial, trazendo visão estratégica para análise de dados.",
  },
  {
    icon: Shield,
    title: "Proteção de Dados",
    description:
      "Atuação no INSS com foco em proteção de informações sensíveis e conformidade com LGPD.",
  },
  {
    icon: TrendingUp,
    title: "Automação",
    description:
      "Desenvolvimento de soluções automatizadas para otimização de processos e relatórios.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizado Contínuo",
    description:
      "Constantemente atualizando conhecimentos em Data Science e novas tecnologias.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Sobre Mim
          </h2>

          <p className="text-muted-foreground mb-4">
            Minha jornada profissional começou no empreendedorismo, onde desenvolvi uma visão estratégica sobre como os dados impactam decisões.
          </p>

          <p className="text-muted-foreground mb-4">
            Hoje combino essa bagagem com habilidades técnicas em Python, SQL e Power BI.
          </p>

          <p className="text-muted-foreground">
            Atuo no INSS com foco em proteção de dados e LGPD.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="border p-4 rounded-xl">
              <item.icon className="mb-2 text-primary" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
