import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, Play, Check, CircleX, Gift, Star, User, ShieldCheck, ChevronDown } from "lucide-react";
import rafaelaAsset from "@/assets/rafaela.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+90 Dinâmicas da Copa do Mundo para Professores" },
      {
        name: "description",
        content: "+90 dinâmicas prontas que transformam a Copa do Mundo em aulas inesquecíveis para qualquer turma.",
      },
      { property: "og:title", content: "+90 Dinâmicas da Copa do Mundo" },
      {
        property: "og:description",
        content: "Dinâmicas prontas, alinhadas à BNCC, para engajar Fundamental II e Ensino Médio.",
      },
    ],
  }),
  component: Index,
});

const ASSET_BASE = "https://pixel-perfect-clone-28570.lovable.app/__l5e/assets-v1";

const bonuses = [
  {
    img: `${ASSET_BASE}/ab9d2483-8b0f-42e0-88a5-a3b7baef5195/bonus-craques-da-leitura.png`,
    title: "Craques da Leitura — Álbum de Figurinhas dos Alunos",
    desc: "Cada aluno cola a própria figurinha em um álbum exclusivo da Copa e aprende sobre os países participantes enquanto brinca.",
    price: "R$47",
    highlight: true,
  },
  {
    img: `${ASSET_BASE}/b79b05b5-d801-4363-8294-949f1c78a5a2/bonus-planejamento-copa.png`,
    title: "Planejamento Copa — Cronograma de Aulas Temáticas",
    desc: "Calendário pronto para encaixar as dinâmicas da Copa no planejamento escolar do dia do jogo até o fim do semestre.",
    price: "R$27",
  },
  {
    img: `${ASSET_BASE}/15b190f2-60e7-4642-9628-abea89624a61/bonus-craque-da-turma.png`,
    title: "Craque da Turma — Sistema de Pontuação e Ranking",
    desc: "Painel de ranking estilo Copa — alunos ganham pontos ao participar das dinâmicas e competem de forma saudável.",
    price: "R$37",
  },
  {
    img: `${ASSET_BASE}/12e7535f-42b8-4df0-ba42-918b21cfda72/bonus-narrador-da-copa.png`,
    title: "Narrador da Copa — Dinâmica de Oratória e Comunicação",
    desc: "Atividade onde os alunos narram lances históricos e apresentam a Copa como repórteres, desenvolvendo oratória e autoconfiança.",
    price: "R$47",
  },
  {
    img: `${ASSET_BASE}/e9f221e0-c412-4310-9d57-e18420cdff6a/bonus-atualizacoes-mensais.png`,
    title: "Atualizações Mensais — Novos Temas e Atividades Todo Mês",
    desc: "Todo mês você recebe um pacote novo com atividades temáticas prontas e materiais para usar direto em sala de aula.",
    price: "R$97/ano",
  },
];

const benefits = [
  "Engaja a Turma com o Clima da Copa",
  "Conecta o Futebol com Aprendizado Real",
  "Para Fundamental II e Ensino Médio",
  "Alinhadas à BNCC e Interdisciplinares",
];

const problems = [
  "Sente que perde a turma quando começa o clima de jogo",
  "Quer aproveitar a Copa mas não sabe por onde começar",
  "Acha tudo muito teórico e desligado da realidade dos alunos",
  "Tem dificuldade em integrar o futebol ao conteúdo da matéria",
  "Sai da sala sentindo que poderia ter sido muito mais",
];

const basicFeatures = [
  "55 Dinâmicas com Tema da Copa",
  "Para Fundamental II e Ensino Médio",
  "Acesso digital imediato",
  "Entrega Imediata",
  "Materiais 100% Baixáveis",
  "Suporte 24h",
  "Garantia de 14 dias",
];

const completeFeatures = [
  "Para Fundamental II e Ensino Médio",
  "Alinhado às diretrizes da BNCC",
  "Entrega Imediata",
  "Materiais 100% Baixáveis",
  "Suporte 24h",
  "Garantia de 14 dias",
];

