import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Linkedin, Code2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "chandukodi02@gmail.com", href: "mailto:chandukodi02@gmail.com" },
  { icon: Phone, label: "+91 7036272070", href: "tel:+917036272070" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chandu-kodi-/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/chandukodi/" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology!
            </p>
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                  <c.icon size={18} />
                </span>
                <span className="text-sm">{c.label}</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`glass rounded-2xl p-6 space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Input placeholder="Your Name" required className="bg-background/50" maxLength={100} />
            <Input type="email" placeholder="Your Email" required className="bg-background/50" maxLength={255} />
            <Textarea placeholder="Your Message" required className="bg-background/50 min-h-[120px]" maxLength={1000} />
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending..." : "Send Message"} <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
