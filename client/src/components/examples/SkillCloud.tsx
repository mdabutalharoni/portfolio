import { SkillCloud } from '../SkillCloud';
import { ThemeProvider } from '../ThemeProvider';

export default function SkillCloudExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <SkillCloud />
      </div>
    </ThemeProvider>
  );
}