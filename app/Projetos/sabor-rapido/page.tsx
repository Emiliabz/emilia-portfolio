import Link from "next/link";

export default function SaborRapidoPage() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] py-24 px-6 text-[#3F2A1D]">
      <div className="max-w-4xl mx-auto">
        {/* Navegação de Volta */ }
        <Link href="/#projetos" className="text-[#8C5A3C] hover:text-[#5A3F2C] transition-colors font-bold mb-10 inline-flex items-center gap-2">
          &larr; Voltar para o Portfólio
        </Link>

        {/* Cabeçalho do Projeto */ }
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3F2A1D] mb-4">Sabor Rápido</h1>
          <p className="text-lg text-[#3F2A1D]/80 max-w-3xl leading-relaxed">
            Sistema de gestão de pedidos desenvolvido em Python utilizando a biblioteca Tkinter e a metodologia RAD (Rapid Application Development). O foco deste projeto foi a entrega rápida e a construção de uma interface amigável.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          {/* Vídeo de Demonstração */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#3F2A1D] mb-6 border-l-4 border-[#8C5A3C] pl-4">
              Demonstração do Sistema
            </h2>
            <div className="bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-[2rem] p-4 md:p-6 shadow-sm">
              <video 
                controls 
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-xl bg-black outline-none shadow-inner"
                preload="auto"
              >
                <source src="/projeto-rad.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </section>

          {/* Visualização da Documentação */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#3F2A1D] mb-6 border-l-4 border-[#8C5A3C] pl-4">
              Documentação do Projeto
            </h2>
            <div className="bg-[#FDFBF9] border border-[#8C5A3C]/10 rounded-[2rem] p-4 md:p-6 shadow-sm">
              <img 
                src="/rad-sabor-rapido.png" 
                alt="Documentação RAD Sabor Rápido" 
                className="w-full h-auto rounded-xl shadow-inner"
              />
            </div>
          </section>

          {/* Code Snippet */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#3F2A1D] mb-6 border-l-4 border-[#8C5A3C] pl-4">
              Snippet de Código
            </h2>
            <div className="bg-[#1E1E1E] rounded-[2rem] p-6 md:p-8 shadow-sm overflow-x-auto">
              <pre className="text-[#D4D4D4] text-sm font-mono leading-relaxed whitespace-pre-wrap">
                <code>{`import tkinter as tk
from tkinter import ttk, messagebox

class SaborRapidoApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Sabor Rápido - Gestão de Pedidos")
        self.root.geometry("800x600")
        self.setup_ui()

    def setup_ui(self):
        title_label = tk.Label(self.root, text="Sabor Rápido", font=("Helvetica", 20, "bold"))
        title_label.pack(pady=15)`}</code>
              </pre>
            </div>
          </section>

          {/* Botão GitHub */}
          <section className="flex justify-center mt-8">
            <a href="https://github.com/Emiliabz/Projeto_Sabor_Rapido" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#3F2A1D] text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-md active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Acessar Código no GitHub
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}