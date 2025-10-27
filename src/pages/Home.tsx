import { Link } from "react-router-dom";
import { ArrowRight, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";
import profileImage from "@/assets/hero-pic.jpg";
import az104 from "@/assets/az-104.png";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              hi, I'm Cheulong.
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A software engineer with{" "}
                <span className="text-foreground font-semibold">
                  5+ years of experience
                </span>{" "}
                in web development, specializing in React.js, Vue.js and modern
                technologies, now building expertise in{" "}
                <span className="text-white font-semibold">
                  DevOps, cloud automation and scalable infrastructure
                </span>
                .
              </p>

              <p className="text-lg">
                Experienced in CI/CD, containerization, and cloud automation,
                applying development expertise to optimize infrastructure and
                delivery pipelines.
              </p>

              <p className="text-lg">
                Currently based in{" "}
                <span className="text-foreground font-semibold">
                  Bangkok, Thailand
                </span>
                .
              </p>
            </div>

            <div className="mt-6 ">
              <div className="relative animate-fade-in flex gap-3">
                <div className="relative w-2/12 max-w-xs">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
                  <img
                    src={az104}
                    alt="Cheulong Sear"
                    className="relative rounded-2xl shadow-card w-full cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://learn.microsoft.com/api/credentials/share/en-us/CheulongSear-6430/4A51F64A923BE19?sharingId", "_blank");
                    }}
                  />
                </div>
                {/* <div className="relative w-2/12 max-w-xs">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
                  <img
                    src={az104}
                    alt="Cheulong Sear"
                    className="relative rounded-2xl shadow-card border border-border w-full"
                  />
                </div>
                <div className="relative w-2/12 max-w-xs">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 animate-glow" />
                  <img
                    src={az104}
                    alt="Cheulong Sear"
                    className="relative rounded-2xl shadow-card border border-border w-full"
                  />
                </div> */}
              </div>
              {/* <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Award className="mr-2" size={16} />
                Azure AZ-104
              </Badge> */}
              {/* <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Award className="mr-2" size={16} />
                AWS Solutions Architect Associate
              </Badge> */}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="text-white bg-blue-500 hover:shadow-glow transition-all"
              >
                <Link to="/work">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/resume">
                  <FileText className="mr-2" size={18} />
                  Resume
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in self-start">
            <div className="relative w-full max-w-xs mx-auto">
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
