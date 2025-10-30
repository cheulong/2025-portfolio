import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import metalBlogImg from "@/assets/blogs/metallb-port.png";
import lokiImg from "@/assets/blogs/loki-port.png";
import gitopsImg from "@/assets/blogs/gitops-port.png";
import ufwImg from "@/assets/blogs/ufw-port.png";
import gitlabImg from "@/assets/blogs/gitlab-runner-port.png";
import k8sAdmImg from "@/assets/blogs/k8s-adm-port.png";
import terraformBasicImg from "@/assets/blogs/terraform-basic-port.png";
import awsTfImg from "@/assets/blogs/aws-tf-port.png";
import azureTfImg from "@/assets/blogs/azuretf-port.png";
import proxmoxEmuImg from "@/assets/blogs/proxmoxEmu-port.png";
import proxMoxIpImg from "@/assets/blogs/proxmoxIp-port.png";
import certManagerImg from "@/assets/blogs/cert-manager-port.png";
import slackImg from "@/assets/blogs/slack-port.png";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Semantic colors based on technology
  const getTagColor = (tag: string) => {
    const colorMap: Record<string, string> = {
      // DevOps tools
      argocd: "bg-rose-600/20 text-rose-700 dark:text-rose-300 border-rose-600/30",
      terraform: "bg-purple-600/20 text-purple-700 dark:text-purple-300 border-purple-600/30",
      kubernetes: "bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-600/30",
      docker: "bg-blue-400/20 text-blue-600 dark:text-blue-300 border-blue-400/30",
      
      // CI/CD
      gitlab: "bg-orange-700/20 text-orange-800 dark:text-orange-300 border-orange-700/30",
      cicd: "bg-violet-600/20 text-violet-700 dark:text-violet-300 border-violet-600/30",
      gitops: "bg-red-700/20 text-red-800 dark:text-red-300 border-red-700/30",
      
      // Monitoring
      prometheus: "bg-red-600/20 text-red-700 dark:text-red-300 border-red-600/30",
      grafana: "bg-orange-600/20 text-orange-700 dark:text-orange-300 border-orange-600/30",
      loki: "bg-lime-600/20 text-lime-700 dark:text-lime-300 border-lime-600/30",
      
      // Infrastructure
      metallb: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
      homelab: "bg-green-600/20 text-green-700 dark:text-green-300 border-green-600/30",
      
      // Security & Network
      security: "bg-orange-700/20 text-orange-800 dark:text-orange-300 border-orange-700/30",
      firewall: "bg-red-700/20 text-red-800 dark:text-red-300 border-red-700/30",
      network: "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",
      
      // OS & General
      linux: "bg-yellow-600/20 text-yellow-700 dark:text-yellow-300 border-yellow-600/30",
      devops: "bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-600/30",
      deployment: "bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-600/30",
      cloudflare: "bg-orange-600/20 text-orange-700 dark:text-orange-300 border-orange-600/30",
      'cert-manager': "bg-sky-600/20 text-sky-700 dark:text-sky-300 border-sky-600/30",
      ingress: "bg-teal-600/20 text-teal-700 dark:text-teal-300 border-teal-600/30",
      container: "bg-cyan-600/20 text-cyan-700 dark:text-cyan-300 border-cyan-600/30",
      ubuntu: "bg-orange-700/20 text-orange-800 dark:text-orange-300 border-orange-700/30",
      iac: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
      cloud: "bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-500/30",
      aws: "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30",
      azure: "bg-blue-700/20 text-blue-800 dark:text-blue-300 border-blue-700/30",
      proxmox: "bg-purple-700/20 text-purple-800 dark:text-purple-300 border-purple-700/30",
      vm: "bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-600/30",
      slack: "bg-violet-600/20 text-violet-700 dark:text-violet-300 border-violet-600/30",
      automation: "bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border-emerald-600/30",
    };
    
    return colorMap[tag.toLowerCase()] || "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30";
  };

  const blogPosts = [
    {
      title: "How to set up Slack notifications from GitLab CI/CD using the Slack API",
      description:
        "This article will show you how to set up Slack notifications from GitLab CI/CD using the Slack API. By following these steps, you can easily integrate Slack notifications into your GitLab CI/CD pipelines to keep your team informed about build and deployment statuses.",
      tags: ["gitlab", "cicd", "slack", "automation"],
      image: slackImg,
      link: "https://dev.to/cheulong/how-to-set-up-slack-notifications-from-gitlab-cicd-using-the-slack-api-h5f",
    },
    {
      title: "Setup cert-manager in local K8s cluster using nginx-ingress & Cloudflare DNS",
      description:
        "This article will show you how to setup cert-manager in local k8s cluster using nginx-ingress and Cloudflare DNS to issue TLS certificate.",
      tags: ["kubernetes", "cloudflare", "linux", "cert-manager", "ingress"],
      image: certManagerImg,
      link: "https://dev.to/cheulong/setup-cert-manager-in-local-k8s-cluster-using-nginx-ingress-cloudflare-dns-a9c",
    },
    {
      title: "Expose the Kubernetes Load Balancer on Bare Metal using MetalLB",
      description:
        "This article will show you how to install MetalLB in K8s and expose a load balancer in your network.",
      tags: ["homelab", "kubernetes", "metallb"],
      image: metalBlogImg,
      link: "https://dev.to/cheulong/expose-the-kubernetes-load-balancer-on-bare-metal-using-metallb-9hh",
    },
    {
      title: "Setup Cluster monitoring using Prometheus, Grafana and Loki",
      tags: ["prometheus", "kubernetes", "grafana", "loki", "devops"],
      description:
        "This article will show you how to setup a cluster monitoring using Prometheus, Grafana and Loki.",
      image: lokiImg,
      link: "https://dev.to/cheulong/setup-cluster-monitoring-using-prometheus-grafana-and-loki-1epf",
      alt: "loki",
    },
    {
      title: "Setup GitOps with ArgoCD",
      tags: ["argocd", "gitops", "deployment", "kubernetes"],
      description:
        "If you're new to GitOps, and you want to setup a new project for ArgoCD. This article will show you how to setup GitOps with ArgoCD using Kubernetes.",
      image: gitopsImg,
      link: "https://dev.to/cheulong/setup-gitops-with-argocd-8eg",
      alt: "argocd",
    },
    {
      title: "UFW(Uncomplicated Firewall)",
      tags: ["firewall", "linux", "devops", "security", "network"],
      description:
        "UFW (Uncomplicated Firewall) is a user-friendly interface for managing firewall rules in Linux.",
      image: ufwImg,
      link: "https://dev.to/cheulong/ufwuncomplicated-firewall-5a43",
      alt: "ufw",
    },
    {
      title: "Install Gitlab runner (self-host) on Ubuntu",
      tags: ["gitlab", "devops", "cicd", "linux"],
      description:
        "This article will show you how to install Gitlab runner on Ubuntu. It will cover the basic steps to install and configure Gitlab runner, and how to register it with your Gitlab instance.",
      image: gitlabImg,
      link: "https://dev.to/cheulong/install-gitlab-runner-self-host-4f40",
      alt: "gitlab runner",
    },
    {
      title: "Setup K8s with kubeadm",
      tags: ["kubernetes", "devops", "container", "ubuntu"],
      description:
        "This article will show you how to setup a Kubernetes cluster with kubeadm on Ubuntu. It will cover the basic steps to install and configure kubeadm, and how to join worker nodes to the cluster.",
      image: k8sAdmImg,
      link: "https://dev.to/cheulong/setup-k8s-with-kubeadm-2ndn",
      alt: "kubernetes kubeadm",
    },
    {
      title: "Terraform for Beginners",
      tags: ["IaC", "terraform", "devops", "cloud"],
      description:
        "This article is for those who are new to Terraform. It will show you some basic syntax and concepts of Terraform, and how to use it to manage your infrastructure as code.",
      image: terraformBasicImg,
      link: "https://dev.to/cheulong/terraform-basic-2jm",
      alt: "terraform basic",
    },
    {
      title: "Setup Terraform for AWS",
      tags: ["aws", "terraform", "devops", "cloud"],
      description:
        "If you're new to Terraform, and you want to setup a new project for AWS. This article will show you how to setup Terraform for AWS using AWS CLI.",
      image: awsTfImg,
      link: "https://dev.to/cheulong/setup-terraform-for-aws-40k3",
      alt: "terraform aws",
    },
    {
      title: "Setup Terraform for Azure",
      tags: ["azure", "terraform", "devops", "cloud"],
      description:
        "If you're new to Terraform, and you want to setup a new project for Azure. This article will show you how to setup Terraform for Azure using Azure CLI.",
      image: azureTfImg,
      link: "https://dev.to/cheulong/setup-terraform-for-azure-95c",
      alt: "terraform azure",
    },
    {
      title: "How to Change the IP Address of Proxmox VE",
      tags: ["proxmox", "homelab", "linux", "vm"],
      description:
        "If you're running Proxmox VE in a home lab or production environment, sometime its IP address need to change due to a network restructuring, VLAN changes, or simply a migration to a new subnet.",
      image: proxMoxIpImg,
      link: "https://dev.to/cheulong/how-to-change-the-ip-address-of-proxmox-52jl",
      alt: "proxmox ip",
    },
    {
      title: "Show VM IP in Proxmox",
      tags: ["proxmox", "homelab", "linux", "vm"],
      description:
        "If you're managing virtual machines in Proxmox VE, and you want to see the IP address of a running VM. There is a easy to do it by using QEMU Guest Agent.",
      image: proxmoxEmuImg,
      link: "https://dev.to/cheulong/show-vm-ip-in-proxmox-1c4a",
      alt: "qemu guest agent",
    },
  ];

  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))];

  const filteredPosts =
    selectedTag === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(selectedTag));

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12 animate-fade-in flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">blog</h1>
          <div className="flex items-center gap-2">
            <label className="text-muted-foreground">tag:</label>
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {paginatedPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => {
                e.preventDefault();
                window.open(post.link, "_blank");
              }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-primary opacity-50" />
                )}
                <div className="w-full h-full bg-gradient-primary opacity-50" />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`text-xs cursor-pointer transition-all hover:scale-105 ${getTagColor(
                        tag
                      )}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTag(tag);
                        setCurrentPage(1);
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft size={16} />
              prev
            </Button>
            <span className="text-muted-foreground">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              next
              <ChevronRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
