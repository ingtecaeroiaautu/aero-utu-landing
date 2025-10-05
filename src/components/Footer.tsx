import { Plane, Mail, Phone, MapPin } from "lucide-react";
import aviationIcon from "@/assets/aviation-icon.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={aviationIcon} 
                alt="Aviation Icon" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">
                Ingenieria Tecnica Aeronáutica - UTU Terciaria
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Ingeniería Técnica Aeronáutica - UTU Terciaria. Formando profesionales de excelencia para la industria aeronáutica.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Información de contacto</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+598 094 780 157</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>aeronautica@utu.edu.uy</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>IAA, Cno. Melilla S/N, esq. Av. Lezica Montevideo, Uruguay</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sobre la carrera</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>• Duración: 8 semestres</div>
              <div>• Modalidad: Presencial</div>
              <div>• Título intermedio: Técnico Aeronáutico</div>
              <div>• Título final: Ingeniero Tecnológico Aeronáutico</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 UTU Terciaria - Ingeniería Técnica Aeronáutica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;