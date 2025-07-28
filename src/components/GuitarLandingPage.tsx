import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Gift, ArrowDown } from "lucide-react";
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
import iconGuarantee from "@/assets/icon-guarantee.jpg";
import sealSSL from "@/assets/seal-ssl.png";
import sealPayment from "@/assets/seal-payment.png";
import sealCertificate from "@/assets/seal-certificate.png";
import sealSecure from "@/assets/seal-secure.png";
import studentGuitar from "@/assets/student-guitar.jpg";
const GuitarLandingPage = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const bonuses = [{
    title: "Checklist de Evolução no Improviso (30 Dias)",
    description: "Um guia passo a passo para acelerar sua evolução no improviso em apenas 30 dias",
    image: bonusChecklist
  }, {
    title: "Mini Guia Visual da Pentatônica Menor (Am) em 5 Posições",
    description: "Domine todas as posições da pentatônica menor com guias visuais detalhados",
    image: bonusPentatonic
  }, {
    title: "Playlist de Backing Tracks Temáticas",
    description: "Backing tracks cuidadosamente selecionadas para praticar diferentes estilos",
    image: bonusPlaylist
  }, {
    title: "Mapa de Construção do Estilo Pessoal",
    description: "Crie um estilo musical que é só seu — e se destaque de verdade",
    image: bonusStyleMap
  }, {
    title: "Diário Interativo de Improvisos",
    description: "Registre sua jornada, crie ideias originais e veja sua evolução acontecer dia após dia",
    image: bonusDiary
  }];
  const testimonials = [{
    name: "Carlos Silva",
    text: "Em 3 meses consegui tocar solos que antes eram impossíveis para mim. O método realmente funciona!",
    rating: 5
  }, {
    name: "Ana Beatriz",
    text: "Nunca imaginei que poderia improvisar com tanta facilidade. O curso mudou minha vida musical.",
    rating: 5
  }, {
    name: "Roberto Santos",
    text: "Método claro e objetivo. Saí do zero para tocar com banda em 6 meses!",
    rating: 5
  }];
  return <div className="min-h-screen bg-gradient-hero text-foreground relative">
      {/* Background Guitar Image - Left Side */}
      <div className="fixed left-0 top-0 w-1/2 h-full bg-cover bg-right bg-no-repeat opacity-15 z-0" style={{
      backgroundImage: `url(${heroGuitar})`
    }}></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <img src="/lovable-uploads/25245b20-58d7-410d-95f1-1d50273379b0.png" alt="Músico Autodidata" className="h-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Domine a Guitarra
              </span>
              <br />
              <span className="text-foreground">
                em Tempo Recorde
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Descubra o método que já transformou mais de 500 alunos, do zero à performance profissional — com técnicas modernas e liberdade para improvisar no seu próprio estilo.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button variant="hero" size="lg" onClick={() => window.open('https://pay.cakto.com.br/tkgc23h_500047', '_blank')} className="text-xl py-6 px-8">
                Quero Dominar a Guitarra!
              </Button>
              <p className="text-sm text-muted-foreground">
                Garantia incondicional de 7 dias — teste sem risco!
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Alunos Transformados</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Avaliação Média</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">7 dias</p>
                <p className="text-sm text-muted-foreground">Garantia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold text-foreground">
              Cansado de Tocar Sempre as Mesmas Coisas?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <img src={iconFrustration} alt="Frustração Musical" className="w-16 h-16 mx-auto" />
                <h4 className="text-xl font-semibold">Você Sente que Está Travado?</h4>
                <p className="text-muted-foreground">
                  Meses praticando e ainda preso aos mesmos acordes?
                </p>
              </div>
              <div className="space-y-4">
                <img src={iconRepetition} alt="Repetição Sem Fim" className="w-16 h-16 mx-auto" />
                <h4 className="text-xl font-semibold">Tudo Soa Igual?</h4>
                <p className="text-muted-foreground">
                  Toca as mesmas músicas, sem conseguir criar nada novo?
                </p>
              </div>
              <div className="space-y-4">
                <img src={iconTimeLost} alt="Tempo Perdido" className="w-16 h-16 mx-auto" />
                <h4 className="text-xl font-semibold">Estuda, Estuda... e Nada Muda?</h4>
                <p className="text-muted-foreground">
                  Anos praticando, mas sem resultados reais?
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-12 p-6 bg-gradient-dark rounded-lg border border-primary shadow-gold">
              <p className="text-xl font-semibold text-foreground">
                Se você se identificou com alguma dessas situações... 
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  o método abaixo foi feito para você.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold text-foreground">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                A Solução Definitiva
              </span>
            </h3>
            <p className="text-xl text-muted-foreground">
              Um método estruturado que leva você do básico ao avançado, 
              desenvolvendo técnica, improviso e seu próprio estilo musical.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-card border-border hover:shadow-gold transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <img src={iconMethod} alt="Método Estruturado" className="w-16 h-16 mx-auto" />
                  <h4 className="text-xl font-semibold">Método Estruturado</h4>
                  <p className="text-muted-foreground">
                    Um caminho claro, sem perder tempo com vídeos soltos no YouTube. Evolua com um plano testado e validado por músicos reais.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:shadow-gold transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <img src={iconFastResults} alt="Resultados Rápidos" className="w-16 h-16 mx-auto" />
                  <h4 className="text-xl font-semibold">Resultados Rápidos</h4>
                  <p className="text-muted-foreground">Sinta sua evolução em semanas, não em anos. Surpreenda a si mesmo a cada novo acorde.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:shadow-gold transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <img src={iconPersonalStyle} alt="Estilo Próprio" className="w-16 h-16 mx-auto" />
                  <h4 className="text-xl font-semibold">Estilo Próprio</h4>
                  <p className="text-muted-foreground">Crie sua identidade musical e toque de um jeito que ninguém mais toca — só você.</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Mini CTA */}
            <div className="text-center mt-12 p-6 bg-gradient-dark rounded-lg border border-primary shadow-gold">
              <p className="text-xl font-semibold text-foreground">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  E tudo isso está disponível de forma simples, direta e com acesso imediato...
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold text-foreground">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  5 Bônus Exclusivos
                </span>
              </h3>
              <p className="text-xl text-muted-foreground">Além do método principal, você também recebe 5 bônus que irão acelerar ainda mais seus resultados — totalmente grátis!</p>
            </div>
            <div className="grid gap-6">
              {bonuses.map((bonus, index) => <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img src={bonus.image} alt={bonus.title} className="w-16 h-16 rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-muted-foreground line-through">
                            R$ 29,90
                          </span>
                          <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                            GRÁTIS - R$ 0
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">
                          Bônus {index + 1} – {bonus.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {bonus.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Soma dos Bônus */}
            <div className="text-center mt-12 p-8 bg-gradient-dark rounded-lg border border-primary shadow-gold-intense">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Valor Total dos Bônus
                </span>
              </h4>
              <p className="text-3xl font-bold text-muted-foreground line-through mb-2">
                R$149,50
              </p>
              <p className="text-4xl font-bold text-primary mb-4">
                GRÁTIS - R$ 0
              </p>
              <p className="text-lg text-muted-foreground">E tudo isso, junto com o método principal, pode ser seu ainda hoje…</p>
            </div>
            
            {/* CTA Bônus */}
            <div className="text-center mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-xl py-6 px-8"
                onClick={() => window.open('https://pay.cakto.com.br/tkgc23h_500047', '_blank')}
              >
                🎸 Quero o Método Completo + 5 Bônus Exclusivos!
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold text-foreground">
                O Que Nossos Alunos Dizem
              </h3>
              <p className="text-xl text-muted-foreground">
                Resultados reais de pessoas que transformaram sua música
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground">
                      – {testimonial.name}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Quebra de Objeção Impactante */}
      <section className="bg-gradient-to-r from-red-950/80 to-red-900/80 py-16 border-y-2 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-5xl font-bold text-white mb-6">
              ⚠️ PARE DE PERDER TEMPO! ⚠️
            </h3>
            <div className="bg-black/50 border-2 border-red-500 rounded-lg p-8 shadow-2xl">
              <h4 className="text-3xl font-bold mb-6 text-red-400">
                Você Vai Continuar Tocando as Mesmas 3 Músicas Pelos Próximos 5 Anos?
              </h4>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h5 className="text-xl font-semibold text-red-300">❌ Sem Este Método:</h5>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Mais 5 anos tocando sempre a mesma coisa</li>
                    <li>• Frustração ao ver outros evoluindo</li>
                    <li>• Desistir de tocar por não evoluir</li>
                    <li>• Perder a paixão pela música</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="text-xl font-semibold text-green-300">✅ Com Este Método:</h5>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Tocar qualquer música em 30 dias</li>
                    <li>• Improvisar como um profissional</li>
                    <li>• Impressionar família e amigos</li>
                    <li>• Realizar seu sonho musical</li>
                  </ul>
                </div>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg mb-6 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => window.open('https://pay.cakto.com.br/tkgc23h_500047', '_blank')}
              >
                <p className="text-2xl font-bold mb-2" style={{color: '#ffffff'}}>
                  🔥 ÚLTIMA CHANCE com 92% de Desconto! 🔥
                </p>
                <p className="text-lg" style={{color: '#ffffff'}}>
                  Esta oferta expira em breve e o preço volta para R$ 299
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold text-foreground">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Garantia de 7 Dias
              </span>
            </h3>
            <div className="bg-card border-border rounded-lg p-8 shadow-gold">
              <img src="/lovable-uploads/612cfdf8-4a38-47d8-8a11-1ebbbc0d6d03.png" alt="Garantia" className="w-20 h-20 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-4 text-foreground">
                Risco Zero Para Você
              </h4>
              <p className="text-lg text-muted-foreground">
                Se em 7 dias você não estiver 100% satisfeito com sua evolução, 
                devolvemos todo seu investimento. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <section id="checkout" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h3 className="text-4xl font-bold text-foreground">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Comece Sua Transformação Hoje
                </span>
              </h3>
              <p className="text-xl text-muted-foreground">
                Não deixe para amanhã o que pode mudar sua vida musical hoje
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-dark border-primary shadow-gold-intense order-2 md:order-1">
                <CardContent className="p-8 space-y-6">
                  <h4 className="text-3xl font-bold text-center mb-6">
                    <span className="bg-gradient-gold bg-clip-text text-transparent">
                      O que você vai receber:
                    </span>
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Curso Completo Domine a Guitarra</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Acesso vitalício ao conteúdo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Suporte direto com o instrutor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Comunidade exclusiva de alunos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>5 Bônus Exclusivos (valor R$ 149,50)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Garantia de 7 dias</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-dark border-primary shadow-gold-intense order-1 md:order-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground line-through">
                      De R$ 299
                    </p>
                    <p className="text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                      R$ 24,90
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ou 3x de R$ 8,30
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full text-xl py-6"
                      onClick={() => window.open('https://pay.cakto.com.br/tkgc23h_500047', '_blank')}
                    >
                      Quero Começar Minha Transformação
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Pagamento 100% seguro • Acesso imediato
                    </p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">
                      ⚡ Últimas vagas com desconto
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      Oferta válida por tempo limitado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Selos de Confiança */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Compra 100% Segura e Confiável
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 flex items-center justify-center mx-auto">
                  <img src={sealSSL} alt="SSL Certificado" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm text-muted-foreground">SSL Certificado</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-20 h-20 flex items-center justify-center mx-auto">
                  <img src={sealPayment} alt="Pagamento Seguro" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm text-muted-foreground">Pagamento Seguro</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-20 h-20 flex items-center justify-center mx-auto">
                  <img src={sealCertificate} alt="Certificado Digital" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm text-muted-foreground">Certificado Digital</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-20 h-20 flex items-center justify-center mx-auto">
                  <img src={sealSecure} alt="Site Seguro" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm text-muted-foreground">Site Seguro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Domine a Guitarra. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      </div>
    </div>;
};
export default GuitarLandingPage;