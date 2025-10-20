import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileOutdoor from "@/assets/profile-outdoor.png";
import {
  GitBranch,
  Package,
  Container,
  FileCode,
  Cloud,
  Code,
  GitMerge,
  BarChart,
  Network,
  Award,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const skillGroups = [
    {
      category: "CI/CD & Version Control",
      icon: GitBranch,
      tools: [
        { name: "Azure DevOps", icon: GitBranch },
        { name: "GitLab", icon: GitBranch },
        { name: "GitHub Actions", icon: GitBranch },
        { name: "ArgoCD", icon: GitMerge },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      tools: [
        { name: "AWS", icon: Cloud },
        { name: "Azure", icon: Cloud },
        { name: "Terraform", icon: FileCode },
        { name: "Ansible", icon: FileCode },
      ],
    },
    {
      category: "Containers & Orchestration",
      icon: Container,
      tools: [
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Package },
        { name: "AKS", icon: Package },
        { name: "EKS", icon: Package },
      ],
    },
    {
      category: "Monitoring & Networking",
      icon: BarChart,
      tools: [
        { name: "Prometheus", icon: BarChart },
        { name: "Grafana", icon: BarChart },
        { name: "ELK Stack", icon: BarChart },
        { name: "Istio", icon: Network },
      ],
    },
    {
      category: "Development",
      icon: Code,
      tools: [
        { name: "Python", icon: Code },
        { name: "JavaScript", icon: Code },
        { name: "TypeScript", icon: Code },
        { name: "React.js", icon: Code },
        { name: "Node.js", icon: Code },
      ],
    },
  ];

  const certificates = [
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft",
      date: "2024",
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
  ];

  const achievements = [
    "Reduced deployment time by 60% through CI/CD pipeline optimization",
    "Successfully migrated legacy applications to containerized architecture",
    "Implemented infrastructure as code reducing manual configuration by 90%",
    "Led team in adopting GitOps practices with ArgoCD",
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">About</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              Software Engineer with 5+ years of experience transitioning into DevOps Engineering. Based in Bangkok, Thailand,
              with a degree in Software Engineering from Chiang Mai University.
            </p>

            <p>
              Combining deep software development expertise with modern DevOps practices to build reliable, automated,
              and scalable infrastructure. Experienced in CI/CD pipelines, containerization, cloud platforms, and
              infrastructure as code.
            </p>

            <p>
              Currently seeking DevOps opportunities to contribute from day one while continuing to grow in automation,
              deployment optimization, and cloud-native technologies.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={profileOutdoor}
              alt="Cheulong Sear outdoor"
              className="rounded-2xl shadow-card border border-border w-full"
            />
          </div>
        </div>

        {/* Certificates & Achievements */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold mb-6">Certificates & Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={24} />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Skills & Tools */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <group.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <tool.icon size={16} className="text-primary" />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
