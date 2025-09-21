export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "C/C++", category: "Programming", icon: "⚙️" },
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "HTML/CSS", category: "Programming", icon: "🎨" },

  // Embedded Systems & Robotics
  { name: "ESP32", category: "Embedded Systems", icon: "📶" },
  { name: "Arduino", category: "Embedded Systems", icon: "🤖" },
  { name: "Raspberry Pi", category: "Embedded Systems", icon: "🍓" },
  { name: "STM32", category: "Embedded Systems", icon: "🔩" },
  { name: "I2C/SPI/UART", category: "Embedded Systems", icon: "🔗" },

  // Robotics & AI
  { name: "ROS2", category: "Robotics", icon: "🦾" },
  { name: "PID Control", category: "Robotics", icon: "🎯" },
  { name: "SLAM", category: "Robotics", icon: "🗺️" },
  { name: "Computer Vision", category: "AI/ML", icon: "👁️" },
  { name: "Machine Learning", category: "AI/ML", icon: "🧠" },

  // Tools & Frameworks
  { name: "Git", category: "Tools", icon: "🔧" },
  { name: "GitHub", category: "Tools", icon: "🐙" },
  { name: "Cadence", category: "Tools", icon: "📐" },
  { name: "EDA Playground", category: "Tools", icon: "🎛️" },

  // Web (Mentioned indirectly)
  { name: "Basic Web Development", category: "Web", icon: "🌐" },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", icon: "🧩" },
  { name: "Teamwork", category: "Soft Skills", icon: "🤝" },
  { name: "Leadership", category: "Soft Skills", icon: "🧠" },
  { name: "Adaptability", category: "Soft Skills", icon: "🔄" },
  { name: "Presentation", category: "Soft Skills", icon: "🗣️" },
  { name: "Self-learning", category: "Soft Skills", icon: "📚" },
];

export const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));
