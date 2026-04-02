"use client";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Decifrando dados,
            <br />
            impulsionando decisões
          </h1>

          <p className="mt-4 text-muted-foreground">
            Especialista em Análise de Dados e Business Intelligence.
          </p>
        </div>

        <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center">
          EB
        </div>
      </div>
    </section>
  );
}