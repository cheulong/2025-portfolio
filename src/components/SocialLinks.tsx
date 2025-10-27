import { Linkedin, Github, NotebookPen, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/cheulongsear/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@moshi-moshi-devops", label: "youtube" },
    { icon: NotebookPen, href: "https://dev.to/cheulong", label: "dev.to" },
    { icon: Github, href: "https://github.com/cheulong", label: "GitHub" },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
          aria-label={social.label}
          title={social.label}
        >
          <social.icon size={18}/>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
