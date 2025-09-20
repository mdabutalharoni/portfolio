import { ContactForm } from '../ContactForm';
import { ThemeProvider } from '../ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

export default function ContactFormExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <ContactForm />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}