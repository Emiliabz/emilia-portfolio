"use client";

import { useLanguage } from "@/components/language-context";
const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Mail = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const Phone = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const FileText = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#3F2A1D] text-[#F5F1EA] py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
          {t("Vamos construir algo inteligente juntos?", "Let's build something smart together?")}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="https://www.linkedin.com/in/em%C3%ADlia-barboza-28b951362/?locale=en" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#4682A9] transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Emiliabz" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#D35400] transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="mailto:emiliabrbz@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-[#8C5A3C] transition-colors" aria-label="E-mail">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="https://wa.me/5511998481191" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#1da851] transition-all shadow-md active:scale-95">
            <Phone size={20} />
            {t("Falar por WhatsApp", "Chat on WhatsApp")}
          </a>
          
          <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#F5F1EA] text-[#3F2A1D] border border-transparent rounded-xl font-bold hover:bg-[#EAE2D6] transition-all shadow-md active:scale-95">
            <FileText size={20} />
            {t("Ver Currículo PDF", "View Resume PDF")}
          </a>
        </div>

        <div className="w-full h-px bg-white/10 my-4" />

        <p className="text-sm text-white/60 font-medium">
          {t("© 2026 Emília Barboza • Analista de Dados • Jundiaí, SP", "© 2026 Emília Barboza • Data Analyst • Jundiaí, SP")}
        </p>
      </div>
    </footer>
  );
}