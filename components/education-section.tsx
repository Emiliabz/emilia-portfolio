"use client";

import { useState } from "react";

type Tab = "graduacao" | "dados" | "gestao" | "programacao";

export function EducationSection() {
  const [tab, setTab] = useState<Tab>("graduacao");

  return (
    <section id="formacao" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center">
          Formação e Especializações
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button onClick={() => setTab("graduacao")}>Graduação</button>
          <button onClick={() => setTab("dados")}>Dados & BI</button>
          <button onClick={() => setTab("gestao")}>Gestão & Office</button>
          <button onClick={() => setTab("programacao")}>Programação</button>
        </div>

        {/* Conteúdo */}
        {tab === "graduacao" && (
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-muted-foreground">
              Estácio de Sá - 3º semestre (2027)
            </p>
          </div>
        )}

        {tab === "dados" && (
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-xl">Power BI</div>
            <div className="border p-4 rounded-xl">SQL</div>
            <div className="border p-4 rounded-xl">Python</div>
          </div>
        )}

        {tab === "gestao" && (
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-xl">Excel Avançado</div>
            <div className="border p-4 rounded-xl">LGPD</div>
            <div className="border p-4 rounded-xl">Ética</div>
          </div>
        )}

        {tab === "programacao" && (
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-xl">Pandas</div>
            <div className="border p-4 rounded-xl">NumPy</div>
            <div className="border p-4 rounded-xl">Data Science</div>
          </div>
        )}
      </div>
    </section>
  );
}