import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@assets/Me.png";

export function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume__Md__Abu_Talha_Roni.pdf";
    link.target = "_blank";
    link.download = "Resume__Md__Abu_Talha_Roni.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                👋 Hello, I'm
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Md. Abu-Talha Roni
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                Robot Enthusiast, Learner & Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                I design intelligent machines and autonomous systems using embedded platforms and control algorithms. Passionate about combining hardware and software to solve real-world challenges in robotics and automation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={downloadCV}
                size="lg"
                className="hover-elevate active-elevate-2"
                data-testid="button-hero-download-cv"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>

              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="hover-elevate active-elevate-2"
                data-testid="button-hero-view-projects"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-elevate"
                  asChild
                  data-testid="button-hero-email"
                >
                  <a href="mailto:abutalharoni10@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-elevate"
                  asChild
                  data-testid="button-hero-github"
                >
                  <a href="https://github.com/mdabutalharoni" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-elevate"
                  asChild
                  data-testid="button-hero-linkedin"
                >
                  <a href="https://www.linkedin.com/in/mdabutalharoni" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Animated portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1"
              >
                <div className="w-full h-full rounded-full bg-background"></div>
              </motion.div>

              {/* Portrait image */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl"
              >
                <img
                  src={portraitImage}
                  alt="Md. Abu-Talha Roni"
                  className="w-full h-full object-cover"
                  data-testid="img-hero-portrait"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xl">🤖</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}