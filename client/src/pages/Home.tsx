import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { SkillCloud } from "@/components/SkillCloud";
import { CertificateCarousel } from "@/components/CertificateCarousel";
import { ProjectCard } from "@/components/ProjectCard";
import { ProductCard } from "@/components/ProductCard";
import { TeamCard } from "@/components/TeamCard";
import { ContactForm } from "@/components/ContactForm";
import { featuredProjects } from "@/data/projects";
import { featuredProducts } from "@/data/products";
import { teamRoles } from "@/data/team";
import { aboutContent, education, publications } from "@/data/about";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectReadMore = (projectId: string) => {
    // In the full app, this would navigate to the project detail page
    console.log('Navigate to project:', projectId);
  };

  const handleProductReadMore = (productId: string) => {
    // In the full app, this would navigate to the product detail page
    console.log('Navigate to product:', productId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
              {aboutContent.intro}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Preview */}
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎓 Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {education.slice(0, 1).map((edu) => (
                      <div key={edu.id}>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-primary text-sm">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm">{edu.year}</p>
                        {edu.gpa && (
                          <p className="text-sm">GPA: <span className="font-semibold">{edu.gpa}</span></p>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link href="/about">
                    <Button variant="outline" size="sm" className="mt-4 hover-elevate">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Publications Preview */}
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📚 Publications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {publications.slice(0, 1).map((pub) => (
                      <div key={pub.id}>
                        <h4 className="font-semibold text-sm leading-tight">{pub.title}</h4>
                        <p className="text-primary text-sm">{pub.venue}</p>
                        <p className="text-muted-foreground text-sm">{pub.year}</p>
                        <p className="text-xs text-muted-foreground">
                          {pub.authors.map((author, index) => (
                            <span key={index} className={author.strong ? "font-bold" : ""}>
                              {author.name}{index < pub.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link href="/about">
                    <Button variant="outline" size="sm" className="mt-4 hover-elevate">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillCloud />

      {/* Certificates Section */}
      <CertificateCarousel />

      {/* Projects Preview Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work in robotics, embedded systems, and project development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard 
                  project={project} 
                  onReadMore={handleProjectReadMore}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" className="hover-elevate" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational kits, tools, and applications designed to help others learn and build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  onReadMore={handleProductReadMore}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" className="hover-elevate" data-testid="button-view-all-products">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Team Roles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Active leadership positions in robotics organizations and student societies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamCard role={role} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/team">
              <Button size="lg" className="hover-elevate" data-testid="button-view-team-details">
                View Team Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}