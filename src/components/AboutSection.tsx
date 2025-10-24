import { Award, Users, Globe, Sparkles, Camera, Video, Megaphone } from 'lucide-react';
import teamImage from '@/assets/team-work.jpg';

export const AboutSection = () => {
  const services = [
    { icon: Camera, title: "Produção Visual", desc: "Fotos e vídeos profissionais" },
    { icon: Megaphone, title: "Campanhas de Marketing", desc: "Tráfego e vendas" },
    { icon: Globe, title: "Presença Digital", desc: "Sites e mídias sociais" },
    { icon: Video, title: "Conteúdo", desc: "Posts, design e produção" }
  ];

  const stats = [
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: Users, number: "500+", label: "Clientes Atendidos" },
    { icon: Globe, number: "2", label: "Estados de Atuação" },
    { icon: Sparkles, number: "100%", label: "Foco em Resultados" }
  ];

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">SOBRE NÓS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold">Marketing & Tecnologia</span>
              <br />
              <span className="text-foreground">com foco em resultados</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com mais de <span className="text-primary font-semibold">15 anos de experiência</span>, 
              somos especialistas em marketing tradicional e digital. Oferecemos um serviço completo 
              de produção publicitária, desde a criação até a execução.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 animate-pulse" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Produção Completa:</span> Fotos, vídeos, 
                  postagens, campanhas de tráfego, criação de sites e gestão de mídias sociais
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 animate-pulse delay-100" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Alcance Nacional:</span> Atendemos clientes 
                  em Mato Grosso do Sul e no Brasil
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 animate-pulse delay-200" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Especialização:</span> Experiência do Usuário 
                  e Inteligência Artificial aplicada ao marketing
                </p>
              </div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="card-luxury p-4 text-center fade-in-scale" style={{animationDelay: `${index * 100}ms`}}>
                  <service.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                  <p className="text-xs text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image and stats */}
          <div className="fade-in-up delay-200">
            <div className="relative p-3 md:p-6">
              <img 
                src="/img/escritorio-perfil.png" 
                alt="Escritório Barbosa Netto Advogados" 
                className="w-full rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};