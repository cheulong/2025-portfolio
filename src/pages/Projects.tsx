import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import aksGitopsThumb from "@/assets/projects/aks-gitops-thumb.jpg";
import playwrightThumb from "@/assets/projects/playwright-thumb.jpg";

const Projects = () => {
  const projects = [
    {
      id: "deploying-3tier-aks",
      title: "Deploying a 3-Tier Web App on AKS with GitOps (ArgoCD + Helm)",
      description:
        "Automate deployment of a web application using CI/CD and Kubernetes GitOps workflow.",
      thumbnail: aksGitopsThumb,
      details: {
        architecture:
          "The pipeline includes a GitHub Actions workflow that builds Docker images, pushes them to Docker Hub, and triggers an ArgoCD sync to deploy the latest version on AKS.",
        tools: ["Docker", "Kubernetes", "ArgoCD", "Terraform", "Prometheus", "Grafana", "GitHub Actions"],
        steps: ["Created app images", "Wrote Helm charts", "Set up ArgoCD pipeline"],
        challenges:
          "I initially faced an issue where ArgoCD couldn't sync due to missing CRDs. The fix was to use the argocd.argoproj.io/sync-wave annotation in Helm hooks.",
        results: "GitHub repo + screenshots of ArgoCD sync & Grafana dashboards",
        learning:
          "This project taught me how GitOps simplifies deployments. Next, I plan to add Terraform to manage cluster infrastructure and integrate Prometheus for observability.",
      },
      tags: ["argocd", "kubernetes", "terraform", "monitoring"],
    },
    {
      id: "playwright-testing",
      title: "What is Playwright?",
      description:
        "Playwright is a Node.js library made for browser automation. It is free, open-source and supported by Microsoft. Some of the team members used to work for google at the different automation tool called Puppeteer.",
      thumbnail: playwrightThumb,
      tags: ["test", "e2e"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">project</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <h1>Coming Soon</h1>
          {/* {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in flex flex-col group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/projects/${project.id}`} className="flex-1">
                {project.thumbnail && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                <p className="text-muted-foreground">{project.description}</p>

                {project.details && (
                  <div className="space-y-3 text-sm">
                    {project.details.architecture && (
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Architecture Overview</h3>
                        <p className="text-muted-foreground line-clamp-2">{project.details.architecture}</p>
                      </div>
                    )}

                    {project.details.tools && (
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Tools Used</h3>
                        <p className="text-muted-foreground">{project.details.tools.join(", ")}</p>
                      </div>
                    )}

                    {project.details.steps && (
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Steps / Implementation</h3>
                        <p className="text-muted-foreground">{project.details.steps.join(" → ")}</p>
                      </div>
                    )}

                    {project.details.challenges && (
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Challenges & Lessons Learned</h3>
                        <p className="text-muted-foreground">{project.details.challenges}</p>
                      </div>
                    )}

                    {project.details.learning && (
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Learning Outcome</h3>
                        <p className="text-muted-foreground">{project.details.learning}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                  <div className="flex items-center gap-2 text-primary font-medium mt-4">
                    <span>View Details</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {project.githubUrl && (
                <div className="mt-6 pt-4 border-t border-border">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={18} />
                      View Code
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
