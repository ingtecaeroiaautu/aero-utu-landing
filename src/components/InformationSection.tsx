import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Clock, User, BookOpen } from "lucide-react";

const InformationSection = () => {
  const curriculum = [
    {
      semester: "Primer Semestre",
      subjects: [
        "Matemática I",
        "Física I", 
        "Ciencia de los Materiales",
        "Aerodinámica",
        "Inglés Técnico I",
        "Mantenimiento Aeronáutico",
        "Electrónica Analógica"
      ]
    },
    {
      semester: "Segundo Semestre",
      subjects: [
        "Matemática II",
        "Física II",
        "Inglés Técnico II", 
        "Estructuras y Técnicas de Reparación",
        "Sistemas Digitales",
        "Materiales de uso Aeronáutico",
        "Legislación Aeronáutica"
      ]
    },
    {
      semester: "Tercer Semestre",
      subjects: [
        "Sistemas de Calidad",
        "Control de Mantenimiento",
        "Aviónica I",
        "Sistemas Motopropulsores Recíproco",
        "Sistemas Motopropulsores Turbina",
        "SMS (Sistema de Gestión de la Seguridad Operacional)",
        "Sistemas de Aeronaves"
      ]
    },
    {
      semester: "Cuarto Semestre",
      subjects: [
        "Mecánica Estática Aeronáutica",
        "Normativas y Publicaciones Aeronáuticas",
        "Taller Mantenimiento Estructuras",
        "Taller Mantenimiento Aviónica",
        "Taller Mantenimiento Sistemas Aeronáuticos",
        "Taller Mantenimiento Motopropulsores Recíprocos",
        "Taller Mantenimiento Motopropulsores Turbina"
      ]
    },
    {
      semester: "Quinto Semestre",
      subjects: [
        "Diseño Informatizado",
        "Matemática III",
        "Construcciones Mecánicas y Aeronáuticas", 
        "Probabilidad y Estadística",
        "Comportamiento de las Estructuras Aeronáuticas",
        "Aviónica II"
      ]
    },
    {
      semester: "Sexto Semestre",
      subjects: [
        "Dinámica del Vuelo",
        "Gestión de Empresas Aeronáuticas",
        "Sistema de Telecomunicaciones Aeronáuticas",
        "Estructuras Aeronáuticas",
        "Logística Aeronáutica",
        "Optativa"
      ]
    },
    {
      semester: "Séptimo Semestre",
      subjects: [
        "Proyecto y Cálculo de Aeronaves",
        "Sistema de Propulsión Aeroespaciales",
        "Metodología de la Investigación I",
        "Instalación de Sistemas de Aeronaves",
        "Preservación e Investigación de Accidentes en la Aviación",
        "Optativa"
      ]
    },
    {
      semester: "Octavo Semestre",
      subjects: [
        "Proyecto y Diseño de Aeronaves",
        "Taller Integrador", 
        "Metodología de la Investigación II",
        "Trabajo Final",
        "Optativa"
      ]
    }
  ];

  return (
    <section id="informacion" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Información de la Carrera
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce todos los detalles sobre la carrera de Ingeniería Técnica Aeronáutica en UTU Terciaria
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="card-gradient card-shadow">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Duración</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">8 Semestres</div>
              <p className="text-sm text-muted-foreground">
                Título intermedio a los 4 semestres
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient card-shadow">
            <CardHeader className="text-center">
              <User className="w-12 h-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-lg">Modalidad</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-xl font-bold text-secondary mb-2">Presencial</div>
              <p className="text-sm text-muted-foreground">
                Clases presenciales obligatorias
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient card-shadow">
            <CardHeader className="text-center">
              <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-lg">Títulos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm font-semibold text-accent mb-2">
                • Técnico Aeronáutico
              </div>
              <div className="text-sm font-semibold text-accent">
                • Ingeniero Tecnológico
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-shadow">
            <CardHeader className="text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Licencias</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Otorgadas por DINACIA
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Entry Profile */}
        <Card className="mb-16 card-gradient card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Perfil de Ingreso</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Egresados de Educación Media Superior en las siguientes modalidades:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="text-sm">Educación Media Tecnológica en Aeronáutica</Badge>
                <Badge variant="outline" className="text-sm">Educación Media Tecnológica en Electro-Electrónica</Badge>
                <Badge variant="outline" className="text-sm">Educación Media Tecnológica en Mecánica General</Badge>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-sm">Educación Media Tecnológica en Mecánica Naval</Badge>
                <Badge variant="outline" className="text-sm">Educación Media Tecnológica en Electrotecnia</Badge>
                <Badge variant="outline" className="text-sm">Egresados de la Escuela Militar de Aeronáutica</Badge>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              * Otras situaciones no contempladas serán estudiadas por la autoridad competente
            </p>
          </CardContent>
        </Card>

        {/* Graduate Profiles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Ingeniero Tecnológico */}
          <Card className="card-gradient card-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-center">Ingeniero Tecnológico Aeronáutico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p>• Realizar y garantizar la emisión apropiada del certificado de conformidad de mantenimiento</p>
                <p>• Elaborar, implementar y mantener actualizado el manual de control de mantenimiento</p>
                <p>• Planificar, calcular, diseñar y dirigir proyectos relacionados con las aeronaves</p>
                <p>• Proyectar, dirigir y asesorar técnicamente en el área de competencia</p>
                <p>• Investigar, peritar y redactar informes sobre accidentes e incidentes aeronáuticos</p>
                <p>• Capacidad para trabajar en equipo con ética profesional</p>
                <p>• Capacidad de reflexión, iniciativa e investigación</p>
                <p>• Capacidad para desarrollar funciones bajo situaciones de presión</p>
              </div>
            </CardContent>
          </Card>

          {/* Técnico Aeronáutico */}
          <Card className="card-gradient card-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-center">Técnico Aeronáutico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p>• Cumplir con los programas de mantenimiento de línea, preventivo y correctivo</p>
                <p>• Realizar modificaciones y reparaciones mayores y menores en aeronaves</p>
                <p>• Realizar inspecciones en proceso aplicando métodos y técnicas detalladas</p>
                <p>• Asegurar el cumplimiento de requisitos de aeronavegabilidad continuada</p>
                <p>• Aplicar sistemas de gestión de la seguridad operacional y calidad</p>
                <p>• Capacidad para trabajar en equipo con ética profesional</p>
                <p>• Capacidad de reflexión, iniciativa e investigación</p>
                <p>• Capacidad para desarrollar funciones bajo situaciones de presión</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum */}
        <Card className="card-gradient card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Esquema Curricular</CardTitle>
            <p className="text-center text-muted-foreground">
              Plan de estudios completo por semestres
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {curriculum.map((sem, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">{sem.semester}</h3>
                  <div className="space-y-2">
                    {sem.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-muted/50 p-3 rounded-lg text-sm">
                        {subject}
                      </div>
                    ))}
                  </div>
                  {index < curriculum.length - 1 && (
                    <Separator className="my-6" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button
                onClick={() => window.open("https://drive.google.com/file/d/1ykcdDqoV26m42NU0VhgMU2SA2iq-J5Vv/view?usp=sharing", "_blank")}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 aviation-shadow"
              >
                Descargar Programa de Carrera
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InformationSection;