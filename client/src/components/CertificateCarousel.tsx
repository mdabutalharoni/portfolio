import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/data/certificates";
import certificateImage from "@assets/generated_images/Certificate_template_design_6be7d442.png";

export function CertificateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openCredential = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions in robotics, cloud computing, and technology
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel */}
          <div className="relative h-[410px] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full hover-elevate cursor-pointer" onClick={() => openCredential(certificates[currentIndex].credentialUrl)}>
                  <CardContent className="p-0 h-full">
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Certificate image */}

                      <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
                        <div className="w-full max-w-[450px] h-full max-h-[300px] aspect-video rounded-xl overflow-hidden duration-300">
                          <img
                            src={certificates[currentIndex].image || certificateImage}
                            alt={certificates[currentIndex].title}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      </div>





                      {/* Certificate details */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge className="mb-2">
                            <Award className="w-3 h-3 mr-1" />
                            Certificate
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2" data-testid={`cert-title-${certificates[currentIndex].id}`}>
                            {certificates[currentIndex].title}
                          </h3>
                          <p className="text-lg text-primary font-semibold mb-2">
                            {certificates[currentIndex].issuer}
                          </p>
                          <p className="text-muted-foreground mb-4">
                            {certificates[currentIndex].description}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(certificates[currentIndex].issueDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>

                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            openCredential(certificates[currentIndex].credentialUrl);
                          }}
                          className="w-fit hover-elevate"
                          data-testid={`cert-verify-${certificates[currentIndex].id}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Credential
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 hover-elevate"
              onClick={prevSlide}
              data-testid="button-cert-prev"
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 hover-elevate"
              onClick={nextSlide}
              data-testid="button-cert-next"
            >
              →
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                data-testid={`cert-dot-${index}`}
              />
            ))}
          </div>

          {/* Certificate preview thumbnails */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                  ? "border-primary shadow-lg"
                  : "border-transparent hover:border-muted-foreground/30"
                  }`}
                onClick={() => goToSlide(index)}
                data-testid={`cert-thumbnail-${cert.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-2">
                  <div className="text-center">
                    <div className="text-lg mb-1">🏆</div>
                    <div className="text-xs font-semibold truncate">{cert.issuer}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

