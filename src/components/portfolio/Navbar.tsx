import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold gradient-text">
          KC
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </button>
          ))}
          <button onClick={toggle} className="p-2 rounded-full hover:bg-secondary transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} className="p-2 rounded-full hover:bg-secondary transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left px-6 py-3 text-sm hover:bg-secondary/50 transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
