import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, Users, Clock, Shield, Zap, X } from "lucide-react";
import { useState, useEffect } from "react";
import heroGuitar from "@/assets/hero-guitar.jpg";
import bonusChecklist from "@/assets/bonus-checklist.jpg";
import bonusPentatonic from "@/assets/bonus-pentatonic.jpg";
import bonusPlaylist from "@/assets/bonus-playlist.jpg";
import bonusStyleMap from "@/assets/bonus-style-map.jpg";
import bonusDiary from "@/assets/bonus-diary.jpg";
import iconFrustration from "@/assets/icon-frustration.jpg";
import iconRepetition from "@/assets/icon-repetition.jpg";
import iconTimeLost from "@/assets/icon-time-lost.jpg";
import iconMethod from "@/assets/icon-method.jpg";
import iconFastResults from "@/assets/icon-fast-results.jpg";
import iconPersonalStyle from "@/assets/icon-personal-style.jpg";
import sealSSL from "@/assets/seal-ssl.png";
import sealPayment from "@/assets/seal-payment.png";
import sealCertificate from "@/assets/seal-certificate.png";
import sealSecure from "@/assets/seal-secure.png";
import studentGuitar from "@/assets/student-guitar.jpg";

const CHECKOUT_URL = 'https://pay.cakto.com.br/tkgc23h_500047';
const AVATAR_COLORS = ['bg-amber-600', 'bg-orange-600', 'bg-yellow-700', 'bg-red-700', 'bg-purple-700', 'bg-blue-700'];

const pad = (n: number) => String(n).padStart(2, '0');

const GuitarLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [viewersCount, setViewersCount] = useState(47);

  const goToCheckout = () => window.open(CHECKOUT_URL, '_blank');

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Countdown timer — persistido via localStorage por 48h
  useEffect(() => {
    const KEY = 'guitar_offer_expiry_v3';
    let expiryStr = localStorage.getItem(KEY);
    if (!expiryStr || Date.now() > parseInt(expiryStr)) {
      const newExpiry = Date.now() + 47 * 3600000 + 59 * 60000 + 59 * 1000;
      localStorage.setItem(KEY, newExpiry.toString());
      expiryStr = newExpiry.toString();
    }
    const expiry = parseInt(expiryStr);
    const tick = () => {
      const r = expiry - Date.now();
      if (r <= 0) { setTimeLeft({ hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        hours: Math.floor(r / 3600000),
        minutes: Math.floor((r % 3600000) / 60000),
        seconds: Math.floor((r % 60000) / 1000),
      });
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  // Sticky CTA bar aparece após scroll de 700px
  useEffect(() => {
    const fn = () => setShowStickyBar(window.scrollY > 700);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Exit intent popup — dispara uma vez quando cursor sai pelo topo
  useEffect(() => {
    if (sessionStorage.getItem('exit_shown')) return;
    const fn = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setShowExitPopup(true);
        sessionStorage.setItem('exit_shown', '1');
      }
    };
    const t = setTimeout(() => document.addEventListener('mouseleave', fn), 8000);
    return () => { clearTimeout(t); document.removeEventListener('mouseleave', fn); };
  }, []);

  // Contador de visitantes animado
  useEffect(() => {
    const iv = setInterval(() => {
      setViewersCount(p => Math.max(35, Math.min(72, p + (Math.random() > 0.5 ? 1 : -1))));
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  const bonuses = [
    { title: "Checklist de Evolução no Improviso (30 Dias)", description: "Um guia passo a passo para acelerar sua evolução no improviso em apenas 30 dias", image: bonusChecklist },
    { title: "Mini Guia Visual da Pentatônica Menor (Am) em 5 Posições", description: "Domine todas as posições da pentatônica menor com guias visuais detalhados", image: bonusPentatonic },
    { title: "Playlist de Backing Tracks Temáticas", description: "Backing tracks cuidadosamente selecionadas para praticar diferentes estilos", image: bonusPlaylist },
    { title: "Mapa de Construção do Estilo Pessoal", description: "Crie um estilo musical que é só seu — e se destaque de verdade", image: bonusStyleMap },
    { title: "Diário Interativo de Improvisos", description: "Registre sua jornada, crie ideias originais e veja sua evolução acontecer dia após dia", image: bonusDiary },
  ];

  const testimonials = [
    { name: "Carlos Silva", location: "São Paulo, SP", text: "Em 3 meses consegui tocar solos que antes eram impossíveis. O método realmente funciona! Já estou tocando com uma banda local.", rating: 5, result: "Tocando em banda em 90 dias" },
    { name: "Ana Beatriz", location: "Belo Horizonte, MG", text: "Nunca imaginei que poderia improvisar com tanta facilidade. O curso mudou minha vida musical. Me sinto confiante para tocar em qualquer tom.", rating: 5, result: "Improvisando em 45 dias" },
    { name: "Roberto Santos", location: "Rio de Janeiro, RJ", text: "Método claro e objetivo. Saí do zero para tocar com banda em 6 meses! Minha família ficou impressionada na nossa reunião de Natal.", rating: 5, result: "Do zero à banda em 6 meses" },
    { name: "Marcos Oliveira", location: "Curitiba, PR", text: "Tentei aprender guitarra por 2 anos sozinho e não consegui. Em 4 semanas com esse método já estava tocando minhas músicas favoritas.", rating: 5, result: "Resultado em 4 semanas" },
    { name: "Fernanda Lima", location: "Porto Alegre, RS", text: "Sou professora e uso 20 minutos do meu almoço para praticar. Em 2 meses evoluí mais do que em 1 ano de aula particular.", rating: 5, result: "Evolução em tempo limitado" },
    { name: "Diego Ferreira", location: "Salvador, BA", text: "Achei que era tarde com 52 anos. Hoje, 4 meses depois, toco 'Hotel California' completa. Método sensacional!", rating: 5, result: "Aprendeu aos 52 anos" },
  ];

  const faqItems = [
    { question: "Preciso ter conhecimento prévio de música?", answer: "Não! O método foi desenvolvido para iniciantes completos. Começamos do absoluto zero e você vai evoluindo passo a passo até conseguir improvisar e tocar com desenvoltura." },
    { question: "Quanto tempo por dia preciso praticar?", answer: "Recomendamos apenas 20-30 minutos por dia. O método é focado em qualidade, não quantidade. Muitos alunos veem resultados já na primeira semana com essa dedicação." },
    { question: "Funciona para qualquer idade?", answer: "Sim! Temos alunos de 15 a 70 anos. A música não tem idade e nosso método se adapta ao seu ritmo de aprendizado, seja você jovem ou mais experiente." },
    { question: "E se eu não conseguir acompanhar?", answer: "O acesso é vitalício! Você pode assistir quantas vezes quiser, no seu ritmo. Além disso, temos uma comunidade de apoio e suporte direto comigo para tirar suas dúvidas." },
    { question: "Preciso comprar uma guitarra cara?", answer: "Não! Você pode começar com qualquer guitarra, mesmo uma mais simples. O importante é a técnica e o método, não o equipamento. Conforme evolui, naturalmente vai querer investir em melhores instrumentos." },
    { question: "Como funciona a garantia?", answer: "Simples: você tem 7 dias para testar tudo. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia." },
    { question: "Quando recebo o acesso após comprar?", answer: "Imediatamente! Após a confirmação do pagamento, você recebe um e-mail com seus dados de acesso. É acesso instantâneo, 24 horas por dia, 7 dias por semana, em qualquer dispositivo." },
  ];

  return (
    <div className={`min-h-screen bg-gradient-hero text-foreground relative ${showStickyBar ? 'pb-16 md:pb-14' : ''}`}>

      {/* ===== EXIT INTENT POPUP ===== */}
      {showExitPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="bg-[#0a0a0a] border-2 border-primary rounded-xl max-w-md w-full p-6 md:p-8 relative shadow-gold-intense">
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4">
              <div className="text-5xl">🎸</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Espera! Não Vai Embora Assim...
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Você está prestes a sair sem aproveitar a maior promoção que já fizemos.
              </p>
              <div className="bg-gradient-dark border border-primary rounded-lg p-4">
                <p className="text-xs text-muted-foreground line-through mb-1">De R$ 299,00</p>
                <p className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">R$ 19,90</p>
                <p className="text-xs text-primary font-semibold mt-2">🔥 92% de desconto • Expira em {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}</p>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="w-full text-base md:text-lg py-4 transform hover:scale-105 transition-all"
                onClick={() => { setShowExitPopup(false); goToCheckout(); }}
              >
                🔥 Quero Aproveitar Agora!
              </Button>
              <button
                onClick={() => setShowExitPopup(false)}
                className="text-xs text-muted-foreground hover:text-white underline block w-full"
              >
                Não, prefiro continuar pagando R$299 depois
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== STICKY BOTTOM CTA BAR ===== */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t-2 border-primary shadow-gold-intense">
          <div className="container mx-auto px-4 py-2 md:py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-muted-foreground line-through leading-none">R$ 299</p>
                  <p className="text-lg md:text-xl font-bold bg-gradient-gold bg-clip-text text-transparent leading-tight">R$ 19,90</p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs text-white/60 border-l border-border pl-4">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span>{viewersCount} pessoas vendo agora</span>
                </div>
              </div>
              <Button
                variant="hero"
                size="sm"
                className="text-sm md:text-base py-2 md:py-3 px-4 md:px-6 transform hover:scale-105 transition-all w-full sm:w-auto"
                onClick={goToCheckout}
              >
                🎸 Quero Começar Agora →
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Background Guitar Image */}
      <div
        className="fixed left-0 top-0 w-full md:w-1/2 h-full bg-cover bg-center md:bg-right bg-no-repeat opacity-20 md:opacity-25 z-0"
        style={{ backgroundImage: `url(${heroGuitar})` }}
      />
      <div className="fixed inset-0 bg-background/30 z-5" />

      <div className="relative z-20">

        {/* ===== URGENCY TOP BAR ===== */}
        <div className="bg-red-900/80 border-b border-red-700 py-2">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base text-white font-medium">
              🔥 <span className="font-bold text-yellow-300">OFERTA ESPECIAL</span> — Preço volta para R$299 em:{" "}
              <span className="font-mono font-bold text-yellow-300 bg-red-950/60 px-2 py-0.5 rounded">
                {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
              </span>
            </p>
          </div>
        </div>

        {/* ===== HEADER ===== */}
        <header className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex justify-center items-center">
            <img src="/lovable-uploads/25245b20-58d7-410d-95f1-1d50273379b0.png" alt="Músico Autodidata" className="h-16 md:h-20" />
          </div>
        </header>

        {/* ===== HERO ===== */}
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 md:space-y-8">

              {/* Mini social proof com avatares */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <div className="flex -space-x-2">
                  {['CS', 'AB', 'RS', 'MO', 'FL'].map((initials, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${AVATAR_COLORS[i]} flex items-center justify-center text-xs font-bold text-white border-2 border-background`}>
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  <span className="font-bold text-primary">500+ alunos</span> já transformaram sua música
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Domine a Guitarra do Zero
                </span>
                <br />
                <span className="text-white font-extrabold drop-shadow-md">
                  em 6 Semanas Usando Menos Teoria
                </span>
              </h2>

              <p className="text-lg md:text-xl text-white/90 px-2 drop-shadow-md font-medium">
                O método que já transformou mais de <strong>500 alunos</strong> — do zero à performance profissional — com <strong>apenas 20 minutos por dia</strong>, sem precisar saber ler partitura.
              </p>

              {/* Live viewers */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/70">{viewersCount} pessoas estão vendo essa página agora</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={goToCheckout}
                  className="text-lg md:text-xl py-4 md:py-6 px-6 md:px-8 w-full max-w-md transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-intense"
                >
                  🎸 Quero Dominar a Guitarra Agora!
                </Button>
                <div className="flex items-center gap-4 text-xs md:text-sm text-white/70 flex-wrap justify-center">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-400" /> Garantia de 7 dias</span>
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-yellow-400" /> Acesso imediato</span>
                  <span className="flex items-center gap-1">🔒 Pagamento seguro</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 pt-4">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow">500+</p>
                  <p className="text-xs md:text-sm text-white/80 drop-shadow">Alunos Transformados</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow">4.9★</p>
                  <p className="text-xs md:text-sm text-white/80 drop-shadow">Avaliação Média</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow">7 dias</p>
                  <p className="text-xs md:text-sm text-white/80 drop-shadow">Garantia Total</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow">20 min</p>
                  <p className="text-xs md:text-sm text-white/80 drop-shadow">Por Dia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROBLEMA ===== */}
        <section className="bg-secondary py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg px-2">
                Você se Identifica Com Alguma Dessas Situações?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="space-y-4">
                  <img src={iconFrustration} alt="Frustração Musical" className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
                  <h4 className="text-lg md:text-xl font-semibold text-white drop-shadow">Você Sente que Está Travado?</h4>
                  <p className="text-white/80 text-sm md:text-base drop-shadow">
                    Meses praticando e ainda preso aos mesmos acordes sem conseguir avançar?
                  </p>
                </div>
                <div className="space-y-4">
                  <img src={iconRepetition} alt="Repetição Sem Fim" className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
                  <h4 className="text-lg md:text-xl font-semibold text-white drop-shadow">Tudo Soa Igual?</h4>
                  <p className="text-white/80 text-sm md:text-base drop-shadow">
                    Toca as mesmas músicas há anos, sem conseguir criar nada novo ou improvisar?
                  </p>
                </div>
                <div className="space-y-4">
                  <img src={iconTimeLost} alt="Tempo Perdido" className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
                  <h4 className="text-lg md:text-xl font-semibold text-white drop-shadow">Estuda, Estuda... e Nada Muda?</h4>
                  <p className="text-white/80 text-sm md:text-base drop-shadow">
                    Assiste horas de vídeos no YouTube mas sente que não evolui de verdade?
                  </p>
                </div>
              </div>
              <div className="text-center mt-8 md:mt-12 p-4 md:p-6 bg-gradient-dark rounded-lg border border-primary shadow-gold-intense mx-2">
                <p className="text-lg md:text-xl font-semibold text-white drop-shadow">
                  Se você se identificou com alguma dessas situações...{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent font-bold block md:inline">
                    o método abaixo foi criado exatamente para você.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARA QUEM É (NOVO) ===== */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
                  Este Método é Para Você Se...{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent">Você Se Encaixa Aqui</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {[
                  "Quer aprender guitarra mas não tem tempo para horas de prática por dia",
                  "Já tentou outras formas de aprender e não conseguiu evoluir como queria",
                  "Quer improvisar e criar suas próprias músicas, não só copiar outros",
                  "Quer resultados rápidos sem precisar estudar teoria musical complexa",
                  "Tem mais de 30 anos e acha que é tarde demais para aprender",
                  "Quer impressionar amigos e família tocando de verdade",
                  "Está cansado de vídeos soltos no YouTube sem um caminho claro",
                  "Sonha em tocar em uma banda ou simplesmente se expressar musicalmente",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOLUÇÃO ===== */}
        <section className="bg-secondary py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                <span className="bg-gradient-gold bg-clip-text text-transparent">A Solução Definitiva</span>
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground px-2">
                Um método estruturado que leva você do básico ao avançado, desenvolvendo técnica, improviso e seu próprio estilo musical.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
                <Card className="bg-card border-border hover:shadow-gold hover:border-primary/50 transition-all">
                  <CardContent className="p-4 md:p-6 text-center space-y-3 md:space-y-4">
                    <img src={iconMethod} alt="Método Estruturado" className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
                    <h4 className="text-lg md:text-xl font-semibold">Método Estruturado</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Um caminho claro, sem perder tempo com vídeos soltos no YouTube. Evolua com um plano testado e validado por músicos reais.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:shadow-gold hover:border-primary/50 transition-all">
                  <CardContent className="p-4 md:p-6 text-center space-y-3 md:space-y-4">
                    <img src={iconFastResults} alt="Resultados Rápidos" className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
                    <h4 className="text-lg md:text-xl font-semibold">Resultados em Semanas</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Sinta sua evolução em semanas, não em anos. Surpreenda a si mesmo a cada nova técnica dominada.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:shadow-gold hover:border-primary/50 transition-all">
                  <CardContent className="p-4 md:p-6 text-center space-y-3 md:space-y-4">
                    <img src={iconPersonalStyle} alt="Estilo Próprio" className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
                    <h4 className="text-lg md:text-xl font-semibold">Seu Estilo Próprio</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Crie sua identidade musical e toque de um jeito que ninguém mais toca — só você.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8 md:mt-12 p-4 md:p-6 bg-gradient-dark rounded-lg border border-primary shadow-gold-intense mx-2 transform hover:scale-105 transition-all duration-300">
                <p className="text-lg md:text-xl font-semibold text-white drop-shadow">
                  <span className="bg-gradient-gold bg-clip-text text-transparent font-bold">
                    E tudo isso está disponível de forma simples, direta e com acesso imediato por apenas R$19,90...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VÍDEO DE VENDAS (NOVO) ===== */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
                Veja Como o Método{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent">Funciona na Prática</span>
              </h3>
              {/* Substitua este bloco pelo seu iframe do YouTube:
                  <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/SEU_VIDEO_ID"
                    title="Apresentação do Método" frameBorder="0" allowFullScreen />
              */}
              <div className="relative rounded-xl overflow-hidden border-2 border-primary shadow-gold-intense bg-black aspect-video flex items-center justify-center cursor-pointer group" onClick={goToCheckout}>
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-primary border-b-[14px] border-b-transparent ml-2" />
                  </div>
                  <p className="text-white/80 text-base font-medium">Assista ao vídeo de apresentação do método</p>
                  <p className="text-xs text-muted-foreground italic">[Insira aqui seu vídeo de vendas — troque este bloco pelo seu iframe do YouTube]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INSTRUTOR ===== */}
        <section className="bg-secondary py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
                  Quem Vai Te{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent">Ensinar</span>
                </h3>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 text-center">
                  <img
                    src={studentGuitar}
                    alt="Músico Autodidata"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-gold mx-auto"
                  />
                  <a
                    href="https://www.instagram.com/musico.autodidata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @musico.autodidata
                  </a>
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground">Músico Autodidata</h4>
                    <p className="text-primary font-medium">Guitarrista & Educador Musical</p>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    A maior comunidade de guitarristas autodidatas do Brasil. Já ajudamos mais de 500 alunos a saírem
                    do zero e desenvolverem seu próprio estilo musical — com um método simples, direto e sem
                    precisar de teoria complexa ou horas de prática por dia.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {["500+ Alunos Formados", "Comunidade Ativa", "Método Exclusivo"].map((badge, i) => (
                      <span key={i} className="text-xs bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-full font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://www.instagram.com/musico.autodidata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Siga no Instagram: @musico.autodidata
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BÔNUS ===== */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">Compre hoje e ganhe</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">5 Bônus Exclusivos</span>
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground px-2">
                  Além do método principal, você recebe <strong>5 bônus</strong> que irão acelerar ainda mais seus resultados — totalmente grátis!
                </p>
              </div>
              <div className="grid gap-4 md:gap-6">
                {bonuses.map((bonus, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                          <img src={bonus.image} alt={bonus.title} className="w-12 h-12 md:w-16 md:h-16 rounded-lg" />
                        </div>
                        <div className="space-y-2 w-full text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-2">
                            <span className="text-xs md:text-sm text-muted-foreground line-through">R$ 29,90</span>
                            <span className="text-xs md:text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                              GRÁTIS — R$ 0
                            </span>
                          </div>
                          <h4 className="text-lg md:text-xl font-semibold text-foreground">
                            Bônus {index + 1} – {bonus.title}
                          </h4>
                          <p className="text-muted-foreground text-sm md:text-base">{bonus.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8 md:mt-12 p-4 md:p-8 bg-gradient-dark rounded-lg border border-primary shadow-gold-intense mx-2">
                <h4 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">Valor Total dos Bônus</span>
                </h4>
                <p className="text-2xl md:text-3xl font-bold text-muted-foreground line-through mb-2">R$ 149,50</p>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">GRÁTIS — R$ 0</p>
                <p className="text-base md:text-lg text-muted-foreground">
                  E tudo isso, junto com o método principal, pode ser seu ainda hoje por apenas R$19,90
                </p>
              </div>
              <div className="text-center mt-6 md:mt-8 px-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-sm sm:text-base md:text-xl py-4 sm:py-5 md:py-6 px-3 md:px-8 w-full max-w-lg mx-auto h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[80px] leading-tight transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-intense"
                  onClick={goToCheckout}
                >
                  <div className="flex flex-col items-center">
                    <span className="block">🎸 Quero o Método Completo</span>
                    <span className="block text-sm sm:text-sm md:text-lg">+ 5 Bônus Exclusivos por R$19,90!</span>
                  </div>
                </Button>
                <p className="text-xs md:text-sm text-white/80 drop-shadow mt-2">
                  Acesso imediato • Garantia de 7 dias • Pagamento seguro
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== COUNTDOWN DEDICADO (NOVO) ===== */}
        <section className="bg-gradient-to-r from-red-950/60 to-red-900/40 py-8 md:py-12 border-y border-red-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">⏰ Esta Oferta Expira Em:</h3>
              <div className="flex items-center justify-center gap-2 md:gap-4">
                {[
                  { value: pad(timeLeft.hours), label: 'Horas' },
                  { value: pad(timeLeft.minutes), label: 'Minutos' },
                  { value: pad(timeLeft.seconds), label: 'Segundos' },
                ].map((unit, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4">
                    <div className="bg-black/60 border-2 border-red-500 rounded-lg p-3 md:p-4 min-w-[58px] md:min-w-[80px] text-center">
                      <p className="text-2xl md:text-4xl font-mono font-bold text-red-400">{unit.value}</p>
                      <p className="text-xs text-white/60 mt-1">{unit.label}</p>
                    </div>
                    {i < 2 && <span className="text-2xl md:text-3xl font-bold text-red-400">:</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base text-white/80">
                Após esse tempo, o preço volta para{" "}
                <span className="line-through text-white/50">R$ 299</span>
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={goToCheckout}
                className="text-base md:text-xl py-4 md:py-6 px-6 md:px-10 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                🔥 Garantir Por R$19,90 Agora!
              </Button>
            </div>
          </div>
        </section>

        {/* ===== DEPOIMENTOS (MELHORADOS) ===== */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
              <div className="text-center space-y-3 md:space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                  O Que Nossos{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent">Alunos Dizem</span>
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground px-2">
                  Resultados reais de pessoas reais que transformaram sua música
                </p>
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  <span className="ml-2 text-white font-semibold text-sm md:text-base">4.9/5 — Baseado em 500+ avaliações</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {testimonials.map((t, i) => (
                  <Card key={i} className="bg-card border-border hover:border-primary/40 transition-colors">
                    <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
                          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.location}</p>
                        </div>
                        <div className="flex gap-0.5 flex-shrink-0">
                          {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-primary text-primary" />)}
                        </div>
                      </div>
                      <p className="text-muted-foreground italic text-sm md:text-base">"{t.text}"</p>
                      <div className="pt-2 border-t border-border">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          ✅ {t.result}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== COMPARAÇÃO / URGÊNCIA ===== */}
        <section className="bg-gradient-to-r from-red-950/80 to-red-900/80 py-8 md:py-16 border-y-2 border-red-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-2">
                ⚠️ PARE DE PERDER TEMPO! ⚠️
              </h3>
              <div className="bg-black/50 border-2 border-red-500 rounded-lg p-4 md:p-8 shadow-2xl mx-2">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-400">
                  Você Vai Continuar Tocando as Mesmas 3 Músicas Pelos Próximos 5 Anos?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                  <div className="space-y-3 md:space-y-4">
                    <h5 className="text-lg md:text-xl font-semibold text-red-300">❌ Sem Este Método:</h5>
                    <ul className="text-left space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
                      <li>• Mais 5 anos tocando sempre a mesma coisa</li>
                      <li>• Frustração ao ver outros evoluindo</li>
                      <li>• Desistir de tocar por não evoluir</li>
                      <li>• Perder a paixão pela música</li>
                    </ul>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h5 className="text-lg md:text-xl font-semibold text-green-300">✅ Com Este Método:</h5>
                    <ul className="text-left space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
                      <li>• Tocar qualquer música em 30 dias</li>
                      <li>• Improvisar como um profissional</li>
                      <li>• Impressionar família e amigos</li>
                      <li>• Realizar seu sonho musical</li>
                    </ul>
                  </div>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 p-4 md:p-6 rounded-lg mb-4 md:mb-6 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={goToCheckout}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">
                    🔥 Garantir Minha Vaga por R$19,90 Agora! 🔥
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/90">
                    Oferta expira em {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== GARANTIA ===== */}
        <section className="bg-secondary py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Garantia Incondicional de 7 Dias
                </span>
              </h3>
              <div className="bg-card border-border rounded-lg p-4 md:p-8 shadow-gold mx-2">
                <img src="/lovable-uploads/612cfdf8-4a38-47d8-8a11-1ebbbc0d6d03.png" alt="Garantia" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4" />
                <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground">
                  Risco Zero Para Você
                </h4>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  Se em 7 dias você não estiver 100% satisfeito com sua evolução,
                  devolvemos todo seu investimento. Sem perguntas, sem burocracia.
                  Você não tem absolutamente nada a perder.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-400" /> Garantia total de 7 dias</span>
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-400" /> Sem perguntas</span>
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-400" /> 100% do dinheiro de volta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CHECKOUT (MELHORADO) ===== */}
        <section id="checkout" className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">
                    Comece Sua Transformação Hoje
                  </span>
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground px-2">
                  Não deixe para amanhã o que pode mudar sua vida musical hoje
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white/70">{viewersCount} pessoas estão considerando comprar agora</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* O que você recebe */}
                <Card className="bg-gradient-dark border-primary shadow-gold-intense order-2 md:order-1">
                  <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6">
                    <h4 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
                      <span className="bg-gradient-gold bg-clip-text text-transparent">O que você vai receber:</span>
                    </h4>
                    <div className="space-y-2 md:space-y-3">
                      {[
                        "Guia Completo Domine a Guitarra",
                        "Acesso vitalício ao conteúdo",
                        "Suporte direto com o instrutor",
                        "5 Bônus Exclusivos (valor R$ 149,50)",
                        "Garantia incondicional de 7 dias",
                        "Comunidade exclusiva de alunos",
                        "Atualizações futuras gratuitas",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 md:gap-3">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                          <span className="text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4 space-y-1">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Valor total sem desconto:</span>
                        <span className="line-through">R$ 448,50</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-bold">
                        <span className="text-green-400">Você economiza hoje:</span>
                        <span className="text-green-400">R$ 428,60 (95% off)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Preço e CTA */}
                <Card className="bg-gradient-dark border-primary shadow-gold-intense order-1 md:order-2">
                  <CardContent className="p-4 md:p-8 text-center space-y-4 md:space-y-6">
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xs md:text-sm text-muted-foreground line-through">De R$ 299,00</p>
                      <p className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                        R$ 19,90
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">ou 5x de R$ 3,98 sem juros</p>
                      <div className="bg-green-900/30 border border-green-700/50 rounded-lg px-3 py-2 mt-2">
                        <p className="text-green-400 text-sm font-bold">🔥 92% de desconto aplicado</p>
                      </div>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <Button
                        variant="cta"
                        size="lg"
                        className="w-full text-base md:text-xl py-4 md:py-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-intense"
                        onClick={goToCheckout}
                      >
                        🚀 Quero Começar Minha Transformação
                      </Button>
                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span>💳 Cartão</span>
                        <span>📱 Pix</span>
                        <span>🏦 Boleto</span>
                      </div>
                      <p className="text-xs text-muted-foreground">🔒 Pagamento 100% seguro • Acesso imediato</p>
                    </div>

                    <div className="border-t border-border pt-3 md:pt-4">
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-1">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 font-semibold">Oferta expira em:</span>
                      </div>
                      <p className="text-lg font-mono font-bold text-red-400">
                        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bg-secondary py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              <div className="text-center space-y-3 md:space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">Perguntas Frequentes</span>
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground px-2">
                  Tire suas dúvidas mais comuns sobre o método
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA final após FAQ */}
              <div className="text-center pt-4 space-y-4">
                <p className="text-muted-foreground">
                  Ainda tem dúvidas? Lembre-se: você tem <strong className="text-foreground">7 dias de garantia total</strong>, sem risco algum!
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={goToCheckout}
                  className="text-base md:text-xl py-4 md:py-6 px-6 md:px-10 transform hover:scale-105 transition-all"
                >
                  🎸 Sim, Quero Transformar Minha Música!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SELOS DE CONFIANÇA ===== */}
        <section className="bg-background py-6 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg md:text-2xl font-bold text-center mb-6 md:mb-8 text-foreground px-2">
                Compra 100% Segura e Confiável
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center">
                {[
                  { img: sealSSL, label: "SSL Certificado" },
                  { img: sealPayment, label: "Pagamento Seguro" },
                  { img: sealCertificate, label: "Certificado Digital" },
                  { img: sealSecure, label: "Site Seguro" },
                ].map((seal, i) => (
                  <div key={i} className="text-center space-y-1 md:space-y-2">
                    <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center mx-auto">
                      <img src={seal.img} alt={seal.label} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{seal.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-background border-t border-border py-8">
          <div className="container mx-auto px-4 text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              © 2026 Domine a Guitarra. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground/50">
              Este produto é um infoproduto digital. Resultados podem variar de acordo com o esforço e dedicação de cada aluno.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default GuitarLandingPage;
