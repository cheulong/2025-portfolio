import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Project data - in a real app, this would come from an API or database
  const projects = [
    {
      id: "deploying-3tier-aks",
      title: "Deploying a 3-Tier Web App on AKS with GitOps (ArgoCD + Helm)",
      description:
        "Automate deployment of a web application using CI/CD and Kubernetes GitOps workflow.",
      fullDescription:
        "This comprehensive DevOps project demonstrates the complete lifecycle of deploying a modern 3-tier web application on Azure Kubernetes Service (AKS) using GitOps principles. The project showcases industry best practices for containerization, orchestration, and continuous deployment.",
      details: {
        architecture:
          "The pipeline includes a GitHub Actions workflow that builds Docker images, pushes them to Docker Hub, and triggers an ArgoCD sync to deploy the latest version on AKS. The architecture follows a 3-tier model with frontend, backend API, and database layers, all orchestrated through Kubernetes.",
        tools: ["Docker", "Kubernetes", "ArgoCD", "Terraform", "Prometheus", "Grafana", "GitHub Actions", "Helm"],
        steps: [
          "Created Docker images for each tier of the application",
          "Wrote comprehensive Helm charts with environment-specific values",
          "Set up ArgoCD pipeline with automated sync waves",
          "Configured monitoring with Prometheus and Grafana",
          "Implemented infrastructure as code using Terraform",
        ],
        challenges:
          "I initially faced an issue where ArgoCD couldn't sync due to missing CRDs. The fix was to use the argocd.argoproj.io/sync-wave annotation in Helm hooks. Additionally, managing secrets across environments required implementing sealed-secrets for secure GitOps workflows.",
        results:
          "Successfully deployed a production-ready application with 99.9% uptime. The GitOps approach reduced deployment time by 60% and eliminated manual deployment errors. Monitoring dashboards provide real-time insights into application health and performance.",
        learning:
          "This project taught me how GitOps simplifies deployments and ensures consistency across environments. Next, I plan to add Terraform to manage cluster infrastructure and integrate Prometheus for observability. I also gained deep understanding of Kubernetes networking and service mesh concepts.",
      },
      tags: ["argocd", "kubernetes", "terraform", "monitoring", "gitops", "helm"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "playwright-testing",
      title: "What is Playwright?",
      description:
        "Playwright is a Node.js library made for browser automation. It is free, open-source and supported by Microsoft.",
      fullDescription:
        "An in-depth exploration of Playwright, Microsoft's powerful end-to-end testing framework. This project demonstrates comprehensive testing strategies for modern web applications across multiple browsers.",
      details: {
        architecture:
          "Implemented a complete testing suite using Playwright for cross-browser testing. The framework includes page object models, custom fixtures, and parallel test execution for optimal performance.",
        tools: ["Playwright", "TypeScript", "Node.js", "CI/CD", "Docker"],
        steps: [
          "Set up Playwright with TypeScript configuration",
          "Created reusable page object models for maintainability",
          "Implemented visual regression testing",
          "Integrated with CI/CD pipeline for automated testing",
          "Configured parallel execution across multiple browsers",
        ],
        challenges:
          "Managing test data across different test runs was initially challenging. Implemented a robust test data factory pattern to ensure test isolation. Also optimized test execution time by implementing smart test parallelization.",
        results:
          "Achieved 85% test coverage with fast, reliable tests running in under 5 minutes. Reduced bugs in production by 40% through comprehensive E2E testing. Tests run automatically on every pull request.",
        learning:
          "Gained expertise in modern testing practices and learned the importance of test maintainability. Understanding of browser automation and cross-browser compatibility issues deepened significantly.",
      },
      tags: ["test", "e2e", "playwright", "automation", "typescript"],
      githubUrl: "https://github.com",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline" className="border-primary text-primary">
            <Link to="/projects">
              <ArrowLeft className="mr-2" size={18} />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-foreground animate-fade-in"
        >
          <Link to="/projects">
            <ArrowLeft className="mr-2" size={18} />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
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
            <div className="flex gap-4">
              {project.githubUrl && (
                <Button
                  asChild
                  className="bg-gradient-primary hover:shadow-glow transition-all"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </Card>

          {project.details.architecture && (
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-4">Architecture Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.architecture}</p>
            </Card>
          )}

          {project.details.tools && (
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.details.tools.map((tool) => (
                  <Badge
                    key={tool}
                    className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {project.details.steps && (
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-bold mb-4">Implementation Steps</h2>
              <ol className="space-y-3">
                {project.details.steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          )}

          {project.details.challenges && (
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.challenges}</p>
            </Card>
          )}

          {project.details.results && (
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.results}</p>
            </Card>
          )}

          {project.details.learning && (
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.learning}</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
