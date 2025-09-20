import { ProductCard } from '../ProductCard';
import { ThemeProvider } from '../ThemeProvider';
import { products } from '@/data/products';

export default function ProductCardExample() {
  const handleReadMore = (productId: string) => {
    console.log('Read more clicked for product:', productId);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-md mx-auto">
          <ProductCard 
            product={products[0]} 
            onReadMore={handleReadMore}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}