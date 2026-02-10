import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Care Connect",
    subtitle: "Doctor Appointment Application",
    year: "2024–2025",
    description:
      "Virtual & in-person doctor appointment booking with online payments, admin panel for doctors, patients, reviews, and REST APIs integrated using Axios.",
    tech: ["React", "Node.js", "PostgreSQL", "Axios"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "House Price Prediction",
    subtitle: "Machine Learning Project",
    year: "2023",
    description:
      "Machine learning-based price prediction with features like square feet, bedrooms, bathrooms, and location for accurate estimation for buyers and sellers.",
    tech: ["Python", "Machine Learning", "Data Science"],
    gradient: "from-cyan/20 to-orange/20",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group glass rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Card header gradient */}
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                  </div>
                  <span className="text-xs text-muted-foreground glass px-2 py-1 rounded-full">{p.year}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                  View Project <ExternalLink size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
