import { Button } from "@/components/ui/button";
import { Plane, Users, Award } from "lucide-react";
import aviationHero from "@/assets/aviation-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aviationHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <Plane className="w-16 h-16 mx-auto text-primary animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Ingeniería Técnica
            <span className="block text-accent drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Aeronáutica</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold">
            UTU Terciaria - Formación profesional de excelencia en el sector aeronáutico
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 animate-slide-up border border-white/30">
              <div className="text-3xl font-bold text-accent mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">8</div>
              <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Semestres</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 animate-slide-up border border-white/30">
              <Award className="w-8 h-8 text-accent mx-auto mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Título Intermedio</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 animate-slide-up border border-white/30">
              <Users className="w-8 h-8 text-accent mx-auto mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Modalidad Presencial</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("informacion")}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 aviation-shadow"
            >
              Ver Información
            </Button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 aviation-shadow"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;