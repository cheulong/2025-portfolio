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
import diagram from "@/assets/projects/3/diagram.png";
import image3 from "@/assets/projects/3/image.png";
import image3_1 from "@/assets/projects/3/image1.png";
import image3_2 from "@/assets/projects/3/image2.png";
import gitlab from "@/assets/projects/3/gitlab.png";

import { useEffect, useState } from "react";

const ProjectDetail3 = () => {
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
                Nextjs Inventory Management Dashboard & Deploy on AWS
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "NextJs",
                  "Vitest",
                  "Playwright",
                  "Express",
                  "TypeScript",
                  "Gitlab ci/cd",
                  "Postgres",
                  "NodeJs",
                  "Tailwind",
                  "ReactJs",
                  "Javascript",
                  "EC2",
                  "RDS",
                  "S3",
                  "AWS",
                  "Terraform",
                  "Ansible",
                ].map((tag) => (
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
                <Button
                  // asChild
                  className="text-white bg-blue-500  hover:shadow-glow transition-all"
                >
                  <a
                    href="https://gitlab.com/cheulong-devops/inventory-management-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Gitlab className="mr-2" size={18} />
                    View on GitLab
                  </a>
                </Button>
                {/* <Button
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
                </Button> */}
              </div>
            </div>

            <div className="relative animate-fade-in self-start">
              <div className="relative w-full max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
                <img
                  src={image3}
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
                Project: Nextjs Inventory Management Dashboard & Deploy on AWS
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold"> Overview</span> This project
                involves developing a full-featured Inventory Management
                Dashboard using Next.js for the frontend and Express.js for the
                backend API. The application is designed to show the data of
                inventory items, manage stock levels, suppliers. The entire
                solution is deployed on AWS using Amplify for hosting frontend
                EC2 for hosting the application servers and RDS for the
                PostgreSQL database, ensuring scalability, reliability, and
                security.
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold">Goal</span> The primary goal of this
                project is to create a robust and user-friendly inventory
                management system that allows businesses to efficiently track
                their stock levels, manage suppliers. Additionally, deploying
                the application on AWS aims to leverage cloud infrastructure for
                high availability and performance.
              </p>
              <br />
              <p className="text-muted-foreground">
                <span className="font-bold">Tech Stack & Tools</span>
                <ul className="list-disc list-inside leading-relaxed">
                  <li>
                    <span className="font-bold">Infrastructure:</span> AWS EC2,
                    AWS RDS, AWS S3, AWS Amplify, Terraform, Ansible
                  </li>
                  <li>
                    <span className="font-bold">CI/CD & Release:</span> GitLab
                    CI/CD, Commitizen, Husky, Lint-Staged
                  </li>
                  <li>
                    <span className="font-bold">Observability Stack:</span> AWS
                    CloudWatch
                  </li>
                  {/* <li>
                    <span className="font-bold">Security (DevSecOps):</span>{" "}
                    Trivy, OWASP ZAP, Gitleaks, Syft (SBOM)
                  </li> */}
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
                    <span className="font-bold">
                      Comprehensive Inventory Management:
                    </span>{" "}
                    Developed a full-featured dashboard with capabilities for
                    tracking stock levels, managing suppliers.
                  </li>
                  <li>
                    <span className="font-bold">Robust CI/CD Pipeline:</span>{" "}
                    Implemented a CI/CD pipeline using GitLab CI/CD that
                    automates testing, security scanning, and deployment to AWS
                    Amplify and EC2.
                  </li>
                  <li>
                    <span className="font-bold">Infrastructure as Code:</span>{" "}
                    Used Terraform and Ansible to provision and manage AWS
                    resources, ensuring reproducibility and version control of
                    the infrastructure.
                  </li>
                  {/* <li>
                    <span className="font-bold">
                      Enhanced Security Posture:
                    </span>{" "}
                    Integrated DevSecOps practices with tools like Trivy, OWASP
                    ZAP, and Gitleaks to ensure the application and
                    infrastructure are secure against vulnerabilities.
                  </li> */}
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
                  // ["Observability & Monitoring", "Observability"],
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
                The architecture of this Inventory Management Dashboard is
                designed to ensure scalability, reliability, and security while
                leveraging AWS cloud services. The architecture can be broken
                down into several key components:
              </p>
              <br />
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  1. Infrastructure & Deployment on AWS &nbsp;
                </h3>
                <br />
                <p className="text-muted-foreground leading-relaxed">
                  The entire application is hosted on AWS to take advantage of
                  its robust cloud infrastructure:
                  <ul className=" list-disc list-inside">
                    <li>
                      <span className="font-bold">Frontend:</span> The Next.js
                      frontend is deployed using{" "}
                      <span className="font-bold">AWS Amplify</span>, which
                      provides a scalable and managed hosting solution.
                    </li>
                    <li>
                      <span className="font-bold">Backend API:</span> The
                      Express.js backend runs on an{" "}
                      <span className="font-bold">AWS EC2</span> instance,
                    </li>
                    <li>
                      <span className="font-bold">Database:</span> Inventory
                      data is stored in a managed{" "}
                      <span className="font-bold">AWS RDS (PostgreSQL)</span>,
                      ensuring high availability and automated backups.
                    </li>
                  </ul>
                  <img
                    src={diagram}
                    alt="Architecture Diagram"
                    className="mt-4 relative rounded-2xl shadow-card border border-border w-full"
                  />
                </p>
                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  2. Database model diagram
                </h3>
                <img
                  src={image3_2}
                  alt="Architecture Diagram"
                  className="mt-4 relative rounded-2xl shadow-card border border-border w-full"
                />
                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  3. CI/CD Pipeline (GitLab CI/CD) &nbsp;
                </h3>
                <br />
                <ul className="text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>
                    <span className="font-bold">Automated Testing:</span> The
                    CI/CD pipeline includes stages for running unit tests with
                    <span className="font-bold"> Vitest</span> and end-to-end
                    tests with <span className="font-bold">Playwright</span> to
                    ensure code quality.
                  </li>
                  {/* <li>
                    <span className="font-bold">Security Scanning:</span> Tools
                    like <span className="font-bold">Trivy</span> and{" "}
                    <span className="font-bold">OWASP ZAP</span> are integrated
                    into the pipeline to scan for vulnerabilities in the code
                    and dependencies.
                  </li> */}
                  <li>
                    <span className="font-bold">Automated Deployment:</span> On
                    successful tests and scans, the pipeline automatically
                    deploys the frontend to{" "}
                    <span className="font-bold">AWS Amplify</span> and the
                    backend to the EC2 instance.
                  </li>
                  {/* <li>
                    <span className="font-bold">Release Management:</span> The
                    pipeline uses <span className="font-bold">Release-it</span>{" "}
                    for automated versioning and changelog generation based on
                    conventional commit messages.
                  </li> */}
                </ul>
                <img
                  src={gitlab}
                  alt="Architecture Diagram"
                  className="mt-4 relative rounded-2xl shadow-card border border-border w-full"
                />
                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  4. Automated Deployment & Configuration Management &nbsp;
                </h3>
                <br />
                <ul className="text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>
                    <span className="font-bold">Infrastructure as Code:</span>{" "}
                    <span className="font-bold">Terraform</span> is used to
                    provision and manage AWS resources, ensuring that the
                    infrastructure is version-controlled and reproducible.
                  </li>
                  <li>
                    <span className="font-bold">Configuration Management:</span>{" "}
                    <span className="font-bold">Ansible</span> automates the
                    configuration of the EC2 instance, including installing
                    necessary packages, setting up the Node.js environment, and
                    deploying the backend application.
                  </li>
                </ul>

                <br />
                <h3 className="text-lg font-semibold flex text-center">
                  5. Observability & Monitoring &nbsp;
                </h3>
                <br />
                <p className="text-muted-foreground">
                  <ul className="text-muted-foreground list-disc list-inside leading-relaxed">
                    <li>
                      <span className="font-bold">AWS CloudWatch</span> is used
                      for monitoring application performance, logging, and
                      setting up alerts for critical issues.
                    </li>
                  </ul>
                </p>
              </div>
            </Card>
            {/* ================================
          ======= Technologies Used ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              id="technologies"
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-col flex-wrap align-items-center">
                <h3 className="text-lg font-semibold flex text-center">
                  CI/CD:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools that automate the deployment and delivery pipeline.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-3 list-disc list-inside">
                  {[
                    [
                      "GitLab CI/CD",
                      "(Continuous Integration/Continuous Deployment)",
                    ],
                    // ["Release-it", "(Automated Releases)"],
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
                  Infrastructure & Deployment:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools used to run, manage, and provision the environment.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["AWS EC2", "(Virtual Servers)"],
                    ["AWS RDS", "(Managed Database Service)"],
                    ["AWS S3", "(Object Storage Service)"],
                    ["AWS Amplify", "(Frontend Hosting Service)"],
                    ["Terraform", "(Infrastructure as Code)"],
                    ["Ansible", "(Configuration Management)"],
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
                  Observability & Monitoring:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Tools used to visualize data, collect metrics, and alert on
                  issues.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[["AWS CloudWatch", "(Monitoring & Logging Service)"]].map(
                    (tool) => (
                      <li className="font-bold">
                        {tool[0]} <span className="font-normal">{tool[1]}</span>
                      </li>
                    )
                  )}
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
                    // ["Trivy", "(Container scanning)"],
                    // ["Grype", "(Vulnerability scanner)"],
                    // ["Syft", "(Generating Software Bill of Materials)"],
                    // ["OWASP ZAP", "(Web app security scanner)"],
                    ["Gitleaks", "(Detecting hardcoded secrets)"],
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
                  Frontend & Backend Technologies:&nbsp;
                </h3>
                <p className="text-muted-foreground text-md font-light italic">
                  Core technologies used to build the application.
                </p>
                <ul className="text-muted-foreground flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  {[
                    ["Next.js", "(Frontend Framework)"],
                    ["React.js", "(UI Library)"],
                    ["Tailwind CSS", "(Styling Framework)"],
                    ["TypeScript", "(Programming Language)"],
                    ["Node.js", "(Runtime Environment)"],
                    ["Express.js", "(Backend Framework)"],
                    ["PostgreSQL", "(Database)"],
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
                    ["Vitest", "(Unit Testing Framework)"],
                    ["Playwright", "(End-to-End Testing Framework)"],
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
                  Code Quality & Commit Discipline:&nbsp;
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
            </Card>
            {/* ================================
          ======= Implementation Journey ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.4s" }}
              id="ImplementationJourney"
            >
              <h2 className="text-2xl font-bold mb-4">
                Implementation Journey
              </h2>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  1.&nbsp;Setup Repository & Gitlab CI/CD
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Initialized a frontend repository using{" "}
                    <span className="font-bold">Next.js</span> with TypeScript
                    support.
                  </li>
                  <li>
                    Created a backend repository using{" "}
                    <span className="font-bold">Express.js</span> with
                    TypeScript.
                  </li>
                  <li>
                    Configured <span className="font-bold">ESLint</span> and{" "}
                    <span className="font-bold">Prettier</span> for consistent
                    code formatting and linting across both repositories.
                  </li>
                  <li>
                    Set up <span className="font-bold">Husky</span> and{" "}
                    <span className="font-bold">Lint-Staged</span> to enforce
                    pre-commit hooks for linting and formatting.
                  </li>
                  <li>
                    Established a branching strategy with protected branches for
                    main and develop.
                  </li>
                  <li>
                    Configured GitLab CI/CD pipelines for both repositories to
                    automate testing, building, and deployment processes.
                  </li>
                  <li>
                    Install Vitest for unit testing in both frontend and backend
                    repositories.
                  </li>
                </ul>

                <br />
                <h3 className="text-lg font-semibold mb-2">
                  2.&nbsp;Frontend & Backend Development
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Developed core features of the inventory management system,
                    including product listing, stock tracking, supplier
                    management.
                  </li>
                  <li>
                    Implemented RESTful API endpoints in the Express.js backend
                    to handle CRUD operations for inventory items and suppliers.
                  </li>
                  <li>
                    Integrated frontend with backend APIs using Axios for data
                    fetching and state management.
                  </li>
                  <li>
                    Ensured responsive design and accessibility compliance using
                    Tailwind CSS.
                  </li>
                </ul>
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  3.&nbsp;Database Design & Integration
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Designed a relational database schema for PostgreSQL to
                    efficiently store inventory data, supplier information, and
                    transaction records.
                  </li>
                  <li>
                    Implemented database connection and query logic in the
                    Express.js backend using Prisma ORM.
                  </li>
                  <li>
                    Set up AWS RDS instance for PostgreSQL with automated
                    backups and high availability configurations.
                  </li>
                </ul>
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  4.&nbsp;Testing & Quality Assurance
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Wrote unit tests for frontend components using Vitest to
                    ensure individual functionalities work as expected.
                  </li>
                  <li>
                    Developed end-to-end tests with Playwright to simulate user
                    interactions and validate overall application workflows.
                  </li>
                  <li>
                    Integrated SonarCloud into the CI/CD pipeline for continuous
                    code quality and security analysis.
                  </li>
                </ul>
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  5.&nbsp;Deployment & Infrastructure Management
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  <li>
                    Used Terraform to provision AWS resources, including EC2,
                    RDS, S3, and Amplify.
                  </li>
                  <li>
                    Configured Ansible playbooks to automate the setup and
                    deployment of the Express.js backend on the EC2 instance.
                  </li>
                  <li>
                    Set up AWS Amplify to host and deploy the Next.js frontend
                    application.
                  </li>
                </ul>
                <br />
                <h3 className="text-lg font-semibold mb-2">
                  6.&nbsp;Security Enhancements
                </h3>
                <ul className="text-muted-foreground list-disc list-inside ml-6">
                  {/* <li>
                    Integrated Trivy and OWASP ZAP into the CI/CD pipeline for
                    vulnerability scanning of code and dependencies.
                  </li> */}
                  <li>
                    Implemented Gitleaks to detect and prevent hardcoded secrets
                    in the codebase.
                  </li>
                  {/* <li>
                    Generated Software Bill of Materials (SBOM) using Syft to
                    enhance supply chain security.
                  </li> */}
                </ul>
                {/* <h3 className="text-lg font-semibold mb-2">
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
                </ul> */}
              </div>
            </Card>
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
            <Card
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
                    {/* <li>
                      <span className="font-bold">Runtime:</span> Kubernetes
                      secrets are managed via GitOps using
                      <span className="font-bold"> Sealed-Secrets</span>,
                      ensuring encryption at rest and safe storage in the git
                      repository.
                    </li> */}
                  </ul>
                </li>
                {/* <li>
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
                </li> */}
                {/* <li>
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
                </li> */}
                {/* <li>
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
                </li> */}
              </ul>
            </Card>
            {/* ================================
          ======= Challenges & Solutions ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Challenges"
            >
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center list-disc list-inside">
                <ul className="flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                  <li>
                    <span className="font-bold">
                      Pipeline slow due to node_modules reinstallation:
                    </span>
                    <ul className="list-disc list-inside ml-6">
                      <li>
                        <span className="font-bold">The Challenge:</span> Each
                        CI pipeline run was taking an excessive amount of time
                        because the entire <code>node_modules</code> directory
                        had to be reinstalled from scratch.
                      </li>
                      <li>
                        <span className="font-bold">The Solution:</span> By
                        caching the <code>node_modules</code> directory between
                        pipeline runs using GitLab CI's caching mechanism, we
                        significantly reduced build times.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      Keeping Nodejs Server Restart when crashing:{" "}
                    </span>
                    <ul className="list-disc list-inside ml-6">
                      <li>
                        <span className="font-bold">The Challenge:</span> The
                        Nodejs server would crash unexpectedly due to unhandled
                        exceptions, leading to downtime.
                      </li>
                      <li>
                        <span className="font-bold">The Solution:</span> By
                        integrating <span className="font-bold">PM2</span> as a
                        process manager, we ensured that the server would
                        automatically restart upon crashes, maintaining high
                        availability.
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            </Card>
            {/* ================================
          ======= Results & Impact ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Results"
            >
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">Faster Deployments: </span>
                  The optimized CI/CD pipeline reduced deployment times by over
                  40%, enabling more frequent releases and quicker feature
                  rollouts.
                </li>
                <li>
                  <span className="font-bold">Improved Code Quality: </span>
                  Continuous integration of SonarCloud led to a 30% reduction in
                  code smells and vulnerabilities over six months.
                </li>
                <li>
                  <span className="font-bold">Enhanced Security Posture: </span>
                  Early detection of vulnerabilities through integrated SAST resulted in a 25% decrease in security incidents.
                </li>
                <li>
                  <span className="font-bold">
                    Increased Developer Productivity:{" "}
                  </span>
                  Automated testing and deployment freed up developer time,
                  allowing the team to focus more on feature development rather
                  than manual processes.
                </li>
              </ul>
            </Card>
            {/* ================================
          ======= Key Learnings ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Key"
            >
              <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">
                    Caching in CI/CD Pipelines:{" "}
                  </span>
                  Avoiding caching the <code>node_modules</code> directory led
                  to significantly longer build times. Implementing caching
                  mechanisms can drastically speed up the pipeline by reusing
                  previously downloaded dependencies.
                </li>
                <li>
                  <span className="font-bold">
                    Process Management for Node.js:{" "}
                  </span>
                  Using a process manager like{" "}
                  <span className="font-bold">PM2</span> is essential for
                  maintaining application uptime. It automatically restarts the
                  server on crashes, ensuring high availability without manual
                  intervention.
                </li>
                <li>
                  <span className="font-bold">
                    The Importance of Automated Testing:{" "}
                  </span>
                  Integrating unit and end-to-end tests into the CI/CD pipeline
                  not only catches bugs early but also builds confidence in code
                  changes, leading to more stable releases.
                </li>
                <li>
                  <span className="font-bold">Security Integration: </span>
                  Embedding security tools like SonarCloud into the development workflow ensures that security is a
                  continuous concern rather than an afterthought, significantly
                  reducing vulnerabilities.
                </li>
                <li>
                  <span className="font-bold">
                    Infrastructure as Code (IaC):{" "}
                  </span>
                  Using Terraform and Ansible for infrastructure provisioning
                  and configuration management promotes consistency and
                  repeatability, reducing human error and speeding up
                  deployments.
                </li>
                
                {/* <li>
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
                </li> */}
              </ul>
            </Card>
            {/* ================================
          ======= Future Improvements ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="Future"
            >
              <h2 className="text-2xl font-bold mb-4">Future Improvements:</h2>
              <ul className="text-muted-foreground leading-relaxed flex flex-col flex-wrap gap-1 align-items-center mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold">
                    Dockerizing the application:
                  </span>{" "}
                  Create Dockerfiles for both frontend and backend services to
                  enable containerized deployments.
                </li>
                <li>
                  <span className="font-bold">
                    Moving Backend to AWS Lamda:
                  </span>{" "}
                  Migrate the Express.js backend to AWS Lambda functions for a
                  serverless architecture.
                </li>
                <li>
                  <span className="font-bold">Refactoring Terraform code:</span>{" "}
                  Modularize the Terraform configurations for better
                  maintainability and reusability.
                </li>
                <li>
                  <span className="font-bold">Refactoring Ansible playbooks:</span>{" "}
                  Organize playbooks into roles and improve readability.
                </li>
                <li>
                  <span className="font-bold">
                    Enhancing Security Measures:
                  </span>{" "}
                  Integrate additional security tools like OWASP ZAP for dynamic
                  application security testing (DAST) and implement runtime
                  security monitoring.
                </li>
              </ul>
            </Card>
            {/* ================================
          ======= Getting Started & Installation  ====== 
          ====================================*/}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              id="installation"
            >
              <h2 className="text-2xl font-bold mb-4">
                Getting Started & Installation:
              </h2>
              <div>
                <p className="text-muted-foreground">
                  To get a local copy up and running, follow these steps:
                </p>
                <br />
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <p className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                  git clone
                  https://gitlab.com/cheulong-devops/inventory-management-dashboard/inventory-management-dashboard-frontend.git
                </p>
                <br />

                <p className="text-muted-foreground">Create .env.local</p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
                    </code>
                  </pre>
                </div>
                <br />
                <p className="text-muted-foreground">Install npm packages</p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">npm install</code>
                  </pre>
                </div>
                <br />
                <p className="text-muted-foreground">
                  Start the Nextjs web app
                </p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">npm run dev</code>
                  </pre>
                </div>
                <br />
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      git clone
                      https://gitlab.com/cheulong-devops/inventory-management-dashboard/inventory-management-dashboard-backend.git
                    </code>
                  </pre>
                </div>
                <br />
                <p className="text-muted-foreground">Install npm packages</p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">npm install</code>
                  </pre>
                </div>
                <br />
                
                <p className="leading-relaxed text-muted-foreground">
                  Create database name "inventorymanagement"
                </p>
                <p className="text-muted-foreground">Create .env</p>
                <br />
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      PORT=8000
                      <br />
                      DATABASE_URL="postgresql://username:password@localhost:5432/inventorymanagement?schema=public"
                    </code>
                  </pre>
                </div>
                <br />
                <p className="leading-relaxed text-muted-foreground">
                  Create tables in the database using Prisma Migrate
                </p>
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      npx prisma@5 migrate dev --name init
                    </code>
                  </pre>
                </div>
                <br />
                <p className="leading-relaxed text-muted-foreground">
                  Seed the database with initial data
                </p>
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">
                      npm run seed
                    </code>
                  </pre>
                </div>
                <br />
                <p className="leading-relaxed text-muted-foreground">
                  Start the Expressjs backend server
                </p>
                <div className="block">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                    <code className="language-javascript">npm run dev</code>
                  </pre>
                </div>
                <br />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail3;
