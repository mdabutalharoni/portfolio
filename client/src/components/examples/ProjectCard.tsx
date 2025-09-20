import { ProjectCard } from '../ProjectCard';
import { ThemeProvider } from '../ThemeProvider';
import { projects } from '@/data/projects';

export default function ProjectCardExample() {
  const handleReadMore = (projectId: string) => {
    console.log('Read more clicked for project:', projectId);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-md mx-auto">
          <ProjectCard 
            project={projects[0]} 
            onReadMore={handleReadMore}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}