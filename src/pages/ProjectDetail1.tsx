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
        "Movies finder is a web application that allows users to search for movies and view details about them. The app is built using React.js, with data sourced from the TMDB API. The deployment is automated using a GitOps approach with ArgoCD on Kubernetes.",
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
            <p className="font-bold leading-relaxed">
              Project: End-to-End DevSecOps Project (Movies Finder)
            </p>
            <br />
            <p className="leading-relaxed">
              <span className="font-bold"> Overview</span> While the visible
              application is a React-based Movie Finder (consuming TMDB API),
              this project serves as a comprehensive proof-of-concept for a
              production-grade DevSecOps lifecycle. It demonstrates the
              automated delivery of a secure, tested, and monitored web
              application onto a baremetal Kubernetes cluster using GitOps
              principles.
            </p>
            <br />
            <p className="leading-relaxed">
              <span className="font-bold">Goal</span> To architect a
              "Zero-Touch" delivery pipeline that automates the build, testing,
              security scanning, and deployment processes, ensuring that only
              high-quality, secure code reaches production without manual
              intervention.
            </p>
            <br />
            <p>
              <span className="font-bold">Tech Stack & Tools</span>
              <ul className="list-disc list-inside leading-relaxed">
                <li>
                  <span className="font-bold">Infrastructure & GitOps:</span>{" "}
                  Kubernetes, Docker, Helm, ArgoCD, Terraform, Baremetal Homelab
                </li>
                <li>
                  <span className="font-bold">CI/CD & Release:</span> GitLab
                  CI/CD, Release-it, Commitizen, Husky, Lint-Staged
                </li>
                <li>
                  <span className="font-bold">Observability Stack:</span>{" "}
                  OpenTelemetry, Prometheus, Grafana, Alloy, Alertmanager, Slack
                </li>
                <li>
                  <span className="font-bold">Security (DevSecOps):</span>{" "}
                  Trivy, OWASP ZAP, Gitleaks, Sealed-Secrets, Syft (SBOM)
                </li>
                <li>
                  <span className="font-bold">Testing & QA:</span> Playwright
                  (E2E), Vitest (Unit), SonarCloud
                </li>
              </ul>
            </p>
            <br />
            <p>
              <span className="font-bold">Key Results & Achievements</span>
              <ul className="list-disc list-inside">
                <li className="">
                  <span className="font-bold">Optimized Release Cycle:</span>{" "}
                  Automated the entire delivery chain, reducing deployment
                  turnaround time by <span className="font-bold">50%</span>{" "}
                  (from 40m to 20m) while adding comprehensive testing and
                  security stages.
                </li>
                <li>
                  <span className="font-bold">360°</span> Observability:
                  Implemented the "Grafana Alloy" & OpenTelemetry stack to
                  correlate metrics and logs, providing real-time performance
                  monitoring and instant Slack alerts for node resource
                  exhaustion.
                </li>
                <li>
                  <span className="font-bold">Automated Compliance Gates:</span>{" "}
                  Shifted security left by integrating{" "}
                  <span className="font-bold">Trivy</span> (container scanning)
                  and <span className="font-bold">Dependency Check</span>
                  into the CI pipeline, automatically blocking builds with
                  critical CVEs.
                </li>
                <li>
                  <span className="font-bold">Zero-Downtime Deployment:</span>{" "}
                  Leveraged <span className="font-bold">ArgoCD</span> to manage
                  state drift and ensure seamless application updates via
                  GitOps.
                </li>
              </ul>
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-white">Project:</span> End to End CI/CD
              Pipeline for a Web App on Kubernetes
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-white">Goal: </span> Automate build, test,
              deployment and monitoring of a ReactJs web application using
              GitOps principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-white">Tools: </span>
              ReactJs, Docker, Kubernetes, GitLab CI/CD, Docker, Kubernetes,
              ArgoCD, Prometheus, Grafana, Opentelemetry ,Helm, Trivy, OWSP Zap,
              Vitest, Playwright, Husky, Lint-Staged, Release-it, Gitleaks,
              Sealed-Secrets, Commitlint
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-white"> Result: </span>{" "}
              <ul className="list-disc list-inside">
                <li>Reduced deployment time from 40 mins to 20 mins</li>
                <li>
                  Monitor the nodes' resource and the app performance using
                  prometheus, grafana, alertmanager, slack and alloy
                </li>
                <li>
                  Prevent the app from vulnerability by using trivy and
                  dependency_check
                </li>
              </ul>
            </p> */}
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
              This solution is designed as a Declarative DevOps Platform
              operating under a GitOps paradigm, ensuring a single source of
              truth for both application code and infrastructure configuration.
              Architectural Layers 1. Infrastructure & Control Plane (The
              Foundation) The application is deployed to a baremetal Kubernetes
              cluster [Correct this if you used AKS]. The configuration
              repository serves as the Single Source of Truth for all cluster
              state, managed and enforced by ArgoCD. This pull-based mechanism
              guarantees immutability and eliminates configuration drift. Helm
              charts abstract the Kubernetes manifests, providing templated
              flexibility for deploying the application across various lifecycle
              environments. 2. Continuous Integration (GitLab CI) The pipeline
              is designed with a "Shift-Left" security philosophy, performing
              rigorous checks before image creation: Testing Gates: Runs unit
              tests (Vitest) and end-to-end tests (Playwright). Code Quality:
              Static Analysis (SAST) and Gitleaks check for secrets and
              vulnerabilities. Security Gates: Uses Trivy to scan the built
              Docker image for CVEs and Syft to generate an SBOM. Artifact Flow:
              Upon successful build, the immutable Docker image is tagged and
              pushed to the registry, triggering the deployment phase. 3.
              Continuous Delivery & Resilience (ArgoCD) The deployment process
              is entirely automated: Deployment Flow: ArgoCD detects the new
              image tag, initiates a synchronous update, and uses Sealed Secrets
              to securely inject runtime configuration. Self-Healing: Kubernetes
              handles pod scheduling and self-healing, while ArgoCD ensures any
              manual changes to the environment are reverted to match the
              desired state in Git. 4. Observability Stack The platform includes
              full-stack observability to monitor the cluster and application
              health proactively. OpenTelemetry instruments the application for
              tracing, with Prometheus collecting metrics and Grafana providing
              real-time visualization of the "Golden Signals" and hardware
              performance.
            </Card>
          )}
          {project.details.tools && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  CI/CD & GitOps:&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools that automate the deployment and delivery pipeline.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-3 list-disc list-inside">
                  {[
                    ["GitLab CI/CD", "(Infrastructure as Code)"],
                    ["ArgoCD", "(Container Orchestration)"],
                    ["Release-it", "(Release automation)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Infrastructure & Orchestration:&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools used to run, manage, and provision the environment.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Terraform", "(Infrastructure as Code)"],
                    ["Kubernetes", "(Container Orchestration)"],
                    ["Docker", "(Containerization)"],
                    ["Helm", "(Package Manager for Kubernetes)"],
                    ["Homelab (baremetal)", "(Physical computer hardware)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Monitoring & Observability:&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools used to visualize data, collect metrics, and alert on
                  issues.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Prometheus", "(Metrics collection)"],
                    ["Grafana", "(Visualization)"],
                    ["OpenTelemetry", "(Observability framework)"],
                    ["Alertmanager", "(Alert handling)"],
                    ["Grafana Alloy", "(OpenTelemetry Collector)"],
                    [
                      "Slack",
                      "(Used here as a notification channel for alerts)",
                    ],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Security (DevSecOps) & SBOM (Software Bill of
                  Materials):&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools for scanning, vulnerability management, and supply chain
                  security.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["SonarCloud", "(Code quality & security scanning)"],
                    ["Trivy", "(Container scanning)"],
                    ["Grype", "(Vulnerability scanner)"],
                    ["Syft", "(Generating Software Bill of Materials)"],
                    ["OWASP ZAP", "(Web app security scanner)"],
                    ["Gitleaks", "(Detecting hardcoded secrets)"],
                    ["Sealed-Secrets", "(Managing secrets in Kubernetes)"],
                    ["Dependency Check", "(Scanning dependencies)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Security (DevSecOps) & SBOM (Software Bill of
                  Materials):&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools for scanning, vulnerability management, and supply chain
                  security.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["SonarCloud", "(Code quality & security scanning)"],
                    ["Trivy", "(Container scanning)"],
                    ["Grype", "(Vulnerability scanner)"],
                    ["Syft", "(Generating Software Bill of Materials)"],
                    ["OWASP ZAP", "(Web app security scanner)"],
                    ["Gitleaks", "(Detecting hardcoded secrets)"],
                    ["Sealed-Secrets", "(Managing secrets in Kubernetes)"],
                    ["Dependency Check", "(Scanning dependencies)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Frontend & Development Stack:&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  The core technologies used to build the application (these
                  were incorrectly listed under "Testing").
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["ReactJs", "(Frontend Library)"],
                    ["Tailwind", "(CSS Framework)"],
                    ["Vite", "(Frontend Build Tool)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Testing & QA:&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools used to verify the code actually works.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Playwright", "(End-to-End Testing)"],
                    ["Vitest", "(Unit Testing)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Code Quality & Git Workflow:&nbsp;
                </h3>
                <p className="text-md font-light italic">
                  Tools that enforce coding standards and commit discipline.
                </p>
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Husky", "(Git hooks)"],
                    ["Lint-staged", "(Run linters on git staged files)"],
                    ["Commitlint", "(Lint commit messages)"],
                    ["Commitizen", "(Commit message formatting helper)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                    // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge>
                  ))}
                </ul>
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
              <div>
                Implementation Journey 1. Infrastructure & Cluster Bootstrapping
                Provisioned a baremetal Kubernetes cluster (Homelab) ensuring
                networking connectivity. Configured MetalLB (Layer 2 mode) to
                provide LoadBalancer IP addresses for the private network.
                Installed the NGINX Ingress Controller to manage external access
                to services. 2. Containerization (Docker) Created a multi-stage
                Dockerfile for the React application to optimize image size.
                Stage 1: Build the artifact using Node.js. Stage 2: Serve static
                files using Nginx-alpine (reducing image size from ~800MB to
                ~20MB). 3. The CI Pipeline (GitLab CI) Designed a pipeline with
                distinct stages: Test -&gt; Security -&gt; Build -&gt; Release.
                Testing: Integrated Vitest for unit tests and Playwright for E2E
                testing. Security: Added Trivy to scan the filesystem and
                Gitleaks to check for hardcoded secrets before the build.
                Release: configured Release-it to automate semantic versioning
                and changelog generation. 4. GitOps Delivery (ArgoCD) Packaged
                the application manifests using Helm Charts for templating
                flexibility. Configured ArgoCD to watch the configuration
                repository. Implemented Sync Waves to ensure the database and
                secrets are ready before the frontend pods launch. 5.
                Observability & Monitoring Deployed the Kube-Prometheus-Stack
                via Helm. Configured Grafana Alloy (OpenTelemetry Collector) to
                scrape metrics from the application and cluster nodes. Set up
                Alertmanager to route critical alerts (e.g., KubeNodeNotReady,
                HighMemoryUsage) directly to a Slack channel.
              </div>
            </Card>
          )}
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Observability & Monitoring
            </h2>
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
            Observability & Monitoring To ensure high availability and rapid
            incident response, I implemented a full observability stack using
            the Kube-Prometheus-Stack and OpenTelemetry. Cluster Health:
            Continuous monitoring of baremetal node resources (CPU, Memory, Disk
            I/O) using Prometheus Node Exporter. Application Performance (APM):
            Utilized Grafana Alloy (OpenTelemetry Collector) to scrape
            application metrics, allowing for visualization of the "Golden
            Signals": Latency: Request duration. Traffic: Requests per second
            (RPS). Errors: Failed HTTP responses (5xx codes). Saturation:
            Resource fullness. Alerting: Configured Alertmanager to route
            critical notifications (e.g., KubeNodeNotReady, PodCrashLoopBackOff)
            directly to a dedicated Slack channel, enabling immediate response
            to outages.
            <br />
            Monitoring Architecture The project moves beyond simple logging by
            implementing a comprehensive observability pipeline: Data Collection
            (Grafana Alloy): Deployed Alloy as a DaemonSet to act as the
            OpenTelemetry Collector. It gathers metrics from the Kubernetes API,
            Node Exporter, and the React application itself. Storage &
            Aggregation (Prometheus): Prometheus scrapes these targets via
            ServiceMonitors defined in Helm charts, retaining time-series data
            for historical analysis. Visualization (Grafana): Custom Dashboards
            provide real-time views into the cluster state. I utilized
            "Infrastructure as Code" to provision these dashboards automatically
            using ConfigMaps. Alerting Pipeline: Alertmanager rules define
            thresholds for anomalies. When triggered, alerts are formatted and
            pushed to Slack via a webhook integration.
          </Card>
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Security & DevSecOps</h2>
            <p className="">
              We adopt a <span className="font-bold">"Shift Left"</span>{" "}
              security philosophy, integrating automated security checks at
              every stage of the CI/CD pipeline to detect vulnerabilities early.
            </p>
            <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
              <li>
                <span className="font-bold">
                  Static Application Security Testing (SAST):{" "}
                </span>
                Code quality and security hotspots are analyzed continuously
                using <span className="font-bold">SonarCloud.</span>
              </li>
              <li>
                <span className="font-bold">Secret Management: </span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    <span className="font-bold">Pre-commit:</span> We utilize{" "}
                    <span className="font-bold">Gitleaks</span> to prevent
                    hardcoded secrets/credentials from entering the codebase.
                  </li>
                  <li>
                    <span className="font-bold">Runtime:</span> Kubernetes
                    secrets are managed via GitOps using
                    <span className="font-bold">Sealed-Secrets</span>, ensuring
                    encryption at rest and safe storage in the git repository.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Supply Chain Security (SCA & SBOM):{" "}
                </span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    We generate Software Bill of Materials (SBOMs) using{" "}
                    <span className="font-bold">Syft</span> to maintain
                    visibility into all components.
                  </li>
                  <li>
                    Dependency vulnerabilities are tracked using{" "}
                    <span className="font-bold">Dependency Check</span>.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Container & Artifact Security:{" "}
                </span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Container images are scanned for CVEs (Common
                    Vulnerabilities and Exposures) during the build process
                    using <span className="font-bold">Trivy</span> and{" "}
                    <span className="font-bold">Grype</span>.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Dynamic Application Security Testing (DAST):{" "}
                </span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Running applications undergo automated penetration testing
                    using <span className="font-bold">OWASP ZAP</span> to catch
                    runtime vulnerabilities.
                  </li>
                </ul>
              </li>
              {/* // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge> */}
            </ul>
            {/* <p className="text-muted-foreground leading-relaxed">
              Following the DevSecOps principles, I integrated security measures
              throughout the CI/CD pipeline. This included implementing image
              scanning for vulnerabilities using tools like Trivy, enforcing
              strict IAM roles and policies for AWS resources, and utilizing
              sealed-secrets to manage sensitive information securely within the
              GitOps workflow. Regular security audits and compliance checks
              were also automated to ensure the application adhered to best
              practices and industry standards.
            </p> */}
          </Card>

          {/* {project.details.results && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.results}
              </p>
            </Card>
          )} */}
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <ul className="leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
              <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">
                    Challenge: Resource Dependency & Race Conditions
                  </span>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      <span className="font-bold">The Issue:</span> During the
                      initial ArgoCD rollout, the application failed to sync
                      because certain Custom Resource Definitions (CRDs) were
                      not yet available when dependent resources tried to
                      initialize.
                    </li>
                    <li>
                      <span className="font-bold">The Solution:</span> I
                      leveraged{" "}
                      <span className="font-bold">ArgoCD Sync Waves</span>
                      (argocd.argoproj.io/sync-wave) and Helm Hooks to enforce a
                      strict deployment order. This ensured that CRDs and
                      infrastructure prerequisites were fully established before
                      the application workload was applied.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    Challenge: The "Secret Zero" Problem in GitOps
                  </span>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      <span className="font-bold">The Issue:</span> Adopting a
                      pure GitOps workflow meant that all configurations needed
                      to be in the repository, but committing raw Kubernetes
                      Secrets is a major security violation.
                    </li>
                    <li>
                      <span className="font-bold">The Solution:</span> I
                      implemented{" "}
                      <span className="font-bold">Sealed Secrets</span>{" "}
                      (asymmetric encryption). This allows me to commit
                      encrypted secrets to the public repository that can only
                      be decrypted by the controller running inside the cluster,
                      maintaining both security and the "Infrastructure as Code"
                      philosophy.
                    </li>
                  </ul>
                </li>

                {/* // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge> */}
              </ul>
              {/* // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge> */}
            </ul>
            {/* <p className="text-muted-foreground leading-relaxed">
              Following the DevSecOps principles, I integrated security measures
              throughout the CI/CD pipeline. This included implementing image
              scanning for vulnerabilities using tools like Trivy, enforcing
              strict IAM roles and policies for AWS resources, and utilizing
              sealed-secrets to manage sensitive information securely within the
              GitOps workflow. Regular security audits and compliance checks
              were also automated to ensure the application adhered to best
              practices and industry standards.
            </p> */}
          </Card>
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
            <ul className="leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
              <li>
                <span className="font-bold">Accelerated Delivery: </span>
                Migrated to a GitOps workflow with ArgoCD, reducing deployment
                lead time by <span className="font-bold">~50%</span> and
                completely eliminating configuration drift and manual errors.
              </li>
              <li>
                <span className="font-bold">Enhanced Security Posture: </span>
                Achieved a "Zero Critical Vulnerabilities" baseline by
                integrating <span className="font-bold">Trivy</span> and{" "}
                <span className="font-bold">Syft</span> into the pipeline,
                blocking non-compliant artifacts before they reach production.
              </li>
              <li>
                <span className="font-bold">Proactive Observability:</span>
                Moved from passive monitoring to active alerting using
                <span className="font-bold">OpenTelemetry</span> and{" "}
                <span className="font-bold">Alertmanager</span>, reducing the
                Mean Time To Detect incidents by providing granular visibility
                into node and application health.
              </li>
              <li>
                <span className="font-bold">High Availability: </span>
                Architected a self-healing Kubernetes deployment strategy that
                maintains service availability during rolling updates.
              </li>
              {/* // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge> */}
            </ul>
            {/* <p className="text-muted-foreground leading-relaxed">
              Following the DevSecOps principles, I integrated security measures
              throughout the CI/CD pipeline. This included implementing image
              scanning for vulnerabilities using tools like Trivy, enforcing
              strict IAM roles and policies for AWS resources, and utilizing
              sealed-secrets to manage sensitive information securely within the
              GitOps workflow. Regular security audits and compliance checks
              were also automated to ensure the application adhered to best
              practices and industry standards.
            </p> */}
          </Card>
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
            <ul className="leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
              <li>
                <span className="font-bold">
                  The Power of Immutable Infrastructure:{" "}
                </span>
                Adopting a strict GitOps workflow demonstrated how treating
                infrastructure as code eliminates "snowflake" servers. It
                ensures that the state of the cluster is always a direct
                reflection of the git repository, making disaster recovery
                trivial.
              </li>
              <li>
                <span className="font-bold">Shifting Security Left: </span>
                Integrating tools like Trivy and SonarCloud taught me that
                security cannot be an afterthought. Automated gates in the
                pipeline are far more effective than manual audits at the end of
                a release cycle.
              </li>
              <li>
                <span className="font-bold">Observability vs. Monitoring:</span>
                I learned that simply having metrics (Prometheus) isn't enough.
                True observability (via OpenTelemetry) is required to understand
                why a system is behaving a certain way, not just that it is
                failing.
              </li>

              {/* // <Badge
                    //   key={tool[0]}
                    //   variant="outline"
                    //   className={`bg-gradient-primary text-primary-foreground px-4 py-2 text-sm ${getTagColor(
                    //     tool[0]
                    //   )}`}
                    // >
                    //   {tool[0]} <span className="font-normal">{tool[1]}</span>
                    // </Badge> */}
            </ul>
            {/* <p className="text-muted-foreground leading-relaxed">
              Following the DevSecOps principles, I integrated security measures
              throughout the CI/CD pipeline. This included implementing image
              scanning for vulnerabilities using tools like Trivy, enforcing
              strict IAM roles and policies for AWS resources, and utilizing
              sealed-secrets to manage sensitive information securely within the
              GitOps workflow. Regular security audits and compliance checks
              were also automated to ensure the application adhered to best
              practices and industry standards.
            </p> */}
          </Card>
          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Future Improvements:</h2>
            <ul className="leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
              <li>
                <span className="font-bold">Chaos Engineering: </span>
                Integrating tools like Trivy and SonarCloud taught me that
                security cannot be an afterthought. Automated gates in the
                pipeline are far more effective than manual audits at the end of
                a release cycle.
              </li>
              <li>
                Refactoring the baremetal provisioning layer with{" "}
                <span className="font-bold">Ansible</span> for full
                infrastructure automation.
              </li>
              <li>
                Implementing{" "}
                <span className="font-bold">
                  Service Level Objectives (SLOs)
                </span>{" "}
                and Error Budgets within Grafana to move towards SRE-based
                alerting.
              </li>
            </ul>
          </Card>

          <Card
            className="p-8 bg-card border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4">How to start:</h2>
            Since this project utilizes Sealed Secrets for GitOps security, the
            configuration files in this repository are encrypted for my specific
            cluster controller. However, you can replicate the deployment using
            the steps below. Environment Configuration You will need a TMDB API
            Key to fetch movie data. Copy the example env file: cp .env.example
            .env Insert your key: VITE_TMDB_API_KEY=12345... 🐳 Option A: Docker
            Compose (Quick Start) For a quick preview of the full stack without
            a Kubernetes cluster: Bash docker-compose up --build -d Access the
            application at http://localhost:3000. ☸️ Option B: Kubernetes
            Deployment This project uses ArgoCD for continuous delivery. To
            verify the manifests or deploy to your own cluster: 1. Bootstrap
            Infrastructure Bash # Install ArgoCD (if not present) kubectl create
            namespace argocd kubectl apply -n argocd -f
            https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
            # Apply the "App of Apps" manifest kubectl apply -f
            k8s/argocd/application.yaml 2. Handling Secrets Note: The secrets in
            /k8s/manifests/sealed-secrets.yaml are encrypted with my cluster's
            public key. To run this on your cluster, you must generate your own
            secret: Bash kubectl create secret generic tmdb-secret \
            --from-literal=api-key=YOUR_KEY \ --dry-run=client -o yaml &gt;
            k8s/manifests/my-secret.yaml 🧪 Running Tests The CI pipeline
            automatically runs these, but you can trigger them manually: Bash
            npm run test:unit # Runs Vitest npm run test:e2e # Runs Playwright
            npm run scan:vuln # Runs Trivy filesystem scan
          </Card>

          {/* {project.details.learning && (
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.learning}
              </p>
            </Card>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail1;
