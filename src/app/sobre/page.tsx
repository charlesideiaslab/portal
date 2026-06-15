import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Charles Martins — diretor de arte freelancer, autodidata, criador do Charles Ideias Lab. Nascido em 1986, há mais de 12 anos transformando ideias em projetos criativos.",
  openGraph: {
    title: "Sobre — Charles Ideias Lab",
    description:
      "Charles Martins: diretor de arte, criativo multimídia e fundador do Charles Ideias Lab.",
  },
};

export default function Sobre() {
  return (
    <div className="flex flex-col items-center px-6 py-20 sm:py-32">
      <article className="max-w-3xl w-full flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <span className="badge">Sobre</span>
          <h1 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Charles Martins
          </h1>
          <p className="text-[var(--fg2)] text-[clamp(15px,2vw,18px)] leading-relaxed font-light">
            Diretor de arte freelancer, autodidata, curioso profissional. Há mais
            de 12 anos criando soluções visuais, audiovisuais e criativas para
            empresas e pessoas que buscam algo além do óbvio.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card flex flex-col gap-2">
            <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
              Nascido em
            </span>
            <span className="text-[15px] font-light">1986</span>
          </div>
          <div className="card flex flex-col gap-2">
            <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
              Baseado em
            </span>
            <span className="text-[15px] font-light">Balneário Camboriú, SC</span>
          </div>
          <div className="card flex flex-col gap-2">
            <span className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.1em]">
              Desde
            </span>
            <span className="text-[15px] font-light">2013 — 12+ anos freelancer</span>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-base">A História</h2>
          <div className="flex flex-col gap-3">
            <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
              Cresci dando asas à imaginação. Desde cedo, desenhar, criar,
              montar e desmontar ideias sempre foi mais natural do que seguir
              roteiros prontos. Não fiz faculdade de design — aprendi fazendo,
              errando, refazendo. Autodidata desde o primeiro traço.
            </p>
            <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
              Comecei como editor de conteúdo na Videosoft em 2009, onde
              aprendi na prática o que significa entregar com qualidade dentro
              de prazos reais. Em 2013, dei o salto para o freelancer — e desde
              então atendo como diretor de arte sob o pseudônimo Charles Ideias.
            </p>
            <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
              Já são mais de 12 anos de estrada. Atendendo projetos que vão de
              identidade visual e produção audiovisual a consultoria criativa e
              direção de arte. Sem agência. Sem intermediário. Do cliente direto
              ao conceito final.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-base">O Que Eu Faço</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Direção de Arte", "Conceito, direção criativa e execução visual para marcas, campanhas e projetos autorais."],
              ["Produção Audiovisual", "Edição, pós-produção e conteúdo em vídeo — do roteiro ao produto final."],
              ["Identidade Visual", "Logotipos, paletas, tipografia e sistemas visuais completos para negócios de todos os portes."],
              ["Consultoria Criativa", "Diagnóstico visual, reposicionamento de marca e estratégia de comunicação."],
            ].map(([titulo, desc]) => (
              <div key={titulo} className="card flex flex-col gap-2">
                <span className="font-mono text-[12px] font-semibold tracking-wider">
                  {titulo}
                </span>
                <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-base">O Charles Ideias Lab</h2>
          <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
            O Charles Ideias Lab nasceu como um hub criativo — um lugar onde
            direção de arte, experimentos em tecnologia, inteligência de mercado
            e design se encontram. Não é uma agência. É um laboratório. Cada
            projeto é tratado como um experimento: com método, criatividade e
            atenção aos detalhes que fazem diferença.
          </p>
          <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
            O portfólio inclui desde o BlackBox (agente de inteligência de
            mercado) até experimentos com Three.js, motion design e soluções
            visuais para negócios locais. A premissa é simples: entregar mais
            do que o esperado, com o olhar de quem entende tanto de estética
            quanto de estratégia.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-base">Fora do Trabalho</h2>
          <p className="text-[13px] text-[var(--fg2)] font-light leading-relaxed">
            Nas horas vagas, o que sobra de criatividade vira arte pessoal.
            Experimentos visuais, música, exploração de ferramentas novas,
            escrita e tudo mais que alimenta o lado imaginativo. Cada projeto
            pessoal realimenta os projetos profissionais — e vice-versa.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-base">Redes & Contato</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contato"
              className="btn accent no-underline"
            >
              Entrar em Contato
            </Link>
            <a
              href="https://linkedin.com/in/charlesideias"
              target="_blank"
              rel="noopener noreferrer"
              className="btn no-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Charlesideias"
              target="_blank"
              rel="noopener noreferrer"
              className="btn no-underline"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/charlesideias"
              target="_blank"
              rel="noopener noreferrer"
              className="btn no-underline"
            >
              Instagram
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
