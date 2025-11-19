import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import aksGitopsThumb from "@/assets/projects/aks-gitops-thumb.jpg";
import playwrightThumb from "@/assets/projects/playwright-thumb.jpg";
import moviesFinder from "@/assets/projects/movie-finder-poster.png";

const Projects = () => {
  const projects = [
    {
      id: "deploying-movies-finder-eks-gitops",
      title:
        "Deploying the movies finder Web App on EKS with GitOps (ArgoCD + Helm)",
      description:
        "Movies finder is a web application that allows users to search for movies and view details about them. The app is built using React.js, with data sourced from the TMDB API. The deployment is automated using a GitOps approach with ArgoCD and Helm on an Amazon EKS cluster.",
      thumbnail: moviesFinder,
      tags: ["argocd", "kubernetes", "terraform", "aws", "monitoring"],
      // details: {
      //   architecture:
      //     "The pipeline includes a GitHub Actions workflow that builds Docker images, pushes them to Docker Hub, and triggers an ArgoCD sync to deploy the latest version on AKS.",
      //   tools: ["Docker", "Kubernetes", "ArgoCD", "Terraform", "Prometheus", "Grafana", "GitHub Actions"],
      //   steps: ["Created app images", "Wrote Helm charts", "Set up ArgoCD pipeline"],
      //   challenges:
      //     "I initially faced an issue where ArgoCD couldn't sync due to missing CRDs. The fix was to use the argocd.argoproj.io/sync-wave annotation in Helm hooks.",
      //   results: "GitHub repo + screenshots of ArgoCD sync & Grafana dashboards",
      //   learning:
      //     "This project taught me how GitOps simplifies deployments. Next, I plan to add Terraform to manage cluster infrastructure and integrate Prometheus for observability.",
      // },
    },
    {
      id: "deploying-3-tier-project-management-aws-services",
      title: "Build a Nextjs Project Management App & Deploy on AWS",
      description:
        "Project Management App is a web application that helps teams manage projects, tasks, and collaboration. The app is built using React.js for the frontend, Node.js with Express for the backend, and Postgres for data storage. The deployment leverages various AWS services to ensure scalability, reliability, and security.",
      thumbnail: aksGitopsThumb,
      tags: ["argocd", "kubernetes", "terraform", "monitoring"],
    },
    // {
    //   id: "deploying-microservices-3-tier-ecommerce-aks-gitops",
    //   title: "Deploying Microservices 3-tier e-commerce app on AKS with GitOps",
    //   description:
    //     "Playwright is a Node.js library made for browser automation. It is free, open-source and supported by Microsoft. Some of the team members used to work for google at the different automation tool called Puppeteer.",
    //   thumbnail: playwrightThumb,
    //   tags: ["test", "e2e"],
    //   // githubUrl: "https://github.com",
    // },
    // {
    //   id: "inventory-management-aws-terraform",
    //   title: "Inventory management aws with terraform",
    //   description:
    //     "Playwright is a Node.js library made for browser automation. It is free, open-source and supported by Microsoft. Some of the team members used to work for google at the different automation tool called Puppeteer.",
    //   thumbnail: playwrightThumb,
    //   tags: ["test", "e2e"],
    //   // githubUrl: "https://github.com",
    // },
    // {
    //   id: "real-estate-3-tier-app-eks-gitops",
    //   title: "real estate 3 tier app on eks with gitops",
    //   description:
    //     "Playwright is a Node.js library made for browser automation. It is free, open-source and supported by Microsoft. Some of the team members used to work for google at the different automation tool called Puppeteer.",
    //   thumbnail: playwrightThumb,
    //   tags: ["test", "e2e"],
    //   // githubUrl: "https://github.com",
    // },
  ];

  // Semantic colors based on technology
  const getTagColor = (tag: string) => {
    const colorMap: Record<string, string> = {
      // DevOps tools
      argocd:
        "bg-rose-600/20 text-rose-700 dark:text-rose-300 border-rose-600/30",
      terraform:
        "bg-purple-600/20 text-purple-700 dark:text-purple-300 border-purple-600/30",
      kubernetes:
        "bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-600/30",
      docker:
        "bg-blue-400/20 text-blue-600 dark:text-blue-300 border-blue-400/30",

      // CI/CD
      gitlab:
        "bg-orange-700/20 text-orange-800 dark:text-orange-300 border-orange-700/30",
      cicd: "bg-violet-600/20 text-violet-700 dark:text-violet-300 border-violet-600/30",
      gitops: "bg-red-700/20 text-red-800 dark:text-red-300 border-red-700/30",

      // Monitoring
      prometheus:
        "bg-red-600/20 text-red-700 dark:text-red-300 border-red-600/30",
      grafana:
        "bg-orange-600/20 text-orange-700 dark:text-orange-300 border-orange-600/30",
      loki: "bg-lime-600/20 text-lime-700 dark:text-lime-300 border-lime-600/30",

      // Infrastructure
      metallb:
        "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
      homelab:
        "bg-green-600/20 text-green-700 dark:text-green-300 border-green-600/30",

      // Security & Network
      security:
        "bg-orange-700/20 text-orange-800 dark:text-orange-300 border-orange-700/30",
      firewall:
        "bg-red-700/20 text-red-800 dark:text-red-300 border-red-700/30",
      network: "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",

      // OS & General
      linux:
        "bg-yellow-600/20 text-yellow-700 dark:text-yellow-300 border-yellow-600/30",
      devops:
        "bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-600/30",
      deployment:
        "bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-600/30",
      cloudflare:
        "bg-orange-600/20 text-orange-700 dark:text-orange-300 border-orange-600/30",
      "cert-manager":
        "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",
      ingress:
        "bg-teal-600/20 text-teal-700 dark:text-teal-300 border-teal-600/30",
      container:
        "bg-cyan-600/20 text-cyan-700 dark:text-cyan-300 border-cyan-600/30",
      ubuntu:
        "bg-orange-700/20 text-orange-800 dark:text-orange-300 border-orange-700/30",
      iac: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
      cloud: "bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-500/30",
      aws: "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30",
      azure:
        "bg-blue-700/20 text-blue-800 dark:text-blue-300 border-blue-700/30",
      proxmox:
        "bg-purple-700/20 text-purple-800 dark:text-purple-300 border-purple-700/30",
      vm: "bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-600/30",
      slack:
        "bg-violet-600/20 text-violet-700 dark:text-violet-300 border-violet-600/30",
      automation:
        "bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border-emerald-600/30",
      monitoring:
        "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",
    };

    return (
      colorMap[tag.toLowerCase()] ||
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30"
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">project</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* <h1>Coming Soon</h1> */}
          {projects.map((project, index) => (
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
                          <h3 className="font-semibold text-foreground mb-1">
                            Architecture Overview
                          </h3>
                          <p className="text-muted-foreground line-clamp-2">
                            {project.details.architecture}
                          </p>
                        </div>
                      )}

                      {project.details.tools && (
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Tools Used
                          </h3>
                          <p className="text-muted-foreground">
                            {project.details.tools.join(", ")}
                          </p>
                        </div>
                      )}

                      {project.details.steps && (
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Steps / Implementation
                          </h3>
                          <p className="text-muted-foreground">
                            {project.details.steps.join(" → ")}
                          </p>
                        </div>
                      )}

                      {project.details.challenges && (
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Challenges & Lessons Learned
                          </h3>
                          <p className="text-muted-foreground">
                            {project.details.challenges}
                          </p>
                        </div>
                      )}

                      {project.details.learning && (
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Learning Outcome
                          </h3>
                          <p className="text-muted-foreground">
                            {project.details.learning}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`bg-muted text-muted-foreground transition-colors 
                      ${getTagColor(tag)}
                      `}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium mt-4">
                    <span>View Details</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={18} />
                      View Code
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