const faqs = [
  {
    q: "Para quais séries serve?",
    a: "O material é adaptável para turmas do fundamental 2 ano do Ensino Fundamental até o 3º ano do Ensino Médio.",
  },
  {
    q: "Funciona em escola pública e privada?",
    a: "Sim! As dinâmicas foram pensadas para funcionar com poucos recursos (escola pública) ou com recursos tecnológicos (escola privada).",
  },
  {
    q: "É digital ou físico?",
    a: "O material é 100% digital são projetos salvos no canva editáveis e PDFs prontos para ser impressos, com entrega imediata via WhastApp e\u00a0 e-mail.",
  },
  {
    q: "Posso usar em mais de uma turma?",
    a: "Com certeza! Você tem licença de uso pessoal para aplicar em todas as suas turmas.",
  },
  {
    q: "As dinâmicas estão alinhadas à BNCC e ao Novo Ensino Médio?",
    a: "Sim, cobrem os itinerários formativos e competências da BNCC, integrando o tema da Copa do Mundo de forma interdisciplinar.",
  },
  {
    q: "Preciso de materiais especiais para aplicar?",
    a: "Não. A maioria usa apenas papel, caneta e o quadro da sala de aula.",
  },
];

const socialProofImages = [
  "https://i.imgur.com/lvbYyBo.png",
  "https://i.imgur.com/MZXPUIJ.png",
  "https://i.imgur.com/1ziwqMb.png",
  "https://i.imgur.com/vQluWA2.png",
  "https://i.imgur.com/QDw8l48.png",
  "https://i.imgur.com/vc533Pg.png",
  "https://i.imgur.com/rO65l3b.png",
];

const BUY_URL = "https://pay.wiapy.com/S047ajDjxY";

