import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileOutdoor from "@/assets/about-pic.jpg";
import microsoft from "@/assets/about/ms.png";
import stripe from "@/assets/about/stripe.avif";
import mixpanel from "@/assets/about/mixpanel.jpeg";
import aws from "@/assets/about/aws_logo.png";
import google from "@/assets/about/google.jpeg";
import linux from "@/assets/about/linux.png";
import windows from "@/assets/about/windows.png";
import azure from "@/assets/about/azure.png";
import azureDevops from "@/assets/about/azure-devops.svg";
import awsClear from "@/assets/about/aws-clear.webp";
import reactjs from "@/assets/about/reactjs.webp";
import vue from "@/assets/about/vue.webp";
import vite from "@/assets/about/vite.png";
import nginx from "@/assets/about/nginx.webp";
import javascript from "@/assets/about/javascript.png";
import nodejs from "@/assets/about/nodejs.jpg";
import vitest from "@/assets/about/vitest.svg";
import playwright from "@/assets/about/playwright.webp";
import istio from "@/assets/about/istio.png";
import kafka from "@/assets/about/kafka.png";
import gitleaks from "@/assets/about/gitleaks.jpeg";
import zap from "@/assets/about/zap.jpg";
import grype from "@/assets/about/grype.png";
import syft from "@/assets/about/syft.png";
import check from "@/assets/about/check.png";
import trivy from "@/assets/about/trivy.svg";
import sonarqube from "@/assets/about/sonarqube.png";
import open from "@/assets/about/open.png";
import prom from "@/assets/about/prom.png";
import grafana from "@/assets/about/grafana.webp";
import docker from "@/assets/about/docker.png";
import k8s from "@/assets/about/k8s.png";
import eks from "@/assets/about/eks.png";
import aks from "@/assets/about/aks.png";
import terraform from "@/assets/about/terraform.webp";
import ansible from "@/assets/about/ansible.webp";
import argo from "@/assets/about/argo.png";
import git from "@/assets/about/git.png";
import bash from "@/assets/about/bash.png";
import github from "@/assets/about/github.webp";
import gitlab from "@/assets/about/gitlab.png";

import {
  GitBranch,
  Package,
  Container,
  FileCode,
  Cloud,
  Code,
  PcCase,
  GitMerge,
  BarChart,
  Network,
  Award,
  Share2,
  CheckCircle2,
  ScanSearch,
  Monitor,
  SquareTerminal,
  Cog,
  Workflow
} from "lucide-react";

