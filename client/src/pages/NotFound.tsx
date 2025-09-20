import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="text-8xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Looks like this robot got lost in the digital world. 
            Let's help you find your way back to familiar territory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="hover-elevate active-elevate-2">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="hover-elevate active-elevate-2"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}