const scrollToPricing = () => {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const goToCheckout = () => {
  window.location.href = BUY_URL;
};

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <div className="font-sans text-gray-800 bg-[#F8FAFC]">
        {/* Top bar */}
        <div
          className="text-gray-900 py-3 sticky top-0 z-50 shadow-lg border-b border-yellow-500"
          style={{ backgroundColor: "rgb(255, 223, 0)" }}
        >
          <div className="container mx-auto px-4 flex justify-center items-center gap-3">
            <span className="text-2xl animate-bounce">⚽</span>
            <div className="flex flex-col items-center leading-none">
              <span className="text-xs sm:text-sm font-black uppercase opacity-90 tracking-wide">
                Oferta Esquenta Copa
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wide">Expira em:</span>
            </div>
            <div className="flex items-center gap-1 font-black text-xl sm:text-2xl">
              <div className="bg-white text-[#DC2626] px-2 py-0.5 rounded shadow-sm leading-none">06</div>
              <div className="text-gray-900 pb-1">:</div>
              <div className="bg-white text-[#DC2626] px-2 py-0.5 rounded shadow-sm leading-none">59</div>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white pt-10 pb-12 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl leading-[1.1] font-black text-gray-900 mb-8 tracking-tight">
              <span style={{ color: "#009C3B" }}>+90 Dinâmicas</span> que Transformam a <br />
              <span style={{ color: "#009C3B" }}>Copa do Mundo</span> em Aulas <br />
              Inesquecíveis para <span style={{ color: "#002776" }}>Qualquer Turma</span>
            </h1>
            <div className="flex flex-col items-center w-full">
              <button
                className="text-white px-8 py-3 rounded-full font-bold text-base sm:text-lg flex items-center justify-center mb-8 shadow-lg transition-all active:scale-95 w-auto border-b-4 active:border-b-0 active:translate-y-1 animate-pulse hover:animate-none"
                style={{ backgroundColor: "#009C3B", borderBottomColor: "#007A2E" }}
              >
                👇 Veja esse vídeo! <ArrowDown className="ml-2" size={20} />
              </button>
              <div className="w-full max-w-[340px] mx-auto mb-8">
                <div className="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-900 group">
                  <div
                    className="absolute inset-0 cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #002776, #000)" }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
                      <div className="relative mb-6">
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{ backgroundColor: "#FFDF00" }}
                        />
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 duration-300"
                          style={{
                            backgroundColor: "#009C3B",
                            boxShadow: "0 0 30px #FFDF00",
                          }}
                        >
                          <Play className="text-white ml-2 fill-white" size={40} />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-black text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight flex flex-col items-center gap-1">
                          <span className="text-3xl mb-1">🏆</span>
                          <span>
                            Clique aqui para assistir
                            <br />o vídeo!
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits + CTA */}
        <section className="bg-white pb-14 px-6">
          <div className="max-w-lg mx-auto space-y-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="text-white py-3.5 px-6 rounded-full font-bold text-base sm:text-lg flex items-center shadow-md w-full max-w-md mx-auto leading-tight"
                style={{ backgroundColor: "#009C3B" }}
              >
                <div className="bg-white/20 rounded p-1 mr-4 flex-shrink-0">
                  <Check size={18} strokeWidth={4} />
                </div>
                <span className="flex-1 text-center">{b}</span>
              </div>
            ))}
          </div>
          <div className="max-w-md mx-auto mt-12 text-center">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Aproveite o maior evento do planeta para transformar suas aulas em experiências que os alunos{" "}
              <strong style={{ color: "#009C3B" }}>vibram e lembram</strong> — sem passar horas planejando do zero.
            </p>
            <button
              onClick={scrollToPricing}
              className="w-full text-white font-black py-4 px-4 rounded-xl active:shadow-none active:translate-y-[4px] transition-all text-center uppercase tracking-wide flex flex-col items-center justify-center animate-pulse hover:animate-none"
              style={{ backgroundColor: "#009C3B", boxShadow: "0 4px 0 #007A2E" }}
            >
              <span className="text-lg sm:text-2xl drop-shadow-sm leading-tight">QUERO MINHAS DINÂMICAS DA COPA</span>
            </button>
          </div>
        </section>

        {/* Problem */}
        <section className="py-14 px-4 bg-[#F8FAFC]">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              O Problema <span style={{ color: "#009C3B" }}>NÃO</span> é Você...
            </h2>
            <p className="text-gray-600 mb-8 text-lg">Se Você:</p>
            <div className="space-y-4">
              {problems.map((p) => (
                <div
                  key={p}
                  className="bg-[#FEE2E2] border-2 border-red-100 text-gray-800 p-5 rounded-2xl flex items-center text-left shadow-sm"
                >
                  <div className="bg-white/60 rounded-full p-2 mr-4 flex-shrink-0">
                    <CircleX className="text-[#EF4444]" size={24} />
                  </div>
                  <span className="font-bold text-base sm:text-lg leading-snug">{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Respira.</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Com <strong style={{ color: "#009C3B" }}>DINÂMICAS DA COPA PRONTAS</strong> você vai fazer{" "}
                <strong style={{ color: "#009C3B" }}>qualquer turma vibrar, participar e aprender de verdade</strong>{" "}
                com o clima da Seleção Brasileira,{" "}
                <strong style={{ color: "#009C3B" }}>sem perder o controle da sala</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-[#DC2626] text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider shadow-md inline-block mb-4">
                Somente hoje no pacote completo
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 flex items-center justify-center gap-3">
                <Gift size={36} style={{ color: "#FFDF00" }} />
                BÔNUS DA COPA
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {bonuses.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all shadow-xl"
                  style={{ border: b.highlight ? "2px solid #FFD700" : "2px solid #E5E7EB" }}
                >
                  <img src={b.img} alt={b.title} loading="lazy" className="w-full h-auto object-contain" />
                  <div className="p-6 flex flex-col flex-1 text-center items-center">
                    <h3 className="font-black text-gray-900 text-lg leading-tight mb-3">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{b.desc}</p>
                    <span className="text-red-500 line-through decoration-red-400 font-black text-lg mb-4">
                      VALOR: {b.price}
                    </span>
                    <button
                      className="w-full mt-auto rounded-xl py-3 text-sm font-black text-white shadow-sm"
                      style={{ backgroundColor: "#22c55e" }}
                    >
                      GRÁTIS
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl px-6 py-6 text-center shadow-sm" style={{ backgroundColor: "#1D6F42" }}>
              <p className="text-xl sm:text-2xl font-black leading-snug text-white">
                Esses 5 bônus somam mais de <span style={{ color: "#FFD700" }}>R$255</span> — e você leva{" "}
                <span style={{ color: "#FFD700" }}>TUDO de graça</span> no Plano Completo.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-14 px-4 bg-[#F8FAFC]">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-4">
              Escolha Seu <span style={{ color: "#009C3B" }}>Plano</span>
            </h2>
            <div className="flex justify-center mb-10">
              <div className="bg-[#FEF2F2] text-[#DC2626] px-5 py-2 rounded-lg border border-red-200 text-xs sm:text-sm font-black uppercase flex items-center shadow-sm">
                ⚠️ Últimas unidades por esse valor promocional
              </div>
            </div>
            <div className="space-y-10">
              {/* Basic */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative">
                <h3 className="text-center text-xl font-black text-gray-900 uppercase mb-2">Plano Básico</h3>
                <p className="text-center text-gray-400 text-sm mb-6">Para quem quer testar o método</p>
                <div className="flex flex-col items-center mb-8">
                  <p className="text-gray-300 line-through text-sm">De R$ 97</p>
                  <div className="flex items-start text-gray-800 leading-none">
                    <span className="text-sm font-bold mt-2">R$</span>
                    <span className="text-6xl font-black mx-1 tracking-tighter">9</span>
                    <span className="text-2xl font-bold mt-2">,90</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-medium uppercase">pagamento único</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {basicFeatures.map((f) => (
                    <li key={f} className="flex items-center text-sm text-gray-600 font-medium">
                      <div className="rounded-full p-0.5 mr-3 flex-shrink-0" style={{ backgroundColor: "#009C3B" }}>
                        <Check className="text-white" size={12} strokeWidth={4} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={goToCheckout}
                  className="w-full border-2 font-black py-4 rounded-xl hover:bg-green-50 transition-colors uppercase text-base tracking-wide"
                  style={{ borderColor: "#009C3B", color: "#009C3B" }}
                >
                  Comprar Agora
                </button>
              </div>

              {/* Complete */}
              <div
                className="rounded-3xl border-2 shadow-2xl overflow-hidden relative transform scale-105 sm:scale-100 z-10"
                style={{ backgroundColor: "#F0FDF4", borderColor: "#009C3B" }}
              >
                <div
                  className="text-white text-center py-3 text-sm font-black uppercase flex items-center justify-center gap-2 tracking-wide"
                  style={{ backgroundColor: "#009C3B" }}
                >
                  <Star size={16} fill="currentColor" /> Mais Escolhido
                </div>
                <div className="p-8">
                  <h3 className="text-center text-2xl font-black uppercase mb-2" style={{ color: "#009C3B" }}>
                    Plano Completo
                  </h3>
                  <p className="text-center text-gray-400 text-sm mb-6">Para aproveitar a Copa ao máximo na sala</p>
                  <div className="flex flex-col items-center mb-6">
                    <p className="text-gray-400 line-through text-sm">De R$ 197</p>
                    <p className="text-sm text-gray-500 font-bold">Por apenas</p>
                    <div className="flex items-start leading-none my-2" style={{ color: "#009C3B" }}>
                      <span className="text-lg font-bold mt-2">R$</span>
                      <span className="text-7xl font-black mx-1 tracking-tighter">27</span>
                      <span className="text-3xl font-bold mt-2">,00</span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase">pagamento único</p>
                    <div className="mt-3 bg-[#DCFCE7] text-[#15803D] px-4 py-1.5 rounded-full text-xs font-black flex items-center border border-green-200 shadow-sm">
                      💰 Desconto no PIX
                    </div>
                  </div>
                  <div
                    className="w-full text-gray-900 font-black py-4 rounded-xl shadow-sm mb-8 uppercase text-base flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#FFDF00" }}
                  >
                    <Star size={20} fill="currentColor" /> Acesso Vitalício
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div
                        className="rounded-full p-0.5 mr-3 mt-1 flex-shrink-0"
                        style={{ backgroundColor: "#009C3B" }}
                      >
                        <Check className="text-white" size={14} strokeWidth={4} />
                      </div>
                      <span className="text-base font-black leading-tight" style={{ color: "#009C3B" }}>
                        +90 Dinâmicas da Copa do Mundo:
                      </span>
                    </div>
                    <ul className="pl-8 space-y-2 mb-4 border-l-2 border-gray-100 ml-2.5">
                      <li className="text-sm text-gray-600 font-medium">• História das Copas e do Hexa Brasileiro</li>
                      <li className="text-sm text-gray-600 font-medium">• Geografia dos Países e Sedes</li>
                      <li className="text-sm text-gray-600 font-medium">• Matemática com Estatísticas e Tabelas</li>
                      <li className="text-sm text-gray-600 font-medium">• Português com Crônicas de Futebol</li>
                      <li className="text-sm text-gray-600 font-medium">• Inglês com Vocabulário Esportivo</li>
                      <li className="text-sm text-gray-600 font-medium">• Educação Física e Trabalho em Equipe</li>
                    </ul>
                    <div className="flex items-start">
                      <div className="bg-[#d946ef] rounded-full p-0.5 mr-3 mt-1 flex-shrink-0">
                        <Gift className="text-white" size={14} />
                      </div>
                      <span className="text-base font-black text-[#d946ef] leading-tight">
                        Mais de R$255 em bônus GRÁTIS:
                      </span>
                    </div>
                    <ul className="pl-8 space-y-2 mb-4 border-l-2 border-gray-100 ml-2.5">
                      <li className="text-sm text-gray-600 font-medium">
                        • Bônus 1: Craques da Leitura — Álbum de Figurinhas dos Alunos
                      </li>
                      <li className="text-sm text-gray-600 font-medium">
                        • Bônus 2: Planejamento Copa — Cronograma de Aulas Temáticas
                      </li>
                      <li className="text-sm text-gray-600 font-medium">
                        • Bônus 3: Craque da Turma — Sistema de Pontuação e Ranking
                      </li>
                      <li className="text-sm text-gray-600 font-medium">
                        • Bônus 4: Narrador da Copa — Dinâmica de Oratória e Comunicação
                      </li>
                      <li className="text-sm text-gray-600 font-medium">
                        • Bônus 5: Atualizações Mensais — Novos Temas Todo Mês
                      </li>
                    </ul>
                    {completeFeatures.map((f) => (
                      <div key={f} className="flex items-center text-sm font-bold" style={{ color: "#009C3B" }}>
                        <div className="rounded-full p-0.5 mr-3 flex-shrink-0" style={{ backgroundColor: "#009C3B" }}>
                          <User className="text-white" size={12} />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={goToCheckout}
                    className="w-full text-white font-black py-4 px-4 rounded-xl active:shadow-none active:translate-y-[4px] transition-all text-center uppercase tracking-wide flex flex-col items-center justify-center animate-pulse hover:animate-none text-lg"
                    style={{ backgroundColor: "#009C3B", boxShadow: "0 4px 0 #007A2E" }}
                  >
                    <span>QUERO O PACOTE COMPLETO DA COPA</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 px-4 bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E0F2FE] text-[#0369A1] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm animate-bounce">
                👇 Mais de 1.350 professores de humanas aprovam
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-8 leading-tight">
              Veja o Que Professores Estão <br />
              Dizendo
            </h2>
            <div className="relative w-full group">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-8 px-4 no-scrollbar items-center" style={{ scrollbarWidth: 'none' }}>
                {Array.from({ length: 21 }).map((_, i) => {
                  const imgIndex = i % 7;
                  const rotate = i % 2 === 0 ? "rotate-1" : "-rotate-1";
                  return (
                    <div key={i} className="min-w-[280px] max-w-[320px] sm:min-w-[350px] sm:max-w-[400px] snap-center flex-shrink-0 transition-all duration-300">
                      <div className={`bg-white p-2 rounded-2xl shadow-xl border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 hover:z-10 ${rotate}`}>
                        <img className="w-full h-auto rounded-xl object-contain bg-gray-50 opacity-90 grayscale-[0.2]" alt={`Prova social ${imgIndex + 1}`} loading="lazy" src={socialProofImages[imgIndex]} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6 flex justify-center items-center font-medium animate-pulse">
              arraste para o lado
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down rotate-[-90deg] ml-2" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </p>
          </div>
        </section>

        {/* About */}
        <section className="bg-white py-16 px-4 text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">
              Conheça a <span style={{ color: "#009C3B" }}>Prof. Rafaela Tavares</span>
            </h2>
            <div
              className="w-40 h-40 mx-auto bg-gray-200 rounded-full border-[5px] p-1.5 mb-8 shadow-xl overflow-hidden relative"
              style={{ borderColor: "#009C3B" }}
            >
              <img
                src={rafaelaAsset.url}
                alt="Prof. Rafaela Tavares"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
              Professora há mais de 15 anos, sempre acreditou que o futebol podia ser muito mais do que entretenimento.
              Foi dentro de sala de aula, vendo seus alunos se transformarem durante a Copa, que surgiu a ideia de criar
              as Dinâmicas da Copa — um método que usa o maior evento esportivo do mundo para despertar o interesse de
              até os alunos mais difíceis de engajar.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div
                className="border-2 px-6 py-2.5 rounded-full text-sm sm:text-base font-bold flex items-center bg-green-50"
                style={{ borderColor: "#009C3B", color: "#009C3B" }}
              >
                <span className="mr-2 text-xl">🎓</span> 15+ anos de experiência
              </div>
              <div
                className="border-2 px-6 py-2.5 rounded-full text-sm sm:text-base font-bold flex items-center bg-green-50"
                style={{ borderColor: "#009C3B", color: "#009C3B" }}
              >
                <span className="mr-2 text-xl">🏅</span> Mais de 5.000 professores impactados
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-lg mx-auto text-center border-2 border-gray-100 rounded-[2rem] p-10 shadow-lg">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#FFFBEA", color: "#009C3B" }}
            >
              <ShieldCheck size={40} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Risco zero por 14 dias</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              Teste o material por 14 dias. Se não gostar ou não funcionar para suas turmas, devolvemos 100% do seu
              dinheiro.
            </p>
            <p className="text-sm text-gray-400 font-medium">Sem perguntas. Sem burocracia.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#F8FAFC]">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Perguntas <span style={{ color: "#009C3B" }}>Frequentes</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="border border-gray-100 rounded-xl bg-white mb-3 shadow-sm overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full px-6 py-5 text-left font-bold text-gray-800 text-base sm:text-lg flex justify-between items-center focus:outline-none"
                    >
                      <span>{f.q}</span>
                      <ChevronDown
                        size={24}
                        className="transition-transform duration-300"
                        style={{
                          color: "#009C3B",
                          transform: open ? "rotate(180deg)" : "rotate(0)",
                        }}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-gray-600 text-base leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-14">
              <button
                onClick={scrollToPricing}
                className="w-full text-white font-black py-4 px-4 rounded-xl active:shadow-none active:translate-y-[4px] transition-all text-center uppercase tracking-wide flex flex-col items-center justify-center animate-pulse hover:animate-none shadow-xl"
                style={{ backgroundColor: "#009C3B", boxShadow: "0 4px 0 #007A2E" }}
              >
                <span className="text-lg sm:text-2xl drop-shadow-sm leading-tight">QUERO MINHAS DINÂMICAS DA COPA</span>
              </button>
              <p className="text-center text-sm text-gray-400 mt-5 px-4 leading-normal font-medium">
                Clique abaixo e tenha acesso imediato às dinâmicas que estão fazendo a Copa do Mundo virar a melhor aula
                do ano.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
