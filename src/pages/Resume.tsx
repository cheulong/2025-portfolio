import { Download, Mail, Phone, Linkedin, Github, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Cheulong Sear
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mt-4">
              <a href="mailto:searcheulong@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
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
              <a href="https://linkedin.com/in/cheulongsear" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
                linkedin.com/in/cheulongsear
              </a>
              <a href="https://github.com/cheulong" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} />
                github.com/cheulong
              </a>
            </div>
          </div>
          <Button className="bg-gradient-primary hover:shadow-glow transition-all">
            <a href="/resume.pdf" download className="flex items-center gap-2">
              <Download size={18} />
              Download PDF
            </a>
          </Button>
        </div>

        {/* Certifications Badges */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-4 py-2.5 text-sm">
              <Award className="mr-2" size={16} />
              Microsoft Certified - Azure Administrator Associate (AZ-104)
            </Badge>
            <Badge variant="secondary" className="px-4 py-2.5 text-sm">
              <Award className="mr-2" size={16} />
              Microsoft Certified - Azure AI Fundamentals (AI-900)
            </Badge>
            <Badge variant="outline" className="px-4 py-2.5 text-sm border-primary/50 text-primary">
              <Award className="mr-2" size={16} />
              Azure DevOps Engineer Expert (AZ-400) - In Progress
            </Badge>
            <Badge variant="outline" className="px-4 py-2.5 text-sm border-primary/50 text-primary">
              <Award className="mr-2" size={16} />
              Kubernetes Administrator (CKA) - In Progress
            </Badge>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Objective */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Dynamic professional with 5+ years of comprehensive experience in Cloud and Automation</li>
              <li>Exceptional skill in Container technologies, Azure Cloud Migration, Linux Administration, CI/CD Integration working in agile environment</li>
            </ul>
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
                <h4 className="font-semibold mb-2">CI/CD Tools</h4>
                <p className="text-muted-foreground">Jenkins, Azure DevOps, Github Actions</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Containerization & Orchestration</h4>
                <p className="text-muted-foreground">Docker, Kubernetes, AKS</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">IaC Tools</h4>
                <p className="text-muted-foreground">Terraform, Ansible</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cloud Platform</h4>
                <p className="text-muted-foreground">Microsoft Azure</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Languages</h4>
                <p className="text-muted-foreground">Python, Bash, JavaScript, TypeScript</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">GitOps</h4>
                <p className="text-muted-foreground">ArgoCD</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Monitoring & Logging</h4>
                <p className="text-muted-foreground">Prometheus, Grafana</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Other Tools</h4>
                <p className="text-muted-foreground">SonarQube, Helm, Nginx, Istio, ReactJs</p>
              </div>
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
              <p className="text-sm text-muted-foreground mb-2">Bangkok, Thailand</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Upgraded Electron framework (v5 → v31) to modernize the development stack and enable ESM syntax</li>
                <li>Enhanced Azure DevOps pipelines to integrate the latest Electron builder</li>
                <li>Implemented end-to-end testing automation using Playwright within Electron</li>
                <li>Collaborated with cross-functional teams to maintain CI/CD health and ensure consistent release quality</li>
                <li>Using Blackduck tools to scan vulnerabilities and outdated third-party libraries</li>
              </ul>
            </div>

            <Separator />

            {/* Seven Peaks */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">DevOps-Focused Software Developer</h3>
                  <p className="text-primary font-semibold">Seven Peaks Software</p>
                </div>
                <p className="text-muted-foreground">Feb 2022 - Dec 2023</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Bangkok, Thailand</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Implemented Infrastructure as Code (IaC) using Terraform to provision and manage Azure resources</li>
                <li>Designed and deployed scalable cloud architectures on Azure</li>
                <li>Automated CI/CD workflows for containerized applications</li>
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
              <p className="text-sm text-muted-foreground mb-2">Chiang Mai, Thailand</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Maintained backend infrastructure with Firebase Cloud Functions</li>
                <li>Integrated third-party services including authentication, payments, and analytics</li>
                <li>Actively contributed to deployment and monitoring workflows</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Project 1 */}
            <div>
              <h3 className="font-bold text-lg mb-2">CI/CD Automation for Restaurant Web Application</h3>
              <p className="text-sm text-muted-foreground mb-2">Role: DevOps Engineer</p>
              <p className="text-sm font-semibold mb-2">Tools/Tech: Azure DevOps, Docker, Kubernetes, Helm, Git, SonarQube, Terraform, Azure</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Designed and implemented a CI/CD pipeline for 6 microservices using Azure DevOps and Docker</li>
                <li>Deployed services on AKS using Helm charts, enabling blue-green deployments</li>
                <li>Integrated SonarQube for code quality and security scans in the pipeline</li>
                <li>Reduced deployment time by 60% and minimized manual errors in production releases</li>
              </ul>
            </div>

            <Separator />

            {/* Project 2 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Microservice E-commerce Deployment</h3>
              <p className="text-sm text-muted-foreground mb-2">Role: DevOps Engineer</p>
              <p className="text-sm font-semibold mb-2">Tools/Tech: Gitlab CI/CD, Docker, Kubernetes, Helm, Git, SonarQube, Terraform, Azure</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Designed and deployed multiple microservices using Docker containers and Kubernetes on Azure</li>
                <li>Automated build, test, and deployment processes using GitLab CI/CD pipelines</li>
                <li>Managed service configurations and deployments using Helm charts</li>
                <li>Integrated SonarQube into the CI pipeline for continuous code quality analysis</li>
                <li>Configured centralized monitoring using Prometheus and set up alerts for key metrics</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">English, Thai, and Khmer (Professional proficiency or above)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
