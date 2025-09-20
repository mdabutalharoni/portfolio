import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onReadMore: (projectId: string) => void;
}

export function ProjectCard({ project, onReadMore }: ProjectCardProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Use generated images
  const getProjectImage = () => {
    switch (project.id) {
      case "autonomous-robot":
        return "@assets/generated_images/Robotics_project_showcase_image_28b797e9.png";
      case "smart-home-system":
        return "@assets/generated_images/Embedded_systems_project_image_be15075e.png";
      case "portfolio-website":
        return "@assets/generated_images/Web_development_project_mockup_8571eb5e.png";
      default:
        return "@assets/generated_images/Robotics_project_showcase_image_28b797e9.png";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover-elevate transition-all duration-300 border-card-border">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-4xl">
                {project.id === "autonomous-robot" && "🤖"}
                {project.id === "smart-home-system" && "🏠"}
                {project.id === "portfolio-website" && "💻"}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2" data-testid={`project-title-${project.id}`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <User className="w-3 h-3" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{project.timeline}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 4} more
                  </Badge>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex flex-col gap-3">
          <Button
            onClick={() => onReadMore(project.id)}
            className="w-full hover-elevate"
            data-testid={`button-project-read-more-${project.id}`}
          >
            Read More
          </Button>

          <div className="flex gap-2 w-full">
            {project.links.github && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover-elevate"
                onClick={() => openLink(project.links.github!)}
                data-testid={`button-project-github-${project.id}`}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            )}
            {project.links.demo && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover-elevate"
                onClick={() => openLink(project.links.demo!)}
                data-testid={`button-project-demo-${project.id}`}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}