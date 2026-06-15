import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Charles Ideias Lab. WhatsApp direto ou formulário.",
  openGraph: {
    title: "Contato — Charles Ideias Lab",
    description: "Fale com Charles.",
  },
};

export default function Contato() {
  return (
    <div className="flex flex-col items-center px-6 py-20 sm:py-32">
      <section className="max-w-lg w-full flex flex-col items-center gap-8">
        <span className="badge">Contato</span>
        <h1 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] text-center">
          Fale comigo
        </h1>
        <p className="text-[var(--fg2)] text-[15px] text-center leading-relaxed font-light">
          Quer saber mais sobre o BlackBox, bater um papo sobre um projeto ou
          só trocar uma ideia? Manda uma mensagem.
        </p>

        <a
          href="https://wa.me/5547999220690"
          target="_blank"
          rel="noopener noreferrer"
          className="btn accent w-full justify-center py-3"
        >
          WhatsApp
        </a>

        <div className="w-full card flex flex-col gap-4">
          <form
            action="https://formspree.io/f/..."
            method="POST"
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nome"
                className="font-mono text-[11px] text-[var(--fg3)] uppercase tracking-[0.08em]"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="w-full bg-[var(--bg2)] border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 text-sm text-[var(--fg)] font-light outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-mono text-[11px] text-[var(--fg3)] uppercase tracking-[0.08em]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[var(--bg2)] border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 text-sm text-[var(--fg)] font-light outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mensagem"
                className="font-mono text-[11px] text-[var(--fg3)] uppercase tracking-[0.08em]"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                className="w-full bg-[var(--bg2)] border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 text-sm text-[var(--fg)] font-light outline-none transition-colors focus:border-[var(--accent)] resize-none"
              />
            </div>
            <button type="submit" className="btn accent w-full justify-center py-3">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
