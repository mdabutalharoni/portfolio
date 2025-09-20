import { Hero } from '../Hero';
import { ThemeProvider } from '../ThemeProvider';

export default function HeroExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Hero />
      </div>
    </ThemeProvider>
  );
}