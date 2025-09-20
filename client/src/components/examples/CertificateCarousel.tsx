import { CertificateCarousel } from '../CertificateCarousel';
import { ThemeProvider } from '../ThemeProvider';

export default function CertificateCarouselExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <CertificateCarousel />
      </div>
    </ThemeProvider>
  );
}