"use client";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">CineData</h3>
            <p className="text-sm text-muted-foreground">
              Análise com Python
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Dashboard Power BI</h3>
            <p className="text-sm text-muted-foreground">
              420k registros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}