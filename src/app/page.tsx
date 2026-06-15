export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 py-20 sm:py-32">
      <section className="max-w-3xl w-full text-center flex flex-col items-center gap-8">
        <span className="badge">Criatividade · Código · Inteligência</span>
        <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.02em]">
          Charles Ideias Lab
        </h1>
        <p className="text-[var(--fg2)] text-[clamp(15px,2vw,18px)] max-w-xl leading-relaxed font-light">
          Desenvolvimento, design, inteligência de mercado e experimentos
          interativos. Tudo que sai da cabeça de Charles — um desenvolvedor que
          pensa como artista e cria como engenheiro.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <a href="/sobre" className="btn accent">
            Conhecer
          </a>
          <a href="/contato" className="btn">
            Contato
          </a>
        </div>
      </section>

      <section className="max-w-4xl w-full mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card flex flex-col gap-3">
          <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
            Produto
          </span>
          <h2 className="text-base font-semibold">BlackBox</h2>
          <p className="text-[13px] text-[var(--fg2)] leading-relaxed font-light">
            Agente de inteligência de mercado. Diagnósticos completos de
            negócios, concorrência, bairros, personas e entidades — com dados,
            gráficos, mapas e recomendações acionáveis.
          </p>
        </div>
        <div className="card flex flex-col gap-3">
          <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
            Criação
          </span>
          <h2 className="text-base font-semibold">Experimentos</h2>
          <p className="text-[13px] text-[var(--fg2)] leading-relaxed font-light">
            Three.js, WebGL, pinball neon, lyrc-archives, shaders, design
            generativo. Onde o código vira arte e a arte vira código.
          </p>
        </div>
        <div className="card flex flex-col gap-3">
          <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
            Diagnóstico
          </span>
          <h2 className="text-base font-semibold">Análise de Mercado</h2>
          <p className="text-[13px] text-[var(--fg2)] leading-relaxed font-light">
            Diagnóstico visual interativo de qualquer negócio, entidade ou
            persona. Dados reais, gráficos Chart.js, mapas Leaflet e plano de
            ação em 3 fases.
          </p>
        </div>
      </section>

      <section className="max-w-3xl w-full mt-24 text-center">
        <div className="card inline-flex flex-col items-center gap-4 px-8 py-6">
          <p className="text-[15px] text-[var(--fg2)] font-light leading-relaxed">
            &ldquo;Busco respostas que vão além da minha compreensão — e construo
            ferramentas para ajudar outros a encontrar as deles.&rdquo;
          </p>
          <span className="font-mono text-[11px] text-[var(--fg3)] uppercase tracking-[0.08em]">
            Charles
          </span>
        </div>
      </section>
    </div>
  );
}
