import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const responsibilities = [
  "Developed responsive web interfaces using React.js, Next.js, HTML, CSS, JavaScript",
  "Implemented modern UI using Tailwind CSS & Bootstrap",
  "Built reusable component-based architecture",
  "Integrated REST APIs for authentication and workflows",
  "Worked with PostgreSQL for backend data management",
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-cyan" />

          <div
            className={`relative pl-16 md:pl-20 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background animate-pulse-glow" />

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <Briefcase className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold">Software Developer</h3>
                  <p className="text-primary font-medium text-sm">Pivotal Soft IT Solutions</p>
                  <p className="text-muted-foreground text-xs">Visakhapatnam, India | July 2023 – Present</p>
                </div>
              </div>
              <ul className="space-y-2">
                {responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm text-muted-foreground transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
