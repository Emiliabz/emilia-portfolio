"use client";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-10 text-[#4a3728]">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-[#8c5a3c]/20 rounded-xl bg-[#e6ddd3]/20 hover:bg-[#e6ddd3]/40 transition-colors">
            <h3 className="font-semibold text-[#4a3728]">CineData</h3>
            <p className="text-sm text-[#8c5a3c]">
              Análise com Python
            </p>
          </div>

          <div className="p-6 border border-[#8c5a3c]/20 rounded-xl bg-[#e6ddd3]/20 hover:bg-[#e6ddd3]/40 transition-colors">
            <h3 className="font-semibold text-[#4a3728]">Dashboard Power BI</h3>
            <p className="text-sm text-[#8c5a3c]">
              420k registros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}