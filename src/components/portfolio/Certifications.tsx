import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Java Full Stack Web Development",
    org: "TAP Academy, Bangalore",
    color: "text-primary",
  },
  {
    title: "Machine Learning Master Class",
    org: "Pantech eLearning Pvt Ltd (APSSDC)",
    color: "text-cyan",
  },
];

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className={`glass rounded-2xl p-6 w-full sm:w-80 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Award size={28} className={`mb-3 ${c.color}`} />
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
