import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Charles",
  description:
    "Criador do BlackBox — Agente de Inteligência de Mercado. Desenvolvedor full-stack, artista digital e criador de experiências interativas.",
  url: "https://charlesideiaslab.com",
  knowsAbout: [
    "Inteligência de Mercado",
    "Diagnóstico de Negócios",
    "Three.js",
    "Desenvolvimento Web",
    "Design Visual",
  ],
  sameAs: ["https://github.com/charlesideiaslab"],
};

export const metadata: Metadata = {
  title: {
    default: "Charles Ideias Lab — Criatividade, Código e Inteligência de Mercado",
    template: "%s — Charles Ideias Lab",
  },
  description:
    "Charles Ideias Lab é o hub criativo de Charles — desenvolvedor, artista digital e criador do BlackBox. Diagnóstico de mercado, experimentos Three.js, design e tecnologia.",
  openGraph: {
    title: "Charles Ideias Lab",
    description:
      "Criatividade, código e inteligência de mercado — o hub central de Charles.",
    url: "https://charlesideiaslab.com",
    siteName: "Charles Ideias Lab",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="grid-bg" />
        <div className="bg-aura">
          <div className="orb" />
          <div className="orb" />
          <div className="orb" />
        </div>
        <nav className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center px-6 backdrop-blur-[80px] border-b border-[var(--border)]">
          <a href="/" className="flex items-center gap-2 no-underline">
            <span className="w-[18px] h-[18px] grid grid-cols-2 gap-[2px]">
              <span className="w-[8px] h-[8px] rounded-sm border border-[var(--accent)]" />
              <span className="w-[8px] h-[8px] rounded-sm" />
              <span className="w-[8px] h-[8px] rounded-sm" />
              <span className="w-[8px] h-[8px] rounded-sm border border-[var(--accent)]" />
            </span>
            <span
              className="text-sm font-mono font-bold tracking-wider uppercase"
              style={{
                background: "linear-gradient(90deg, var(--accent), #a78bfa, var(--accent))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "labelShimmer 4s linear infinite",
              }}
            >
              Charles Ideias Lab
            </span>
            <span
              className="w-[4px] h-[4px] rounded-full"
              style={{
                background: "var(--accent)",
                animation: "dotPulse 1.5s step-end infinite",
              }}
            />
          </a>
          <div className="ml-auto flex items-center gap-1">
            <a
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-md text-[var(--fg2)] hover:text-[var(--fg)] hover:bg-[var(--accent-dim)] transition-all no-underline"
            >
              Home
            </a>
            <a
              href="/sobre"
              className="font-mono text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-md text-[var(--fg2)] hover:text-[var(--fg)] hover:bg-[var(--accent-dim)] transition-all no-underline"
            >
              Sobre
            </a>
            <a
              href="/contato"
              className="font-mono text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-md text-[var(--fg2)] hover:text-[var(--fg)] hover:bg-[var(--accent-dim)] transition-all no-underline"
            >
              Contato
            </a>
          </div>
        </nav>
        <main className="flex-1 relative z-10 pt-[52px]">{children}</main>
        <footer className="relative z-10 border-t border-[var(--border)] py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-[var(--fg3)] uppercase tracking-[0.08em]">
              Charles Ideias Lab &copy; {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/charlesideiaslab"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[var(--fg3)] uppercase tracking-[0.08em] hover:text-[var(--accent)] transition-colors no-underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
