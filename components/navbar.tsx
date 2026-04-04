"use client";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#fdfaf7]/80 backdrop-blur-md border-b border-[#8c5a3c]/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-serif font-bold text-xl text-[#4a3728]">Emília Barboza</h1>

        <nav className="flex gap-6 text-sm font-medium text-[#4a3728]/80">
          <a href="#home" className="hover:text-[#8c5a3c] transition-colors">Home</a>
          <a href="#projetos" className="hover:text-[#8c5a3c] transition-colors">Projetos</a>
          <a href="#sobre" className="hover:text-[#8c5a3c] transition-colors">Sobre</a>
          <a href="#formacao" className="hover:text-[#8c5a3c] transition-colors">Formação</a>
        </nav>
      </div>
    </header>
  );
}