import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For now, just create a mailto link
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:abutalharoni10@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);

    toast({
      title: "Message prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:abutalharoni10@gmail.com",
      label: "Email",
      color: "text-red-500"
    },
    {
      icon: Github,
      href: "https://github.com/mdabutalharoni",
      label: "GitHub",
      color: "text-gray-900 dark:text-gray-100"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mdabutalharoni",
      label: "LinkedIn",
      color: "text-blue-600"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/abutalharoni10",
      label: "Facebook",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      required
                      rows={5}
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full hover-elevate"
                    disabled={isSubmitting}
                    data-testid="button-contact-submit"
                  >
                    {isSubmitting ? (
                      "Preparing..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Location */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground text-sm">Rajshahi, Bangladesh</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available for remote work and local collaborations
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start hover-elevate"
                      asChild
                      data-testid={`button-social-${link.label.toLowerCase()}`}
                    >
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <link.icon className={`w-4 h-4 ${link.color}`} />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Contact:</span>
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zone:</span>
                    <span className="font-medium">GMT+6 (Dhaka)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Md. Abu-Talha Roni. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}