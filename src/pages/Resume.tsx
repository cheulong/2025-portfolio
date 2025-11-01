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
                className="flex items-center gap-2 text-primary transition-colors"
              >
                <Linkedin size={16} />
                linkedin.com/in/cheulongsear
              </a>
              <a
                href="https://github.com/cheulong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary transition-colors"
              >
                <Github size={16} />
                github.com/cheulong
              </a>
              <a
                href="https://cheulongsear.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary transition-colors"
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
              DevOps-focused Software Engineer with 5+ years of experience in
              automation, , and modern DevOps&nbsp;
              <span className="font-bold text-gray-300">
                CI/CD, and cloud infrastructure across AWS and Azure
              </span>
              . Skilled in designing and deploying scalable systems using&nbsp;
              <span className="font-bold text-gray-300">
                Docker, Kubernetes, Terraform
              </span>
              , and modern&nbsp;
              <span className="font-bold text-gray-300">DevOps</span>
              &nbsp;practices. Passionate about bridging development and
              operations to enhance reliability, security, and developer
              productivity.
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
                  Docker, Kubernetes, Helm, ArgoCD, EKS
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
                <h4 className="font-semibold mb-2">
                  Monitoring & Observability
                </h4>
                <p className="text-muted-foreground">
                  Prometheus, Grafana, Loki, Opentelemetry
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Programming & Scripting</h4>
                <p className="text-muted-foreground">
                  Node.js, JavaScript, Bash
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
                  Modernized Electron build pipeline using <span className="font-bold text-gray-300">Azure DevOps</span>,
                  enabling automated versioning and Windows code-signing.
                </li>
                <li>
                  Integrated <span className="font-bold text-gray-300">Playwright</span> end-to-end tests into CI/CD, reducing
                  manual QA time by <span className="font-bold text-gray-300">40%</span> and increasing release reliability.
                </li>
                <li>
                  Upgraded Electron framework (v5 → v31) to improve security,
                  performance, and deployment speed.
                </li>
                <li>
                  Managed vulnerability scanning and dependency remediation
                  using <span className="font-bold text-gray-300">Blackduck</span>, maintaining compliance with corporate
                  standards.
                </li>
                <li>
                  Collaborated with infrastructure teams to optimize CI/CD
                  pipelines and enhance build consistency.
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
                  Implemented <span className="font-bold text-gray-300">Infrastructure as Code (IaC)</span> using <span className="font-bold text-gray-300">Terraform</span> to
                  automate provisioning of Azure App Services, VNets, and Key
                  Vaults.
                </li>
                <li>
                  Built and maintained <span className="font-bold text-gray-300">Azure DevOps pipelines</span>, reducing
                  deployment time by <span className="font-bold text-gray-300">60%</span> and improving delivery confidence.
                </li>
                <li>
                  Supported <span className="font-bold text-gray-300">DevOps practices</span> in building a secure, scalable
                  hospital website using Azure services, helping increase
                  telemedicine adoption by 30%.
                </li>
                <li>
                  Integrated <span className="font-bold text-gray-300">Azure Communication Services</span> and <span className="font-bold text-gray-300">SignalR</span> for
                  real-time communication, improving reliability under load.
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
                  Automated deployment of <span className="font-bold text-gray-300">Firebase Cloud Functions</span> via CI/CD
                  workflows, cutting manual release time by 50%.Automated
                  deployment of <span className="font-bold text-gray-300">Firebase Cloud Functions</span> via CI/CD workflows,
                  cutting manual release time by 50%.
                </li>
                <li>
                  Integrated secure authentication, payments, and analytics for
                  multi-language mobile app with over <span className="font-bold text-gray-300">1M users</span>.
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
                3-Tier Web Application on Amazon EKS
              </h3>
              <p className="text-sm font-semibold mb-2">
                Tools/Tech: Gitlab CI/CD, Kubernetes, Helm, ArgoCD, SonarQube,
                Terraform, AWS
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Designed and deployed a production-grade <span className="font-bold text-gray-300">microservices
                  architecture</span> on <span className="font-bold text-gray-300">EKS</span> with HTTPS via <span className="font-bold text-gray-300">cert-manager</span> and Ingress.
                </li>
                <li>
                  Built automated <span className="font-bold text-gray-300">CI/CD pipelines</span> using GitLab CI/CD and <span className="font-bold text-gray-300">ArgoCD</span>,
                  achieving <span className="font-bold text-gray-300">zero-downtime rolling updates</span>.
                </li>
                <li>
                  Integrated <span className="font-bold text-gray-300"></span>SonarQube for code quality checks and <span className="font-bold text-gray-300">Loki +
                  Grafana</span> for centralized logging and observability.
                </li>
                <li>
                  Introduced <span className="font-bold text-gray-300">monitoring and alerting</span> using <span className="font-bold text-gray-300">Prometheus</span> and
                  <span className="font-bold text-gray-300">Grafana</span>, improving incident response time by 30%.
                </li>
              </ul>
            </div>

            <Separator />

            {/* Project 2 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                AWS Terraform Infrastructure Automation
              </h3>
              <p className="text-sm font-semibold mb-2">
                Tools/Tech: Gitlab CI/CD, Terraform, AWS
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Developed reusable <span className="font-bold text-gray-300">Terraform modules</span> for VPC, EC2, and RDS,
                  used across development and production environments.prod
                  environments.
                </li>
                <li>
                  Integrated automated <span className="font-bold text-gray-300">plan/apply pipelines</span> via GitLab CI/CD for
                  infrastructure change control.
                </li>
                <li>
                  Improved provisioning consistency and reduced manual
                  configuration errors by 80%.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        {/* Achievements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Blog published on{" "}
              <a href="https://dev.to/cheulong" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                dev.to
              </a>
              &nbsp;(2000+ reads)
            </p>
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
