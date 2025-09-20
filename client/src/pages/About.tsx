import { motion } from "framer-motion";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { aboutContent, education, publications } from "@/data/about";

export default function About() {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutContent.fullBio}
            </p>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Areas of Interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {aboutContent.interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" data-testid={`education-${edu.id}`}>
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                        {edu.gpa && (
                          <div className="font-medium">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Highlights</h4>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Award className="w-3 h-3 mt-1 text-primary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">📚</span>
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.id} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <Badge variant="outline" className="mt-1">
                          {pub.type}
                        </Badge>
                        <div className="flex-1">
                          <h3 className="font-bold leading-tight mb-2" data-testid={`publication-${pub.id}`}>
                            {pub.title}
                          </h3>
                          <p className="text-primary font-semibold mb-1">{pub.venue}</p>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {pub.year}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {pub.authors.length} authors
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <strong>Authors:</strong> {pub.authors.join(", ")}
                          </div>
                        </div>
                      </div>
                    </div>
                    {pub.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openLink(pub.link!)}
                        className="hover-elevate"
                        data-testid={`publication-link-${pub.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}