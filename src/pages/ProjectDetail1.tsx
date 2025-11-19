import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Gitlab } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import moviesFinder from "@/assets/projects/movies-finder.gif";
import moviesFinderDiagram from "@/assets/projects/movies-finder-diagram.png";
import image1 from "@/assets/projects/1/image1.png";
import image2_1 from "@/assets/projects/2/image.png";
import image1_0 from "@/assets/projects/1/image.png";
import image1_2 from "@/assets/projects/1/image2.png";
import image1_3 from "@/assets/projects/1/image3.png";
import image1_4 from "@/assets/projects/1/image4.png";
import image1_5 from "@/assets/projects/1/image5.png";
import image1_6 from "@/assets/projects/1/image6.png";

const ProjectDetail1 = () => {
  // const { id } = useParams();
  const id = "deploying-movies-finder-eks-gitops";
  // Project data - in a real app, this would come from an API or database
  const projects = [
    {
      id: "deploying-movies-finder-eks-gitops",
      title:
        "Deploying the movies finder Web App on Kubernetes with GitOps (ArgoCD + Helm)",
      thumbnail: moviesFinder,
      fullDescription:
        "Movies finder is a web application that allows users to search for movies and view details about them. The app is built using React.js, with data sourced from the TMDB API. The deployment is automated using a GitOps approach with ArgoCD and Helm on an Amazon EKS cluster.",
      details: {
        architecture:
          "The pipeline includes a Gitlab CI/CD workflow that tests, builds Docker images, pushes them to Docker Hub, and triggers an ArgoCD sync to deploy the latest version on AKS. Helm charts are used for templating Kubernetes manifests, allowing for easy configuration across different environments (dev, staging, prod).",
        diagram: moviesFinderDiagram,
        tools: [
          "Docker",
          "Kubernetes",
          "ArgoCD",
          "Terraform",
          "Prometheus",
          "Grafana",
          "Gitlab CI/CD",
          "Helm",
        ],
        steps: [
          "Provisioned EKS cluster using eksctl and Terraform",
          "Initialized and configured project repository with Gitlab",
          "Created Docker images for each tier of the application",
          "Wrote comprehensive Helm charts with environment-specific values",
          "Set up ArgoCD pipeline with automated sync waves",
          "Configured monitoring with Prometheus and Grafana",
        ],
        detailSteps: [
          {
            step: "Provisioned EKS cluster",
            description:
              "Use eksctl to provision an EKS cluster with necessary node groups and networking components.",
            image: image1,
          },
          {
            step: "Setup gitlab repository",
            description:
              "Use eksctl to provision an EKS cluster with necessary node groups and networking components.",
            image: null,
            smallSteps: [
              {
                image: image1,
                description:
                  "Initialized a Gitlab repository and structured it for GitOps.",
              },
            ],
          },
        ],
        challenges:
          "I initially faced an issue where ArgoCD couldn't sync due to missing CRDs. The fix was to use the argocd.argoproj.io/sync-wave annotation in Helm hooks. Additionally, managing secrets across environments required implementing sealed-secrets for secure GitOps workflows.",
        results:
          "Successfully deployed a production-ready application with 99.9% uptime. The GitOps approach reduced deployment time by 60% and eliminated manual deployment errors. Monitoring dashboards provide real-time insights into application health and performance.",
        learning:
          "This project taught me how GitOps simplifies deployments and ensures consistency across environments. Next, I plan to add Terraform to manage cluster infrastructure and integrate Prometheus for observability.",
      },
      tags: [
        "argocd",
        "kubernetes",
        "terraform",
        "aws",
        "monitoring",
        "gitops",
        "helm",
      ],
      githubUrl: "https://gitlab.com/cheulong-devops/movies-finder",
      liveUrl: "https://movies-finder-frontend.vercel.app",
    },
    {
      id: "deploying-3-tier-project-management-aws-services",
      title: "Build a Nextjs Project Management App & Deploy on AWS",
      thumbnail: image2_1,
      fullDescription:
        "Project Management App is a web application that helps teams manage projects, tasks, and collaboration. The app is built using React.js for the frontend, Node.js with Express for the backend, and Postgres for data storage. The deployment leverages various AWS services to ensure scalability, reliability, and security.",
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
      githubUrl: "https://gitlab.com/cheulong-devops/movies-finder",
    },
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
      "gitlab ci/cd":
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
      helm: "bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-600/30",
    };

    return (
      colorMap[tag.toLowerCase()] ||
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30"
    );
  };

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary"
          >
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
      <div className="container mx-auto px-6 py-12 max-w-6xl">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`text-muted-foreground transition-colors ${getTagColor(
                    tag
                  )}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <Button
                  asChild
                  className="text-white bg-blue-500  hover:shadow-glow transition-all"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Gitlab className="mr-2" size={18} />
                    View on GitLab
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative animate-fade-in self-start">
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
              <img
                src={project.thumbnail}
                alt="Cheulong Sear"
                className="relative rounded-2xl shadow-card border border-border w-full"
              />
            </div>
          </div>

          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Project: CI/CD Pipeline for a 3-Tier Web App on AWS
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Goal: Automate build, test, and deployment of a Node.js + React +
              MongoDB app to EKS
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Tools: GitLab CI/CD, Docker, Terraform, AWS EKS, ArgoCD,
              Prometheus, Grafana
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Result: Reduced deployment time from 30 mins to 5 mins
            </p>
          </Card>

          {project.details.architecture && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Architecture Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.architecture}
              </p>
              {project.details.diagram && (
                <img
                  src={project.details.diagram}
                  alt="Architecture Diagram"
                  className="mt-4 relative rounded-2xl shadow-card border border-border w-full"
                />
              )}
            </Card>
          )}
          {project.details.tools && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.details.tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                      tool
                    )}`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {project.details.steps && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
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
              {project.details.detailSteps && (
                <div className="mt-6 space-y-6">
                  <Separator className="my-8" />
                  <h2 className="text-2xl font-bold mb-4">Step Details</h2>
                  {project.details.detailSteps.map((detailStep, index) => (
                    <>
                      <div key={index}>
                        <h3 className="text-lg font-semibold mb-2">
                          {index + 1}.&nbsp;{detailStep.step}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {detailStep.description}
                        </p>
                        {detailStep?.image && (
                          <img
                            src={detailStep.image}
                            alt={detailStep.step}
                            className="mt-4 shadow-card max-w-2xl"
                          />
                        )}
                        {detailStep?.smallSteps && (
                          <ul className="mt-4 list-none list-inside space-y-2">
                            {detailStep.smallSteps.map((smallStep, idx) => (
                              <li key={idx} className="text-muted-foreground">
                                <span className="font-bold text-gray-300">
                                  {index + 1}.{idx + 1}&nbsp;
                                  {smallStep.description}
                                </span>
                                {smallStep?.image && (
                                  <img
                                    src={smallStep.image}
                                    alt={smallStep.image}
                                    className="mt-1 shadow-card max-w-2xl"
                                  />
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              )}
            </Card>
          )}
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Monitoring</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.challenges}
            </p>
            <img
              src={image1_0}
              alt={image1_0}
              className="mt-1 shadow-card max-w-2xl"
            />
             <img
              src={image1_2}
              alt={image1_2}
              className="mt-1 shadow-card max-w-2xl"
            />
            <img
              src={image1_3}
              alt={image1_3}
              className="mt-1 shadow-card max-w-2xl"
            />
            <img
              src={image1_5}
              alt={image1_5}
              className="mt-1 shadow-card max-w-2xl"
            />
            <img
              src={image1_4}
              alt={image1_4}
              className="mt-1 shadow-card max-w-2xl"
            />
<img
              src={image1_6}
              alt={image1_6}
              className="mt-1 shadow-card max-w-2xl"
            />

          </Card>
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Following the DevSecOps principles, I integrated security measures throughout the CI/CD pipeline. This included implementing image scanning for vulnerabilities using tools like Trivy, enforcing strict IAM roles and policies for AWS resources, and utilizing sealed-secrets to manage sensitive information securely within the GitOps workflow. Regular security audits and compliance checks were also automated to ensure the application adhered to best practices and industry standards.
            </p>
          </Card>
          {project.details.challenges && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.challenges}
              </p>
            </Card>
          )}

          {project.details.results && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.results}
              </p>
            </Card>
          )}

          {project.details.learning && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.learning}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail1;
