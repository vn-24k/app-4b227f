"use client";

import React from "react";
import {
  SmoothCursor,
  ShimmerButton,
  TiltCard,
} from "./components";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 selection:bg-cyan-500/20 selection:text-cyan-200 font-sans antialiased relative overflow-x-hidden flex flex-col items-center justify-center p-6 sm:p-12">
      <SmoothCursor color="#3b82f6" glowColor="#3b82f655" />
      
      <div className="text-center max-w-3xl mb-12 relative z-10">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 inline-block px-3 py-1 rounded-full border border-neutral-700/60 bg-neutral-900/50 backdrop-blur-md" style={{ color: "#3b82f6" }}>
          Produção Verificada
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 uppercase">
          APP-4B227F
        </h1>
        <p className="text-sm sm:text-base font-medium tracking-wide text-neutral-400 mb-2">
          Plataforma Digital de Alta Performance
        </p>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
          Estrutura moderna componentizada, código limpo em React e TypeScript, construída para conversão.
        </p>
        <ShimmerButton className="mx-auto shadow-2xl">
          <span>Explorar Plataforma →</span>
        </ShimmerButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full relative z-10">
        <TiltCard
          title="Modularidade & Escalabilidade"
          description="Arquitetura limpa, tipos estritos e componentes reutilizáveis."
          badge="Diferencial 01"
        />
        <TiltCard
          title="Performance e Responsividade"
          description="Carregamento instantâneo e layout adaptativo para qualquer tela."
          badge="Diferencial 02"
        />
      </div>

      <footer className="mt-16 text-center text-xs text-neutral-500 relative z-10 border-t border-neutral-800/80 pt-6 w-full max-w-2xl">
        <p>© 2026 APP-4B227F • Todos os direitos reservados • Engenharia Proprietária</p>
      </footer>
    </div>
  );
}
