import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const blogPosts = [
    {
      title: "Expose the Kubernetes Load Balancer on Bare Metal using MetalLB",
      description: "This article will show you how to install MetalLB in K8s and expose a load balancer in your network.",
      tags: ["homelab", "kubernetes", "metallb"],
      image: "/placeholder.svg",
    },
    {
      title: "Setup Cluster monitoring using Prometheus, Grafana and Loki",
      description: "This article will show you how to setup a cluster monitoring using Prometheus, Grafana and Loki.",
      tags: ["prometheus", "kubernetes", "grafana", "loki", "devops"],
      image: "/placeholder.svg",
    },
    {
      title: "Setup GitOps with ArgoCD",
      description:
        "If you're new to GitOps, and you want to setup a new project for ArgoCD. This article will show you how to setup GitOps with ArgoCD using Kubernetes.",
      tags: ["argocd", "gitops", "deployment", "kubernetes"],
      image: "/placeholder.svg",
    },
    {
      title: "UFW(Uncomplicated Firewall)",
      description: "UFW (Uncomplicated Firewall) is a user-friendly interface for managing firewall rules in Linux.",
      tags: ["firewall", "linux", "devops", "security", "network"],
      image: "/placeholder.svg",
    },
    {
      title: "Install Gitlab runner (self-host) on Ubuntu",
      description:
        "This article will show you how to install Gitlab runner on Ubuntu. It will cover the basic steps to install and configure Gitlab runner, and how to register it with your Gitlab instance.",
      tags: ["gitlab", "devops", "cicd", "linux"],
      image: "/placeholder.svg",
    },
  ];

  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))];

  const filteredPosts =
    selectedTag === "all" ? blogPosts : blogPosts.filter((post) => post.tags.includes(selectedTag));

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

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
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-primary opacity-50" />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-xs text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
