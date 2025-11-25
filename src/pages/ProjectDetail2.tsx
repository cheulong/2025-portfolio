import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Gitlab,
  ChevronUp,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import moviesFinder from "@/assets/projects/movies-finder.gif";
import moviesFinderDiagram from "@/assets/projects/movies-finder-diagram.png";
import image2 from "@/assets/projects/2/image.png";

import { useEffect, useState } from "react";

const ProjectDetail2 = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // show button after 200px scroll
    };
    // window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      nextjs:
        "bg-slate-600/20 text-slate-700 dark:text-slate-300 border-slate-600/30",
      vitest:
        "bg-lime-600/20 text-lime-700 dark:text-lime-300 border-lime-600/30",
      playwright:
        "bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border-emerald-600/30",
      express:
        "bg-neutral-600/20 text-neutral-700 dark:text-neutral-300 border-neutral-600/30",
      typescript:
        "bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-600/30",
      postgres:
        "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",
      nodejs:
        "bg-green-600/20 text-green-700 dark:text-green-300 border-green-600/30",
      tailwind:
        "bg-cyan-600/20 text-cyan-700 dark:text-cyan-300 border-cyan-600/30",
      reactjs: "bg-sky-500/20 text-sky-600 dark:text-sky-300 border-sky-500/30",
      javascript:
        "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30",
      ec2: "bg-amber-600/20 text-amber-700 dark:text-amber-300 border-amber-600/30",
      rds: "bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-600/30",
      s3: "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30",
      ansible: "bg-red-600/20 text-red-700 dark:text-red-300 border-red-600/30",
      postgresql:
        "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",
      mongodb:
        "bg-green-600/20 text-green-700 dark:text-green-300 border-green-600/30",
    };

    return (
      colorMap[tag.toLowerCase()] ||
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30"
    );
  };

  const goToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  const goToTop = () => {
    const offset = 0; // change if you want a top offset
    window.scrollTo({
      top: 0 + offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={goToTop}
          className=" fixed bottom-5 right-5 hover:opacity-100 opacity-65 w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground"
        >
          <ChevronUp className=" text-gray-200" size={38} />
        </button>
      )}
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
                Monitoring Microservices 3-tier e-commerce app on EKS with
                GitOps
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "argocd",
                  "kubernetes",
                  "docker",
                  "gitlab ci/cd",
                  "prometheus",
                  "grafana",
                  "monitoring",
                  "homelab",
                  "ingress",
                  "helm",
                  "nodejs",
                  "nextjs",
                  "tailwind",
                  "typescript",
                  "expressjs",
                  "postgresql",
                  "mongodb",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`text-muted-foreground transition-colors capitalize ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  disabled
                  // asChild
                  className="text-white bg-blue-500  hover:shadow-glow transition-all"
                >
                  <a
                    href="https://gitlab.com/cheulong-devops/movies-finder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Gitlab className="mr-2" size={18} />
                    View on GitLab
                  </a>
                </Button>
                <Button
                  disabled
                  // asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href="https://movies-finder-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in self-start">
              <div className="relative w-full max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
                <img
                  src={image2}
                  alt="Cheulong Sear"
                  className="relative rounded-2xl shadow-card border border-border w-full"
                />
              </div>
            </div>
            {/* ================================
          ======= Overview ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="font-bold leading-relaxed">
                Project: Monitoring Microservices 3-tier e-commerce app on EKS
                with GitOps
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold"> Overview</span> This project
                showcases the design and implementation of a comprehensive CI/CD
                pipeline for a microservices-based e-commerce application hosted
                on a Kubernetes cluster using GitOps principles. The pipeline
                integrates advanced monitoring, security, and automated testing
                to ensure robust and reliable deployments.
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold">Goal</span> The primary goal of this
                project is to establish a fully automated CI/CD pipeline that
                enhances deployment efficiency, ensures application stability,
                and provides end-to-end observability for a microservices-based
                e-commerce application.
              </p>
              <br />
              <p className="text-muted-foreground">
                <span className="font-bold">Tech Stack & Tools</span>
                <ul className="list-disc list-inside leading-relaxed">
                  <li>
                    <span className="font-bold">Infrastructure & GitOps:</span>{" "}
                    Kubernetes, Docker, Helm, ArgoCD, Baremetal Homelab
                  </li>
                  <li>
                    <span className="font-bold">CI/CD & Release:</span> GitLab
                    CI/CD, Release-it, Commitizen, Husky, Lint-Staged
                  </li>
                  <li>
                    <span className="font-bold">Observability Stack:</span>{" "}
                    OpenTelemetry, Prometheus, Grafana, Alloy, Alertmanager,
                    Slack
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
              <p className="text-muted-foreground">
                <span className="font-bold">Key Results & Achievements</span>
                <ul className="list-disc list-inside">
                  <li className="">
                    <span className="font-bold">Robust CI/CD Pipeline:</span>{" "}
                    Established a fully automated CI/CD pipeline using GitLab
                    CI/CD and ArgoCD, enabling seamless application deployment
                    and updates with{" "}
                    <span className="font-bold">zero downtime</span>.
                  </li>
                  <li>
                    <span className="font-bold">
                      Comprehensive Observability:
                    </span>{" "}
                    Implemented a full-stack observability solution using
                    <span className="font-bold">
                      {" "}
                      OpenTelemetry, Prometheus
                    </span>
                    , and <span className="font-bold">Grafana</span> to monitor
                    application performance and infrastructure health in real
                    time.
                  </li>
                  <li>
                    <span className="font-bold">
                      Enhanced Security Posture:
                    </span>{" "}
                    Integrated DevSecOps practices into the CI/CD pipeline,
                    utilizing tools like{" "}
                    <span className="font-bold">Trivy, OWASP ZAP,</span> and{" "}
                    <span className="font-bold">Gitleaks</span> to identify and
                    mitigate security vulnerabilities early in the development
                    lifecycle.
                  </li>
                  <li>
                    <span className="font-bold">
                      Automated Testing Framework:
                    </span>{" "}
                    Developed an automated testing framework using{" "}
                    <span className="font-bold">Playwright</span> and{" "}
                    <span className="font-bold">Vitest</span>, ensuring high
                    code quality and reliability through rigorous unit and
                    end-to-end testing.
                  </li>
                  <li>
                    <span className="font-bold">GitOps Implementation:</span>{" "}
                    Leveraged GitOps principles with ArgoCD to manage
                    infrastructure and application configurations, ensuring a
                    single <span className="font-bold">source of truth</span>
                    and enabling easy{" "}
                    <span className="font-bold">rollbacks</span> and{" "}
                    <span className="font-bold">versioning</span>.
                  </li>
                </ul>
              </p>
            </Card>
            {/* ================================
          ======= Agenda ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-bold mb-4">Agenda</h2>
              <ol className="space-y-3">
                {[
                  ["Architecture Overview", "architecture"],
                  ["Technologies Used", "technologies"],
                  ["Implementation Journey", "ImplementationJourney"],
                  ["Observability & Monitoring", "Observability"],
                  ["Security & DevSecOps", "Security"],
                  ["Challenges & Solutions", "Challenges"],
                  ["Results & Impact", "Results"],
                  ["Key Learnings", "Key"],
                  ["Future Improvements", "Future"],
                  ["Getting Started & Installation", "installation"],
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </span>
                    <button
                      className="pt-1 underline font-black text-blue-400 hover:text-blue-500"
                      onClick={() => goToSection(item[1])}
                    >
                      {item[0]}
                    </button>
                  </li>
                ))}
              </ol>
            </Card>
            {/* ================================
          ======= Architecture Overview ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.2s" }}
              id="architecture"
            >
              <h2 className="text-2xl font-bold mb-4">Architecture Overview</h2>
              <p className="text-muted-foreground leading-relaxed indent-6">
                The architecture of this project is designed to support a
                microservices-based e-commerce application deployed on a
                Kubernetes cluster using GitOps principles. The architecture
                consists of several key components that work together to ensure
                seamless deployment, monitoring, and management of the
                application.
              </p>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  1. Infrastructure & GitOps (Kubernetes, ArgoCD, Helm) &nbsp;
                </h3>
                <br />
                <p className="text-muted-foreground indent-6">
                  The application is hosted on a Kubernetes cluster deployed on
                  a baremetal Homelab environment.{" "}
                  <span className="font-bold">Helm</span> is used as the package
                  manager to define, install, and upgrade the application
                  components. <span className="font-bold">ArgoCD</span>{" "}
                  implements GitOps principles, continuously synchronizing the
                  desired state defined in Git with the actual state in the
                  cluster.
                </p>
                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  2. Continuous Integration (GitLab CI/CD) &nbsp;
                </h3>
                <br />
                <ul className="text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>
                    <span className="font-bold">Automated Testing:</span> GitLab CI/CD pipelines are configured to
                    run unit tests (using Vitest) and end-to-end tests (using
                    Playwright) to ensure code quality and functionality.
                  </li>
                  <li>
                    <span className="font-bold">Security Scanning:</span> The pipeline integrates security tools
                    like Trivy and OWASP ZAP to scan for vulnerabilities in the
                    application code and container images.
                  </li>
                  <li>
                    <span className="font-bold">Image Building & Tagging:</span> Upon successful tests and scans,
                    Docker images are built, tagged with semantic versioning,
                    and pushed to a container registry.
                  </li>
                  <li>
                    <span className="font-bold">GitOps Trigger:</span> The pipeline updates the Helm chart values
                    in the Git repository with the new image tag, triggering
                    ArgoCD to deploy the updated application.
                  </li>
                  <li>
                    <span className="font-bold">Release Automation:</span> Release-it automates the release
                    process, managing version bumps and changelogs.
                  </li>
                  <li>
                    <span className="font-bold">Notify via Slack:</span> The pipeline sends notifications to a
                    Slack channel about the build and deployment status.
                  </li>
                </ul>
                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  3. Deployment & Self-Healing (Kubernetes & ArgoCD) &nbsp;
                </h3>
                <p className="text-muted-foreground">
                  The deployment process is entirely automated:
                </p>
                <br />
                <ul className="text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>
                    <span className="font-bold">Deployment Flow:</span> ArgoCD
                    detects the new image tag, initiates a synchronous update,
                    and uses <span className="font-bold">Sealed Secrets</span>{" "}
                    to securely inject runtime configuration.
                  </li>
                  <li>
                    <span className="font-bold">Self-Healing:</span> Kubernetes
                    handles pod scheduling and self-healing, while ArgoCD
                    ensures any manual changes to the environment are reverted
                    to match the desired state in Git.
                  </li>
                </ul>
                <img
                  src={moviesFinderDiagram}
                  alt="Architecture Diagram"
                  className="mt-4 relative rounded-2xl shadow-card border border-border w-full"
                />
                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  4. Observability & Monitoring (OpenTelemetry, Prometheus,
                  Grafana, Alertmanager, Slack) &nbsp;
                </h3>
                <br />
                <p className="text-muted-foreground">
                  <ul className="text-muted-foreground list-disc list-inside leading-relaxed">
                    <li>
                      <span className="font-bold">Metrics Collection:</span> The
                      application and infrastructure emit metrics using
                      OpenTelemetry, which are collected by Prometheus.
                    </li>
                    <li>
                      <span className="font-bold">Visualization:</span> Grafana
                      is used to create dashboards for visualizing application
                      performance and infrastructure health.
                    </li>
                    <li>
                      <span className="font-bold">Alerting:</span> Alertmanager
                      is configured to send alerts to Slack based on predefined
                      thresholds, enabling proactive issue resolution.
                    </li>
                    <li>
                      <span className="font-bold">Tracing & Logging:</span>{" "}
                      OpenTelemetry also provides distributed tracing and
                      logging capabilities, helping to diagnose performance
                      bottlenecks and errors.
                    </li>
                    <li>
                      <span className="font-bold">Grafana Alloy</span> is used as an OpenTelemetry Collector to
                      aggregate and export telemetry data to various backends.
                    </li>
                  </ul>
                </p>
              </div>
            </Card>
            {/* ================================
          ======= Technologies Used ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              id="technologies"
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  CI/CD & GitOps:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools that automate the deployment and delivery pipeline.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-3 list-disc list-inside">
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
                <p className="text-muted-foreground text-md font-light italic">
                  Tools used to run, manage, and provision the environment.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    // ["Terraform", "(Infrastructure as Code)"],
                    ["Kubernetes", "(Container Orchestration)"],
                    ["Docker", "(Containerization)"],
                    ["Helm", "(Package Manager for Kubernetes)"],
                    ["Homelab (baremetal)", "(Physical computer hardware)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Monitoring & Observability:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools used to visualize data, collect metrics, and alert on
                  issues.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
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
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Security (DevSecOps) & SBOM (Software Bill of
                  Materials):&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools for scanning, vulnerability management, and supply chain
                  security.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
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
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Security (DevSecOps) & SBOM (Software Bill of
                  Materials):&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools for scanning, vulnerability management, and supply chain
                  security.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
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
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Frontend & Development Stack:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  The core technologies used to build the application (these
                  were incorrectly listed under "Testing").
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["ReactJs", "(Frontend Library)"],
                    ["Tailwind", "(CSS Framework)"],
                    ["Vite", "(Frontend Build Tool)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Testing & QA:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools used to verify the code actually works.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Playwright", "(End-to-End Testing)"],
                    ["Vitest", "(Unit Testing)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  Code Quality & Git Workflow:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools that enforce coding standards and commit discipline.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Husky", "(Git hooks)"],
                    ["Lint-staged", "(Run linters on git staged files)"],
                    ["Commitlint", "(Lint commit messages)"],
                    ["Commitizen", "(Commit message formatting helper)"],
                  ].map((tool) => (
                    <li className="font-bold">
                      {tool[0]} <span className="font-normal">{tool[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card> */}
            {/* ================================
          ======= Implementation Journey ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.4s" }}
              id="ImplementationJourney"
            >
              <h2 className="text-2xl font-bold mb-4">
                Implementation Journey
              </h2>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  1.&nbsp;Infrastructure & Cluster Bootstrapping
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Provisioned a baremetal Kubernetes cluster (Homelab)
                    ensuring networking connectivity.
                  </li>
                  <li>
                    Configured <span className="font-bold">MetalLB</span> (Layer
                    2 mode) to provide LoadBalancer IP addresses for the private
                    network.
                  </li>
                  <li>
                    Installed the{" "}
                    <span className="font-bold">NGINX Ingress Controller</span>{" "}
                    to manage external access to services.
                  </li>
                </ul>
                <img
                  src={code}
                  alt={code}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  2.&nbsp;Containerization (Docker)
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Created a multi-stage{" "}
                    <span className="font-bold">Dockerfile</span> for the React
                    application to optimize image size.
                  </li>
                  <li>Stage 1: Build the artifact using Node.js.</li>
                  <li>
                    Stage 2: Serve static files using Nginx-alpine (reducing
                    image size from ~800MB to ~20MB).
                  </li>
                </ul>
                <img
                  src={code1}
                  alt={code1}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  3.&nbsp;The CI Pipeline (GitLab CI)
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Designed a pipeline with distinct stages: Prepare -&gt; Sast
                    -&gt; Scan Test -&gt; Build -&gt; Security -&gt; Dast Scan
                    -&gt; Deploy -&gt; Release -&gt; Slack Notify -&gt; Clean
                    Up.
                  </li>
                  <li>
                    <span className="font-bold">Testing:</span> Integrated{" "}
                    <span className="font-bold">Vitest</span> for unit tests and{" "}
                    <span className="font-bold">Playwright</span> for E2E
                    testing.
                  </li>
                  <li>
                    <span className="font-bold">Security:</span> Added{" "}
                    <span className="font-bold">Trivy</span> to scan the
                    filesystem and <span className="font-bold">Gitleaks</span>{" "}
                    to check for hardcoded secrets before the build.
                  </li>
                  <li>
                    <span className="font-bold">Release:</span> configured{" "}
                    <span className="font-bold">Release-it</span> to automate
                    semantic versioning and changelog generation.
                  </li>
                </ul>
                <div className="flex flex-wrap">
                  <img
                    src={image1_9}
                    alt={image1_9}
                    className="mt-1 shadow-card max-w-2xl ml-6"
                  />
                  <img
                    src={image1_10}
                    alt={image1_10}
                    className="mt-1 shadow-card max-w-2xl ml-6"
                  />
                  <img
                    src={image1_11}
                    alt={image1_11}
                    className="mt-1 shadow-card max-w-2xl ml-6"
                  />
                  <img
                    src={image1_12}
                    alt={image1_12}
                    className="mt-1 shadow-card max-w-2xl ml-6"
                  />
                  <img
                    src={image1_13}
                    alt={image1_13}
                    className="mt-1 shadow-card max-w-2xl ml-6"
                  />
                </div>
                <p className="text-muted-foreground text-md font-light italic mt-2">
                  Note: This pipeline still can be optimized and improved over time.
                </p>
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  4.&nbsp;GitOps Delivery (ArgoCD)
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Packaged the application manifests using{" "}
                    <span className="font-bold">Helm Charts</span> for
                    templating flexibility.
                  </li>
                  <li>
                    Configured <span className="font-bold">ArgoCD</span> to
                    watch the configuration repository.
                  </li>
                  <li>
                    Implemented <span className="font-bold">Sync Waves</span> to
                    ensure the secrets are ready before the
                    frontend pods launch.
                  </li>
                </ul>
                <img
                  src={image1_14}
                  alt={image1_14}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <img
                  src={image1_15}
                  alt={image1_15}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <img
                  src={image1_16}
                  alt={image1_16}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  5.&nbsp;Observability & Monitoring
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Deployed the{" "}
                    <span className="font-bold">Kube-Prometheus-Stack</span> via
                    Helm.
                  </li>
                  <li>
                    Configured <span className="font-bold">Grafana Alloy
                    (OpenTelemetry Collector)</span> to scrape metrics from the
                    application and cluster nodes.
                  </li>
                  <li>
                    Set up <span className="font-bold">Alertmanager</span> to
                    route critical alerts (e.g., KubeNodeNotReady,
                    HighMemoryUsage) directly to a Slack channel.
                  </li>
                  <li>
                    Custom Grafana dashboards display{" "}
                    <span className="font-bold">"Golden Signals"
                    (Latency, Traffic, Errors, Saturation)</span>.
                  </li>
                </ul>
              </div>
            </Card> */}
            {/* ================================
          ======= Observability & Monitoring ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Observability"
            >
              <h2 className="text-2xl font-bold mb-4">
                Observability & Monitoring
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To ensure high availability and rapid incident response, I
                implemented a full observability stack using the
                Kube-Prometheus-Stack and OpenTelemetry.
              </p>
              <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">Cluster Health:</span> Continuous
                  monitoring of baremetal node resources (CPU, Memory, Disk I/O)
                  using{" "}
                  <span className="font-bold">Prometheus Node Exporter</span>.
                </li>
                <img
                  src={image1_3}
                  alt={image1_3}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <li className="leading-relaxed">
                  <span className="font-bold">
                    Application Performance Monitoring (APM):
                  </span>{" "}
                  Utilized <span className="font-bold">Grafana Alloy</span>
                  (OpenTelemetry Collector) to scrape application metrics,
                  allowing for visualization of the "Golden Signals":
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      <span className="font-bold">Latency:</span> Request
                      duration.
                    </li>
                    <li>
                      <span className="font-bold">Traffic:</span> Requests per
                      second (RPS).
                    </li>
                    <li>
                      <span className="font-bold">Errors:</span> Failed HTTP
                      responses (5xx codes).
                    </li>
                    <li>
                      <span className="font-bold">Saturation:</span> Resource
                      fullness.
                    </li>
                  </ul>
                </li>
                <img
                  src={image1_7}
                  alt={image1_7}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <img
                  src={image1_8}
                  alt={image1_8}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <img
                  src={image1_0}
                  alt={image1_0}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <img
                  src={image1_2}
                  alt={image1_2}
                  className="mt-1 shadow-card max-w-2xl ml-6"
                />
                <br />
                <li>
                  <span className="font-bold">Alerting:</span> Configured{" "}
                  <span className="font-bold">Alertmanager</span> to route
                  critical notifications (e.g., KubeNodeNotReady,
                  PodCrashLoopBackOff) directly to a dedicated{" "}
                  <span className="font-bold">Slack</span> channel, enabling
                  immediate response to outages.
                </li>
              </ul>
              <br />
              <img
                src={image1_5}
                alt={image1_5}
                className="mt-1 shadow-card max-w-2xl ml-6"
              />
              <br />
              <img
                src={image1_4}
                alt={image1_4}
                className="mt-1 shadow-card max-w-2xl ml-6"
              />
            </Card> */}
            {/* ================================
          ======= Security & DevSecOps ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Security"
            >
              <h2 className="text-2xl font-bold mb-4">Security & DevSecOps</h2>
              <p className="text-muted-foreground">
                We adopt a <span className="font-bold">"Shift Left"</span>{" "}
                security philosophy, integrating automated security checks at
                every stage of the CI/CD pipeline to detect vulnerabilities
                early.
              </p>
              <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
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
                      <span className="font-bold"> Sealed-Secrets</span>,
                      ensuring encryption at rest and safe storage in the git
                      repository.
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
                      using <span className="font-bold">OWASP ZAP</span> to
                      catch runtime vulnerabilities.
                    </li>
                  </ul>
                </li>
              </ul>
            </Card> */}
            {/* ================================
          ======= Challenges & Solutions ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Challenges"
            >
              <h2 className="text-2xl font-bold">
                Challenges & Solutions
              </h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center list-disc list-inside">
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  <li>
                    <span className="font-bold">
                      Challenge: The "Secret Zero" Problem in GitOps
                    </span>
                    <ul className="list-disc list-inside ml-6">
                      <li>
                        <span className="font-bold">The Issue:</span> Adopting a
                        pure GitOps workflow meant that all configurations
                        needed to be in the repository, but committing raw
                        Kubernetes Secrets is a major security violation.
                      </li>
                      <li>
                        <span className="font-bold">The Solution:</span> I
                        implemented{" "}
                        <span className="font-bold">Sealed Secrets</span>{" "}
                        (asymmetric encryption). This allows me to commit
                        encrypted secrets to the public repository that can only
                        be decrypted by the controller running inside the
                        cluster, maintaining both security and the
                        "Infrastructure as Code" philosophy.
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            </Card> */}
            {/* ================================
          ======= Results & Impact ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Results"
            >
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
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
              </ul>
            </Card> */}
            {/* ================================
          ======= Key Learnings ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Key"
            >
              <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">
                    The Power of Immutable Infrastructure:{" "}
                  </span>
                  Adopting a strict GitOps workflow demonstrated how treating
                  infrastructure as code eliminates snowflake servers. It
                  ensures that the state of the cluster is always a direct
                  reflection of the git repository, making disaster recovery
                  trivial.
                </li>
                <li>
                  <span className="font-bold">Shifting Security Left: </span>
                  Integrating tools like Trivy and SonarCloud taught me that
                  security cannot be an afterthought. Automated gates in the
                  pipeline are far more effective than manual audits at the end
                  of a release cycle.
                </li>
                <li>
                  <span className="font-bold">
                    Observability vs. Monitoring:
                  </span>
                  I learned that simply having metrics (Prometheus) isn't
                  enough. True observability (via OpenTelemetry) is required to
                  understand why a system is behaving a certain way, not just
                  that it is failing.
                </li>
              </ul>
            </Card> */}
            {/* ================================
          ======= Future Improvements ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Future"
            >
              <h2 className="text-2xl font-bold mb-4">Future Improvements:</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">Chaos Engineering: </span>
                  Integrating tools like Trivy and SonarCloud taught me that
                  security cannot be an afterthought. Automated gates in the
                  pipeline are far more effective than manual audits at the end
                  of a release cycle.
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
            </Card> */}
            {/* ================================
          ======= Getting Started & Installation  ====== 
          ====================================*/}
            {/* <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="installation"
            >
              <h2 className="text-2xl font-bold mb-4">
                Getting Started & Installation:
              </h2>
              <div>
                <p className="text-muted-foreground">
                  Since this project utilizes Sealed Secrets for GitOps
                  security, the configuration files in this repository are
                  encrypted for my specific cluster controller. However, you can
                  replicate the deployment using the steps below.
                </p>
                <br />
                <p className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                  git clone
                  https://gitlab.com/cheulong-devops/movies-finder/new-movies-finder-frontend.git
                </p>
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  Environment Configuration
                </h3>
                <p className="text-muted-foreground">You will need a TMDB API Key to fetch movie data.</p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      <span className="text-gray-500"># For Bash</span>
                      <br />
                      export VITE_TMDB_API_KEY=12345...
                      <br />
                      docker compose -f compose.prod.yml up --build -d
                    </code>
                  </pre>
                </div>
                <br />
                <p className="leading-relaxed text-muted-foreground">Clean up</p>
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      docker compose -f compose.prod.yml down --rmi all
                    </code>
                  </pre>
                </div>
                <br />
                <h3 className="text-lg font-semibold mb-2">Running Tests</h3>
                <p className="text-muted-foreground">
                  The CI pipeline automatically runs these, but you can trigger
                  them manually:
                </p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      npm run test{" "}
                      <span className="text-gray-500"># Runs Vitest</span>
                      <br />
                      npm run playwright{" "}
                      <span className="text-gray-500"># Runs Playwright</span>
                      <br />
                      npm run scan:trivy:fs{" "}
                      <span className="text-gray-500">
                        # Runs Trivy filesystem scan
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail2;
