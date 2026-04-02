"use client";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-serif font-bold text-lg">Emília Barboza</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#formacao">Formação</a>
        </nav>
      </div>
    </header>
  );
}