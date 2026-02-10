import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, GitBranch, Send, Smartphone, Database } from "lucide-react";

const tools = [
  { name: "VS Code", icon: Code2, color: "text-primary" },
  { name: "GitHub", icon: GitBranch, color: "text-foreground" },
  { name: "Postman", icon: Send, color: "text-orange" },
  { name: "Android Studio", icon: Smartphone, color: "text-cyan" },
  { name: "pgAdmin", icon: Database, color: "text-accent" },
];

export default function Tools() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tools & <span className="gradient-text">Technologies</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`glass rounded-2xl p-6 w-36 text-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 cursor-default ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <tool.icon size={32} className={`mx-auto mb-3 ${tool.color}`} />
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
