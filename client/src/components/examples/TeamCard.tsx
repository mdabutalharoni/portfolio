import { TeamCard } from '../TeamCard';
import { ThemeProvider } from '../ThemeProvider';
import { teamRoles } from '@/data/team';

export default function TeamCardExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-md mx-auto">
          <TeamCard role={teamRoles[0]} />
        </div>
      </div>
    </ThemeProvider>
  );
}