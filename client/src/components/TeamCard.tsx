import { motion } from "framer-motion";
import { Calendar, Users, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeamRole } from "@/data/team";
import { useState } from "react";

interface TeamCardProps {
  role: TeamRole;
}

export function TeamCard({ role }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover-elevate transition-all duration-300 border-card-border">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1" data-testid={`team-role-${role.id}`}>
                {role.role}
              </h3>
              <p className="text-primary font-semibold text-sm mb-2">
                {role.organization}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{role.period}</span>
              </div>
            </div>
            <Badge variant="secondary" className="ml-2">
              <Users className="w-3 h-3 mr-1" />
              Leadership
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pt-0">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {role.description}
          </p>

          <div className="space-y-4">
            {/* Responsibilities */}
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                <Users className="w-3 h-3" />
                Key Responsibilities
              </h4>
              <ul className="space-y-1">
                {role.responsibilities.slice(0, isExpanded ? undefined : 2).map((responsibility, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              {role.responsibilities.length > 2 && !isExpanded && (
                <p className="text-xs text-muted-foreground mt-1">
                  +{role.responsibilities.length - 2} more responsibilities
                </p>
              )}
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {role.achievements.slice(0, isExpanded ? undefined : 2).map((achievement, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              {role.achievements.length > 2 && !isExpanded && (
                <p className="text-xs text-muted-foreground mt-1">
                  +{role.achievements.length - 2} more achievements
                </p>
              )}
            </div>
          </div>

          {/* Expand/Collapse button */}
          {(role.responsibilities.length > 2 || role.achievements.length > 2) && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-4 hover-elevate"
              onClick={() => setIsExpanded(!isExpanded)}
              data-testid={`button-team-expand-${role.id}`}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Show More
                </>
              )}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}