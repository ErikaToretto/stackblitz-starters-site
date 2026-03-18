import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0B0E14] text-[#E2E8F0] min-h-screen p-6">
      <Navbar />
<div className="mb-10" />

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Transformo dados em decisões que aumentam performance de marketing
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl">
          Data Marketing | Python | SQL | Power BI | Branding estratégico
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <span className="bg-[#189CFF] px-3 py-1 rounded">Python</span>
          <span className="bg-[#189CFF] px-3 py-1 rounded">SQL</span>
          <span className="bg-[#FF7518] px-3 py-1 rounded">Marketing</span>
          <span className="bg-[#239B56] px-3 py-1 rounded">Analytics</span>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Projetos em Destaque</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-[#1f2937] p-5 rounded hover:border-[#189CFF] transition">
            <h3 className="text-xl font-semibold">E-commerce Growth</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Análise de cohort para aumento de LTV e retenção
            </p>
          </div>

          <div className="border border-[#1f2937] p-5 rounded hover:border-[#FF7518] transition">
            <h3 className="text-xl font-semibold">Meta Ads Performance</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Otimização de campanhas baseada em dados
            </p>
          </div>

          <div className="border border-[#1f2937] p-5 rounded hover:border-[#239B56] transition">
            <h3 className="text-xl font-semibold">Dashboard BI</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Storytelling com dados para tomada de decisão
            </p>
          </div>

        </div>
      </section>

      {/* THINKING / LOGBOOK */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Thinking / Logbook</h2>

        <div className="space-y-4">
          <div className="border border-[#1f2937] p-4 rounded">
            <p className="text-sm text-gray-500">18.MAR.2026</p>
            <h3 className="text-lg">Como um erro em SQL mudou minha análise</h3>
          </div>

          <div className="border border-[#1f2937] p-4 rounded">
            <p className="text-sm text-gray-500">15.MAR.2026</p>
            <h3 className="text-lg">Insights de dados aplicados ao marketing</h3>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-semibold">
          Quer ver mais ou trabalhar comigo?
        </h2>

        <button className="mt-6 bg-[#FF7518] px-6 py-3 rounded text-white hover:opacity-80">
          Entrar em contato
        </button>
      </section>

    </main>
  );
}