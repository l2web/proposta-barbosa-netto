import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-marketing.jpg';
import perfilLogo from '@/assets/perfil-logo.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/logoadv.jpg" 
          alt="Background Gervásio Oliveira e Advogados Associados" 
          className="w-full h-full object-cover opacity-80 blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40 delay-100" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50 delay-200" />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Coluna da esquerda: texto e botões */}
          <div className="flex-[0.9] text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Logo */}
            <div className="flex justify-center mb-8 fade-in-scale pt-8">
              <img 
                src="/img/logo-perfil-marketing-400-185-branco.webp"
                alt="Barbosa Netto Advogados"
                className="w-48 h-auto"
              />
            </div>

            {/* Main heading */}
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                <span className="text-gradient-gold gold-shimmer flex flex-col -space-y-2">
                  <span className="text-sm md:text-xl lg:text-2xl font-normal -mb-2">Proposta</span>
                  <span className="text-5xl md:text-7xl lg:text-8xl">Barbosa Netto Advogados</span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="fade-in-up delay-200">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Vamos escalar o marketing da sua empresa com <br/>
                <span className="text-primary font-semibold">Estratégias inovadoras</span> e <span className="text-primary font-semibold">resultados mensuráveis</span>
              </p>
            </div>

            {/* Badge */}
            <div className="fade-in-up delay-300">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
                <span className="text-primary font-medium">Barbosa Netto Advogados</span>
              </div>
            </div>

            {/* CTA Buttons removidos */}
          </div>
          {/* Coluna da direita: imagem logoadv.jpg */}
          <div className="flex-[1.2] flex justify-center items-center fade-in-scale">
            <div className="relative">
              <img
                src="/img/logoadv.jpg"
                alt="Gervásio Oliveira e Advogados Associados"
                className="w-[480px] max-w-full rounded-3xl shadow-2xl"
                style={{ boxShadow: '0 0 60px 0 rgba(255, 215, 0, 0.35), 0 8px 32px 0 rgba(0,0,0,0.25)' }}
              />
              {/* Sombra amarela extra */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(255, 215, 0, 0.25)' }} />
            </div>
          </div>
        </div>
      </div> {/* Fim do container principal */}

      {/* Scroll indicator - agora fora do container, mas ainda dentro da section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up delay-500 pt-8">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};