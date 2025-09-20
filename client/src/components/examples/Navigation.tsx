import { Navigation } from '../Navigation';
import { ThemeProvider } from '../ThemeProvider';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 p-8">
          <h1 className="text-2xl font-bold">Navigation Example</h1>
          <p className="text-muted-foreground mt-2">
            The navigation bar is fixed at the top with responsive design and theme toggle.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}