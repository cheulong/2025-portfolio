import { Link } from "react-router-dom";
import { ArrowRight, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SocialLinks from "@/components/SocialLinks";
import profileImage from "@/assets/profile.png";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              hi, I'm Cheulong.
            </h1>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A software engineer with <span className="text-foreground font-semibold">5+ years of experience</span> in
                web development, specializing in React.js, Vue.js and modern technologies, now building expertise in{" "}
                <span className="text-primary font-semibold">DevOps, cloud automation and scalable infrastructure</span>.
              </p>
              
              <p className="text-lg">
                Experienced in CI/CD, containerization, and cloud automation, applying development expertise to
                optimize infrastructure and delivery pipelines.
              </p>
              
              <p className="text-lg">
                Currently based in <span className="text-foreground font-semibold">Bangkok, Thailand</span>.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Award className="mr-2" size={16} />
                Azure AZ-104
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Award className="mr-2" size={16} />
                AWS Solutions Architect Associate
              </Badge>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all">
                <Link to="/work">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/resume.pdf" download>
                  <FileText className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
              <img
                src={profileImage}
                alt="Cheulong Sear"
                className="relative rounded-2xl shadow-card border border-border w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
