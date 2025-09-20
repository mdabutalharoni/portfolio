import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Get all unique tags and statuses
  const allTags = Array.from(new Set(products.flatMap(product => product.tags)));
  const allStatuses = Array.from(new Set(products.map(product => product.status)));

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = !selectedTag || product.tags.includes(selectedTag);
    const matchesStatus = !statusFilter || product.status === statusFilter;
    
    return matchesSearch && matchesTag && matchesStatus;
  });

  const handleProductReadMore = (productId: string) => {
    // In the full app, this would navigate to the product detail page
    console.log('Navigate to product detail:', productId);
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
        return status;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational kits, tools, and applications designed to help others learn robotics and embedded systems
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-products-search"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Tag Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Category:</span>
              <Badge
                variant={selectedTag === null ? "default" : "secondary"}
                className={`cursor-pointer hover-elevate ${
                  selectedTag === null ? "bg-primary" : ""
                }`}
                onClick={() => setSelectedTag(null)}
                data-testid="filter-all-categories"
              >
                All
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "secondary"}
                  className={`cursor-pointer hover-elevate ${
                    selectedTag === tag ? "bg-primary" : ""
                  }`}
                  onClick={() => setSelectedTag(tag)}
                  data-testid={`filter-category-${tag.toLowerCase()}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Status:</span>
              <Badge
                variant={statusFilter === null ? "default" : "secondary"}
                className={`cursor-pointer hover-elevate ${
                  statusFilter === null ? "bg-primary" : ""
                }`}
                onClick={() => setStatusFilter(null)}
                data-testid="filter-all-status"
              >
                All
              </Badge>
              {allStatuses.map((status) => (
                <Badge
                  key={status}
                  variant={statusFilter === status ? "default" : "secondary"}
                  className={`cursor-pointer hover-elevate ${
                    statusFilter === status ? "bg-primary" : ""
                  }`}
                  onClick={() => setStatusFilter(status)}
                  data-testid={`filter-status-${status}`}
                >
                  {getStatusText(status)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
            {selectedTag && ` in "${selectedTag}"`}
            {statusFilter && ` with status "${getStatusText(statusFilter)}"`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard 
                product={product} 
                onReadMore={handleProductReadMore}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag(null);
                setStatusFilter(null);
              }}
              variant="outline"
              className="hover-elevate"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}