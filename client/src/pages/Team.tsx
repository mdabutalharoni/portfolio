import { motion } from "framer-motion";
import { TeamCard } from "@/components/TeamCard";
import { teamRoles } from "@/data/team";

export default function Team() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership & Team Roles</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My experience in leading technical teams and contributing to robotics organizations, 
            driving innovation and fostering collaborative learning environments.
          </p>
        </motion.div>

        {/* Team Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {teamRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TeamCard role={role} />
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Leadership Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Vision & Direction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in setting clear, ambitious goals that inspire team members to push their boundaries 
                  while maintaining a focus on practical implementation and measurable outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  Collaborative Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every team member brings unique perspectives and skills. I focus on creating environments 
                  where knowledge sharing is encouraged and everyone can contribute to their fullest potential.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Innovation & Learning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology evolves rapidly, and so must our approaches. I encourage experimentation, 
                  learning from failures, and staying current with emerging technologies and methodologies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Balance & Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technical excellence and personal well-being go hand in hand. I strive to create 
                  sustainable work environments that support both professional growth and work-life balance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}