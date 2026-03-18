import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">

      <Navbar />

      {/* HERO */}

      <section className="relative w-full h-screen overflow-hidden">

     {/* FUNDO CORRETO */}
    <div className="absolute inset-0 -z-10">
     <img
        src="/images/siteportifolio.webp"
        className="w-full h-full object-cover"
      />

    {/* overlay ajustado */}
    <div className="absolute inset-0 bg-white/60"></div>
  </div>

  {/* CONTEÚDO COM RESPIRO */}
   <div className="max-w-6xl mx-auto px-6 h-full flex items-center">

    <div className="grid md:grid-cols-2 gap-10 items-center w-full">

      {/* TEXTO */}
      <div>
        <h1 className="text-5xl font-bold leading-tight">
          Transformo dados em decisões que geram
          <span className="text-[#F97316]"> crescimento</span>
        </h1>

        <p className="mt-4 text-[#0B0E14] max-w-md">
          Data Marketing focado em performance, análise e estratégia.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-[#F97316] text-white px-7 py-3 rounded-xl">
            Ver projetos
          </button>

          <button className="border border-gray-300 px-7 py-3 rounded-xl">
            Contato
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="relative h-[300px]">

        {/* CARD 1 */}
      <div className="absolute top-0 left-0 backdrop-blur-lg bg-white/70 p-4 rounded-xl shadow-lg border-l-4 border-[#FDBA74]">
        <p className="text-xs text-gray-500">SQL</p>
        <h3 className="text-sm font-semibold">Análise de retenção</h3>
      </div>

      {/* CARD 2 */}
      <div className="absolute top-20 right-0 backdrop-blur-lg bg-white/70 p-5 rounded-xl shadow-lg border-l-4 border-[#3B82F6]">
        <p className="text-xs text-gray-500">Insight</p>
        <h3 className="text-md font-semibold">
          +23% conversão
        </h3>
      </div>

      {/* CARD 3 */}
      <div className="absolute bottom-0 left-10 backdrop-blur-lg bg-white/70 p-4 rounded-xl shadow-lg border-l-4 border-[#22C55E]">
        <p className="text-xs text-gray-500">Growth</p>
        <h3 className="text-sm font-semibold">
          Otimização de funil
        </h3>
        {/* mantém seus cards */}
      </div>

    </div>
    
  </div>

</section>

  
  <section className="bg-[#0B0E14] text-white py-24 px-6">

  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold">
        Projetos & Pensamentos
      </h2>
      <p className="text-gray-400 mt-2">
        Aplicando dados para gerar impacto real em marketing
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* PROJETO */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#FDBA74] via-transparent to-[#86EFAC]">

        <div className="bg-[#0B0E14]/90 backdrop-blur-sm rounded-2xl p-6 h-full border border-[#1E293B] shadow-[0_0_25px_rgba(249,115,22,0.15)]">

          <p className="text-sm text-[#93C5FD] mb-2">
            Projeto em destaque
          </p>

          <h3 className="text-xl font-semibold">
            Otimização de campanhas de Ads
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Análise de dados para melhorar ROAS e reduzir custo por aquisição.
          </p>

          <div className="mt-6 flex gap-2 flex-wrap">
            <span className="bg-[#93C5FD]/10 text-[#93C5FD] px-3 py-1 rounded">
              SQL
            </span>
            <span className="bg-[#86EFAC]/10 text-[#86EFAC] px-3 py-1 rounded">
              Python
            </span>
            <span className="bg-[#FDBA74]/10 text-[#FDBA74] px-3 py-1 rounded">
              Marketing
            </span>
          </div>

          <button className="mt-6 border border-[#FDBA74] text-[#FDBA74] px-5 py-2 rounded-lg text-sm hover:bg-[#FDBA74]/10 transition">
            Ver projeto
          </button>

        </div>
      </div>

      {/* THINKING */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#93C5FD] via-transparent to-[#FDBA74]">

        <div className="bg-[#0B0E14]/90 backdrop-blur-sm rounded-2xl p-6 h-full border border-[#1E293B] shadow-[0_0_25px_rgba(59,130,246,0.15)]">

          <p className="text-sm text-[#86EFAC] mb-2">
            Thinking em destaque
          </p>

          <h3 className="text-xl font-semibold">
            Como dados mudam decisões de marketing
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Reflexões sobre como interpretar dados e evitar decisões erradas.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            18.MAR.2026
          </div>

          <button className="mt-6 border border-[#86EFAC] text-[#86EFAC] px-5 py-2 rounded-lg text-sm hover:bg-[#86EFAC]/10 transition">
            Ler artigo
          </button>

        </div>
      </div>

    </div>

  </div>

</section>

</section>
    </main>
  );
}