const About = () => {
  const skillGroups = [
    {
      category: "CI/CD & Automation",
      icon: Workflow,
      tools: [
        { name: "Azure DevOps", logo: azureDevops },
        { name: "GitLab CI/CD", logo: gitlab },
        { name: "GitHub Actions", logo: github },
        { name: "Bash", logo: bash },
      ],
    },
    {
      category: "GitOps & Source Control",
      icon: Cog,
      tools: [
        { name: "ArgoCD", logo: argo },
        { name: "Git", logo: git },
      ],
    },
    {
      category: "Cloud",
      icon: Cloud,
      tools: [
        { name: "AWS", logo: aws },
        { name: "Azure", logo: azure },
      ],
    },
    {
      category: "Infrastructure as Code (IaC) & Configuration Management",
      icon: SquareTerminal,
      tools: [
        { name: "Terraform", logo: terraform },
        { name: "Ansible", logo: ansible },
      ],
    },
    {
      category: "Containers & Orchestration",
      icon: Container,
      tools: [
        { name: "Docker", logo: docker },
        { name: "Kubernetes", logo: k8s },
        { name: "Azure Kubernetes Service (AKS)", logo: aks },
        { name: "Elastic Kubernetes Service (EKS)", logo: eks },
      ],
    },
    {
      category: "Monitoring & Logging",
      icon: Monitor,
      tools: [
        { name: "Prometheus", logo: prom },
        { name: "LGTA stack (Loki, Grafana, Tempo, Alloy)", logo: grafana },
        { name: "Opentelemetry", logo: open },
      ],
    },
    {
      category: "Service Mesh & Messaging",
      icon: Share2,
      tools: [
        { name: "Istio", logo: istio },
        { name: "Kafka", logo: kafka },
      ],
    },
    {
      category: "Code Quality, Security & Vulnerability Scanning",
      icon: ScanSearch,
      tools: [
        { name: "SonarQube", logo: sonarqube },
        { name: "Gitleaks", logo: gitleaks },
        { name: "OWASP Dependency-Check", logo: check },
        { name: "Trivy", logo: trivy },
        { name: "Syft (SBOM)", logo: syft },
        { name: "Grype", logo: grype },
        { name: "OWASP ZAP", logo: zap },
      ],
    },
    {
      category: "Development & Testing",
      icon: Code,
      tools: [
        { name: "JavaScript", logo: javascript },
        { name: "Vite", logo: vite },
        { name: "Vue.js", logo: vue },
        { name: "React.js", logo: reactjs },
        { name: "Node.js", logo: nodejs },
        { name: "NGINX(Web Server/ Reverse Proxy)", logo: nginx },
        { name: "Vitest", logo: vitest },
        { name: "Playwright", logo: playwright },
      ],
    },
    {
      category: "Operating Systems",
      icon: PcCase,
      tools: [
        { name: "Linux(Ubuntu)", logo: linux },
        { name: "Windows", logo: windows },
      ],
    },
  ];

  const certificates = [
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft",
      date: "2023",
      badge: microsoft,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/CheulongSear-6430/4A51F64A923BE19?sharingId",
    },
    {
      title: "Stripe Certified Professional Developer",
      issuer: "Stripe",
      badge: stripe,
      date: "2023",
      link: "https://stripecertifications.credential.net/d7e2d2b9-c32c-4ee7-93dd-6178bb28587c",
    },
    {
      title: "Partner Certification",
      issuer: "Mixpanel",
      badge: mixpanel,
      date: "2023",
      link: "https://verify.skilljar.com/c/pkfd4aq3a5uv",
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      badge: google,
      date: "2022",
      link: "https://www.credly.com/badges/3b1169b5-a5bb-4e44-9661-3a74f8a1ceb6/linked_in_profile",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      badge: microsoft,
      date: "2024",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/CheulongSear-6430/14F7439936D91C94?sharingId",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">
          About
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              Software Engineer with 5+ years of experience transitioning into
              DevOps Engineering. Based in Bangkok, Thailand, with a degree in
              Software Engineering from Chiang Mai University.
            </p>

            <p>
              Combining deep software development expertise with modern DevOps
              practices to build reliable, automated, and scalable
              infrastructure. Experienced in CI/CD pipelines, containerization,
              cloud platforms, and infrastructure as code.
            </p>

            <p>
              Currently seeking DevOps opportunities to contribute from day one
              while continuing to grow in automation, deployment optimization,
              and cloud-native technologies.
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
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Certificates & Achievements
            <br />
            <span className="text-base text-muted-foreground line-clamp-1 font-normal">
              Professional certifications and continuous learning
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:border-primary transition-colors ${
                  cert.link ? "cursor-pointer" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (cert.link) window.open(cert.link, "_blank");
                }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {!cert.badge ? (
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Award size={20} className="text-primary-foreground" />
                      </div>
                    ) : (
                      <img
                        src={cert.badge}
                        alt={`${cert.title} badge`}
                        className="w-16 h-16 object-contain"
                      />
                    )}
                    <div>
                      <CardTitle className="text-lg mb-1">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold mb-6">
            Skills & Tools
            <br />
            <span className="text-base text-muted-foreground line-clamp-1 font-normal">
              A diverse toolkit for building modern web and pipeline
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <group.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tool.icon ? (
                        <tool.icon size={16} className="text-primary" />
                      ) : (
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="rounded w-8 h-8 object-contain"
                        />
                      )}
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
