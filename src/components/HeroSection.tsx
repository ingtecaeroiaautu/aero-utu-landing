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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <Plane className="w-16 h-16 mx-auto text-primary animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ingeniería Técnica
            <span className="block text-primary">Aeronáutica</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            UTU Terciaria - Formación profesional de excelencia en el sector aeronáutico
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slide-up">
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <div className="text-white/80">Semestres</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slide-up">
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-white/80">Título Intermedio</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slide-up">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-white/80">Modalidad Presencial</div>
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
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
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