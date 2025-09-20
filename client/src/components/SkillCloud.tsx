import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills, skillCategories } from "@/data/skills";
import { useState } from "react";

export function SkillCloud() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning robotics, embedded systems, AI, and web development
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Badge
            variant={selectedCategory === null ? "default" : "secondary"}
            className={`cursor-pointer hover-elevate ${
              selectedCategory === null ? "bg-primary" : ""
            }`}
            onClick={() => setSelectedCategory(null)}
            data-testid="filter-all-skills"
          >
            All Skills
          </Badge>
          {skillCategories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className={`cursor-pointer hover-elevate ${
                selectedCategory === category ? "bg-primary" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-card border border-card-border rounded-lg p-4 text-center hover-elevate transition-all duration-300">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  {skill.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{skill.category}</p>
                
                {/* Skill level indicator */}
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index < skill.level
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {skillCategories.slice(0, 4).map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              return (
                <div key={category} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {categorySkills.length}+
                  </div>
                  <div className="text-sm text-muted-foreground">{category}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}