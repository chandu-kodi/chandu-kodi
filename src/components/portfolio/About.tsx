import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Briefcase, GraduationCap, Linkedin, Code2, Mail } from "lucide-react";
import chandu from "@/assets/chandu.jpeg";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Illustration side */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-cyan/30 animate-float" />
  
  <div className="absolute inset-2 glass rounded-2xl flex items-center justify-center">
    <div className="text-center space-y-3">
      
      {/* Profile Image replacing User icon */}
      <img
        src={chandu}
        alt="Chandu Kodi"
        className="w-24 h-24 mx-auto rounded-full object-cover 
                   border-3 border-primary/40 
                   shadow-lg 
                   transition-transform duration-300 
                   hover:scale-105"
      />

      <p className="text-sm text-muted-foreground font-medium">
        Full Stack Developer
      </p>
      

      <div className="flex justify-center gap-4 text-muted-foreground">
        <a href="https://www.linkedin.com/in/chandu-kodi-/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/chandukodi/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-orange transition-colors">
            <Code2 size={18} />
          </a>
          <a href="mailto:chandukodi02@gmail.com" className="p-2 hover:text-accent transition-colors">
            <Mail size={18} />
          </a>
        {/* <Briefcase size={18} />
        <GraduationCap size={18} /> */}
      </div>

    </div>
  </div>
</div>

          </div>

          {/* Text side */}
          <div
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              Passionate Full Stack Developer with experience in React, Next.js, Node.js, PostgreSQL, and modern UI frameworks.
              Skilled in building responsive web and mobile applications, REST APIs, and scalable architectures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love turning complex problems into simple, elegant solutions. With a strong foundation in data structures,
              algorithms, and software engineering principles, I deliver clean, maintainable code that scales.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Java", "React", "Node.js", "PostgreSQL", "Next.js", "TypeScript"].map((t) => (
                <span key={t} className="px-3 py-1 glass rounded-full text-xs font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
