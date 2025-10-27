import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Award,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import az104 from "@/assets/az-104.png";

const Resume = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-6 max-w-5xl flex justify-end">
        <Button className="text-white bg-blue-500  hover:shadow-glow transition-all">
          <a
            href="https://drive.google.com/uc?export=download&id=1QoonGZBQiIYtoTEz6sUcLZMWGXomJhM6"
            download
            className="flex items-center gap-2"
          >
            <Download size={18} />
            Download PDF
          </a>
        </Button>
      </div>
      <div className="container mx-auto px-6 pb-12 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 ">
              Cheulong Sear
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mt-4">
              <a
                href="mailto:searcheulong@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                searcheulong@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} />
                (+66) 99 22 03903
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Bangkok, Thailand
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href="https://linkedin.com/in/cheulongsear"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                linkedin.com/in/cheulongsear
              </a>
              <a
                href="https://github.com/cheulong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} />
                github.com/cheulong
              </a>
              <a
                href="https://github.com/cheulong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe size={16} />
                cheulongsear.dev
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in flex gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
              <img
                src={az104}
                alt="Cheulong Sear"
                className="w-28 h-28 relative rounded-2xl shadow-card cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://learn.microsoft.com/api/credentials/share/en-us/CheulongSear-6430/4A51F64A923BE19?sharingId",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Objective */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground indent-8">
              Results-driven Software Engineer transitioning into DevOps
              Engineering, with hands-on experience in{" "}
              <span className="font-bold text-gray-300">
                CI/CD pipelines, containerization, and cloud infrastructure
              </span>
              . Strong foundation in software development and automation using{" "}
              <span className="font-bold text-gray-300">
                Docker, Kubernetes, and Terraform
              </span>
              . Adept at bridging development and operations to deliver
              scalable, reliable, and secure systems.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Cloud Platform</h4>
                <p className="text-muted-foreground">
                  AWS (EC2, S3, IAM, EKS), Azure
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Containers & Orchestration
                </h4>
                <p className="text-muted-foreground">
                  Docker, Kubernetes, Helm, ArgoCD
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">CI/CD & Automation</h4>
                <p className="text-muted-foreground">
                  GitHub Actions, GitLab CI/CD, Azure DevOps
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Infrastructure as Code</h4>
                <p className="text-muted-foreground">Terraform, Ansible</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Monitoring & Logging</h4>
                <p className="text-muted-foreground">
                  Prometheus, Grafana, Loki, Opentelemetry
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Containerization & Orchestration
                </h4>
                <p className="text-muted-foreground">
                  Docker, Kubernetes, Azure Kubernetes Service(AKS)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Programming & Scripting</h4>
                <p className="text-muted-foreground">
                  JavaScript, Node.js, Bash
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Version Control & Tools</h4>
                <p className="text-muted-foreground">
                  Git, GitHub, Nginx, Linux, Kafka, Istio
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-muted-foreground">
                  Security best practices, vulnerability scanning, and risk
                  mitigation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications Badges */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Badge
                variant="secondary"
                className="px-4 py-2.5 text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://learn.microsoft.com/api/credentials/share/en-us/CheulongSear-6430/4A51F64A923BE19?sharingId",
                    "_blank"
                  );
                }}
              >
                <Award className="mr-2" size={16} />
                Microsoft Certified - Azure Administrator Associate (AZ-104)
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2.5 text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://learn.microsoft.com/api/credentials/share/en-us/CheulongSear-6430/14F7439936D91C94?sharingId",
                    "_blank"
                  );
                }}
              >
                <Award className="mr-2" size={16} />
                Microsoft Certified - Azure AI Fundamentals (AI-900)
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2.5 text-sm border-primary/50 text-primary"
              >
                <Award className="mr-2" size={16} />
                AWS Certified Solutions Architect Associate (SAA-C03) - In
                Progress
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2.5 text-sm border-primary/50 text-primary"
              >
                <Award className="mr-2" size={16} />
                Kubernetes Administrator (CKA) - In Progress
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Alstom */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Software Developer</h3>
                  <p className="text-primary font-semibold">Alstom</p>
                </div>
                <p className="text-muted-foreground">Jan 2024 - Present</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Bangkok, Thailand
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Upgraded Electron framework (v5 → v31) to modernize the
                  development stack and enable ESM syntax
                </li>
                <li>
                  Enhanced Azure DevOps pipelines to integrate the latest
                  Electron builder
                </li>
                <li>
                  Implemented end-to-end testing automation using Playwright
                  within Electron
                </li>
                <li>
                  Collaborated with cross-functional teams to maintain CI/CD
                  health and ensure consistent release quality
                </li>
                <li>
                  Using Blackduck tools to scan vulnerabilities and outdated
                  third-party libraries
                </li>
              </ul>
            </div>

            <Separator />

            {/* Seven Peaks */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    DevOps-Focused Software Developer
                  </h3>
                  <p className="text-primary font-semibold">
                    Seven Peaks Software
                  </p>
                </div>
                <p className="text-muted-foreground">Feb 2022 - Dec 2023</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Bangkok, Thailand
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Implemented Infrastructure as Code (IaC) using Terraform to
                  provision and manage Azure resources
                </li>
                <li>
                  Designed and deployed scalable cloud architectures on Azure
                </li>
                <li>
                  Automated CI/CD workflows for containerized applications
                </li>
              </ul>
            </div>

            <Separator />

            {/* Ling */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Full-Stack Developer</h3>
                  <p className="text-primary font-semibold">Ling</p>
                </div>
                <p className="text-muted-foreground">Aug 2019 - Jan 2022</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Chiang Mai, Thailand
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Maintained backend infrastructure with Firebase Cloud
                  Functions
                </li>
                <li>
                  Integrated third-party services including authentication,
                  payments, and analytics
                </li>
                <li>
                  Actively contributed to deployment and monitoring workflows
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>DevOps Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Project 1 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                3-Tier Web Application on EKS(Amazon Elastic Kubernetes Service)
              </h3>
              <p className="text-sm font-semibold mb-2">
                Tools/Tech: Gitlab CI/CD, Kubernetes, Helm, ArgoCD, SonarQube, Terraform, AWS
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Designed and deployed a microservice-based app on EKS with Ingress and cert-manager for HTTPS.
                </li>
                <li>
                  Automated CI/CD using Gitlab CI/CD and ArgoCD with zero-downtime rolling updates.
                </li>
                <li>
                  Integrated SonarQube for code quality and security scans in the pipeline.
                </li>
                <li>
                  Implemented centralized logging using Loki and Alloy, visualized via Grafana dashboards.
                </li>
                <li>
                  Created alerts for CPU/memory usage and request latency.
                </li>
              </ul>
            </div>

            <Separator />

            {/* Project 2 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Terraform Infrastructure for AWS
              </h3>
              <p className="text-sm font-semibold mb-2">
                Tools/Tech: Gitlab CI/CD, Terraform, AWS
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Built reusable Terraform modules for VPC, EC2, and RDS deployments across dev and prod environments.
                </li>
                <li>
                  Integrated with GitLab CI/CD for automated plan/apply workflows.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              English, Thai, and Khmer (Professional proficiency or above)
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bachelor of Software Engineering, Chiang Mai University (2015 -
              2019)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
