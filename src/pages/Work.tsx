import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Work = () => {
  const experiences = [
    {
      company: "Alstom",
      role: "Frontend Developer",
      period: "Jan 2024 - Present",
      description:
        "I develop the internal application for the Alstom company to improve the flow of working and to make the work easier for the employees.",
      achievements: [
        "Update electron from version 5 to 31, enabling support for ESM syntax and modern JavaScript features, improving developer productivity across the team.",
        "Migrated Azure DevOps pipeline to support new Electron builder libraries, reducing build time by 25% and ensuring compatibility with the updated ecosystem.",
        "Designed and implemented an automated Azure DevOps CI/CD pipeline for Windows code signing, increasing deployment reliability and meeting compliance requirements.",
        "Developed and maintained a cross-platform Electron application using Vue.js, contributing to 20% of the app's feature development and UI integration.",
        "Integrated Playwright for end-to-end testing in the Electron environment, achieving 70% test coverage and reducing regression bugs by 30%.",
      ],
    },
    {
      company: "Seven Peaks Software",
      role: "Frontend Developer",
      period: "Feb 2022 - Dec 2023",
      description:
        "I am the mid-level front-end developer at Seven Peaks Software. I have been working on the front-end of variety of projects using up-to-date technologies.",
      achievements: [
        "Spearheaded the development of an enterprise-level hospital website, utilizing Azure technologies to connect thousands of patients and doctors daily, resulting in a 30% increase in telemedicine appointments and a 20% reduction in in-person consultations, improving overall patient access and healthcare efficiency.",
        "Designed and implemented a scalable pizza ordering website, optimizing load speed using Next.js, Storybook, and Playwright technologies, resulting in a 40% decrease in page loading time and a 25% increase in completed orders, enhancing user experience and business revenue.",
        "Instrumental in crafting a video call platform for a house insurance company, enhancing client meetings and revenue using Azure Communication and SignalR.",
        "Implemented Continuous Integration/Deployment processes using Azure DevOps and Terraform, enhancing development speed through testing and reviews.",
      ],
    },
    {
      company: "Ling",
      role: "FullStack Developer",
      period: "Aug 2019 - Jan 2022",
      description:
        "I was the fullstack developer at Ling. I worked on the frontend and backend of the ling app and ling web application.",
      achievements: [
        "Managed frontend functionalities integrating social media logins and payment processors.",
        "Developed and maintained mobile app projects for both Android and iOS, incorporating Firebase cloud functions.",
        "Integrated web analytics services like Google Analytics and Facebook Pixel, improving user insights and engagement.",
      ],
    },
    {
      company: "Buzzwoo Asia co. ltd.",
      role: "Frontend Developer Intern",
      period: "Sep 2018 - May 2019",
      description:
        "I was the intern who worked on fixing bugs and implementing new features for web application.",
      achievements: [
        "Contributed to the development of high-quality and high-performance web applications using Angular during the internship.",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">my work</h1>
          <p className="text-muted-foreground text-lg">
            On a mission to build products developers love, and along the way, teach the next generation of
            developers. Here's a summary of my work so far.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{exp.company}</h2>
                  <p className="text-muted-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <p className="text-foreground">{exp.description}</p>

                <ul className="space-y-2 ml-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground list-disc leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
