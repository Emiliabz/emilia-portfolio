"use client";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Decifrando dados,
            <br />
            <span className="text-foreground">impulsionando decisões</span>
          </h1>

          <p className="mt-4 text-foreground/80 text-lg">
            Especialista em Análise de Dados e Business Intelligence.
          </p>
        </div>

        <div className="w-full h-64 bg-muted border border-secondary/30 rounded-xl flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
          EB
        </div>
      </div>
    </section>
  );
}