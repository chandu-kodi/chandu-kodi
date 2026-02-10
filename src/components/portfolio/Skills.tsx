import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "primary",
    skills: [
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "React JS", level: 90 },
      { name: "React Native", level: 70 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Databases",
    color: "cyan",
    skills: [{ name: "PostgreSQL", level: 85 }],
  },
  {
    title: "Concepts",
    color: "accent",
    skills: [
      { name: "Data Structures & Algorithms", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  cyan: "bg-cyan",
  accent: "bg-accent",
};

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass rounded-2xl p-6 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <h3 className="text-lg font-semibold mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${colorMap[cat.color]} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${ci * 150 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
