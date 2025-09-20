import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onReadMore: (productId: string) => void;
}

export function ProductCard({ product, onReadMore }: ProductCardProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "coming-soon":
        return "bg-yellow-500";
      case "sold-out":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Available";
      case "coming-soon":
        return "Coming Soon";
      case "sold-out":
        return "Sold Out";
      default:
        return "Unknown";
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
                {product.id === "arduino-starter-kit" && "🔧"}
                {product.id === "smart-sensor-module" && "📡"}
                {product.id === "robot-control-app" && "📱"}
              </div>
            </div>
            <div className="absolute top-2 right-2">
              <Badge className={`${getStatusColor(product.status)} text-white`}>
                {getStatusText(product.status)}
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold" data-testid={`product-title-${product.id}`}>
                {product.title}
              </h3>
              {product.price && (
                <span className="text-lg font-bold text-primary">
                  {product.price}
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex flex-col gap-3">
          <Button
            onClick={() => onReadMore(product.id)}
            className="w-full hover-elevate"
            data-testid={`button-product-read-more-${product.id}`}
          >
            Learn More
          </Button>

          <div className="flex gap-2 w-full">
            {product.links.purchase && product.status === "available" && (
              <Button
                variant="default"
                size="sm"
                className="flex-1 hover-elevate"
                onClick={() => openLink(product.links.purchase!)}
                data-testid={`button-product-purchase-${product.id}`}
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Buy Now
              </Button>
            )}
            {product.links.demo && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover-elevate"
                onClick={() => openLink(product.links.demo!)}
                data-testid={`button-product-demo-${product.id}`}
              >
                <Eye className="w-4 h-4 mr-1" />
                Demo
              </Button>
            )}
            {product.links.documentation && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover-elevate"
                onClick={() => openLink(product.links.documentation!)}
                data-testid={`button-product-docs-${product.id}`}
              >
                <FileText className="w-4 h-4 mr-1" />
                Docs
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}