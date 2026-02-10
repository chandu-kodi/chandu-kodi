import { ArrowDown, Download, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan/10 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Code2 size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">Full Stack Web Developer</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">Kodi Chandu</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Software Developer | Full Stack Web Developer
        </p>

        <p className="max-w-2xl mx-auto text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Building scalable, modern web &amp; mobile applications with clean UI and powerful backend systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 animate-pulse-glow"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects <ArrowDown size={16} />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
            <a href="#" download>
              <Download size={16} /> Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="https://www.linkedin.com/in/chandu-kodi-/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary/20 transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/chandukodi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-orange/20 transition-all hover:scale-110"
          >
            <Code2 size={20} />
          </a>
          <a
            href="mailto:chandukodi02@gmail.com"
            className="p-3 glass rounded-full hover:bg-accent/20 transition-all hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
