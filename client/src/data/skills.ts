export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "C/C++", category: "Programming", level: 5, icon: "⚙️" },
  { name: "Python", category: "Programming", level: 4, icon: "🐍" },
  { name: "HTML/CSS", category: "Programming", level: 4, icon: "🎨" },

  // Embedded Systems & Robotics
  { name: "ESP32", category: "Embedded Systems", level: 5, icon: "📶" },
  { name: "Arduino", category: "Embedded Systems", level: 5, icon: "🤖" },
  { name: "Raspberry Pi", category: "Embedded Systems", level: 4, icon: "🍓" },
  { name: "STM32", category: "Embedded Systems", level: 3, icon: "🔩" },
  { name: "I2C/SPI/UART", category: "Embedded Systems", level: 4, icon: "🔗" },

  // Robotics & AI
  { name: "ROS2", category: "Robotics", level: 4, icon: "🦾" },
  { name: "PID Control", category: "Robotics", level: 5, icon: "🎯" },
  { name: "SLAM", category: "Robotics", level: 3, icon: "🗺️" },
  { name: "Computer Vision", category: "AI/ML", level: 4, icon: "👁️" },
  { name: "Machine Learning", category: "AI/ML", level: 3, icon: "🧠" },

  // Tools & Frameworks
  { name: "Git", category: "Tools", level: 4, icon: "🔧" },
  { name: "GitHub", category: "Tools", level: 4, icon: "🐙" },
  { name: "Cadence", category: "Tools", level: 3, icon: "📐" },
  { name: "EDA Playground", category: "Tools", level: 3, icon: "🎛️" },

  // Web (Mentioned indirectly)
  { name: "Basic Web Development", category: "Web", level: 3, icon: "🌐" },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", level: 5, icon: "🧩" },
  { name: "Teamwork", category: "Soft Skills", level: 5, icon: "🤝" },
  { name: "Leadership", category: "Soft Skills", level: 4, icon: "🧠" },
  { name: "Adaptability", category: "Soft Skills", level: 5, icon: "🔄" },
  { name: "Presentation", category: "Soft Skills", level: 4, icon: "🗣️" },
  { name: "Self-learning", category: "Soft Skills", level: 5, icon: "📚" },
];

export const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));
