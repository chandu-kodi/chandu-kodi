import { Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
            Developed by   @2025 chandu kodi. 
        </p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/chandu-kodi-/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/chandukodi/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-orange transition-colors">
            <Code2 size={18} />
          </a>
          <a href="mailto:chandukodi02@gmail.com" className="p-2 hover:text-accent transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
