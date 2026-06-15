import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Charles — desenvolvedor full-stack, artista digital e criador do BlackBox. Stack, projetos, filosofia criativa e influências.",
  openGraph: {
    title: "Sobre — Charles Ideias Lab",
    description:
      "Conheça Charles: desenvolvedor, artista e criador do BlackBox.",
  },
};

export default function Sobre() {
  return (
    <div className="flex flex-col items-center px-6 py-20 sm:py-32">
      <article className="max-w-3xl w-full flex flex-col gap-8">
        <span className="badge">Sobre</span>
        <h1 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.1] tracking-[-0.02em]">
          Charles
        </h1>
        <p className="text-[var(--fg2)] text-[clamp(15px,2vw,18px)] leading-relaxed font-light">
          Desenvolvedor full-stack, artista digital e criador do BlackBox —
          um agente de inteligência de mercado que transforma dados brutos em
          diagnósticos visuais completos.
        </p>

        <div className="card flex flex-col gap-4 mt-4">
          <h2 className="font-semibold text-base">Stack & Ferramentas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              ["Frontend", "React, Next.js, TypeScript, Tailwind CSS"],
              ["3D & WebGL", "Three.js, React Three Fiber, WebGPU"],
              ["Backend", "Node.js, Python, PostgreSQL"],
              ["Infra", "GitHub Pages, Cloudflare, Vercel"],
              ["Design", "Figma, Lucide, glassmorphism, neon"],
              ["Física", "Matter.js, CANNON.js"],
            ].map(([area, items]) => (
              <div key={area} className="flex flex-col gap-1">
                <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
                  {area}
                </span>
                <span className="text-[13px] text-[var(--fg2)] font-light">
                  {items}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card flex flex-col gap-4">
          <h2 className="font-semibold text-base">Projetos</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-mono text-[12px] font-semibold tracking-wider">
                BlackBox
              </h3>
              <p className="text-[13px] text-[var(--fg2)] font-light mt-1">
                Agente de inteligência de mercado. Diagnóstico completo de
                negócios, concorrência, bairros e personas. Landing page, demo
                interativa e briefing de ativação disponíveis em{" "}
                <a
                  href="https://agenteblackbox.qzz.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  agenteblackbox.qzz.io
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[12px] font-semibold tracking-wider">
                Glow-Rider
              </h3>
              <p className="text-[13px] text-[var(--fg2)] font-light mt-1">
                Pinball neon com áudio-reatividade via Web Audio API, Three.js
                e Matter.js. Experimento pessoal de física e estética retrô-futurista.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[12px] font-semibold tracking-wider">
                NEON ARCHIVE
              </h3>
              <p className="text-[13px] text-[var(--fg2)] font-light mt-1">
                Gerenciador de letras e forja de lyrcs — ferramentas para
                catalogar e criar letras de música com estética neon.
              </p>
            </div>
          </div>
        </div>

        <div className="card flex flex-col gap-4">
          <h2 className="font-semibold text-base">Filosofia Criativa</h2>
          <div className="flex flex-col gap-3">
            <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
              Nostálgico sem ser piegas. Profundo sem ser pretensioso. Acredito
              que a melhor tecnologia é invisível — ela serve à experiência, não
              chama atenção para si mesma.
            </p>
            <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
              Minha estética é noturna: neon sobre preto, glow no escuro, o
              brilho antes do amanhecer. Faróis, florestas ao anoitecer, trens,
              verões que terminam. O silêncio também é linguagem — nem tudo
              precisa ser preenchido.
            </p>
            <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
              Cada projeto que construo carrega um pedaço das obras que me
              marcaram: Conta Comigo, The Sandlot, Missa da Meia-Noite,
              Interstellar, Jason Molina. O que consumo vira o que crio.
            </p>
          </div>
        </div>

        <div className="card flex flex-col gap-4">
          <h2 className="font-semibold text-base">Influências</h2>
          <p className="text-[13px] text-[var(--fg2)] font-light">
            Cinema, séries, animes, jogos, música e literatura que formaram meu
            olhar. Documentadas no{" "}
            <a
              href="https://github.com/charlesideiaslab/oraculo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              ORÁCULO
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
