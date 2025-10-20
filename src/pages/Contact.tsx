import { Mail, Linkedin, Github, Youtube, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "email",
      href: "mailto:your.email@example.com",
      display: "your.email@example.com",
    },
    {
      icon: Linkedin,
      label: "linkedin",
      href: "https://linkedin.com",
      display: "linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "github",
      href: "https://github.com",
      display: "github.com/yourprofile",
    },
    {
      icon: Monitor,
      label: "dev.to",
      href: "https://dev.to",
      display: "dev.to/yourprofile",
    },
    {
      icon: Youtube,
      label: "youtube",
      href: "https://youtube.com",
      display: "youtube.com/@yourchannel",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">contact</h1>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out through any of these channels. I'm always open to discussing new opportunities,
            collaborations, or just having a chat about tech!
          </p>
        </div>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <Card
              key={method.label}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <method.icon size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{method.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {method.display}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
