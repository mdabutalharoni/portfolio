export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  role: string;
  timeline: string;
  links: {
    github?: string;
    demo?: string;
    documentation?: string;
  };
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "autonomous-robot",
    title: "Autonomous Navigation Robot",
    description: "Advanced robotics project featuring SLAM navigation, obstacle avoidance, and real-time path planning for indoor environments.",
    fullDescription: "Developed a sophisticated autonomous navigation system for indoor robotics applications. The robot uses LIDAR sensors for SLAM (Simultaneous Localization and Mapping), computer vision for obstacle detection, and advanced path planning algorithms. Built with ROS framework and deployed on Raspberry Pi 4 with custom PCB design for sensor integration.",
    image: "robotics-project.jpg",
    technologies: ["ROS", "Python", "C++", "OpenCV", "LIDAR", "Raspberry Pi"],
    role: "Lead Developer & Hardware Designer",
    timeline: "6 months (2024)",
    links: {
      github: "https://github.com/abu-talha/autonomous-robot",
      demo: "https://youtube.com/watch?v=demo",
      documentation: "https://docs.example.com/robot"
    },
    tags: ["Robotics", "AI", "Hardware", "SLAM"],
    featured: true
  },
  {
    id: "smart-home-system",
    title: "IoT Smart Home Automation",
    description: "Complete smart home ecosystem with voice control, mobile app, and automated energy management using IoT sensors and devices.",
    fullDescription: "Designed and implemented a comprehensive smart home automation system featuring voice control integration, mobile application for remote monitoring, and intelligent energy management. The system includes custom IoT sensors, automated lighting, climate control, and security features. Built with microservices architecture and deployed on cloud infrastructure.",
    image: "embedded-systems.jpg",
    technologies: ["Arduino", "ESP32", "Node.js", "React Native", "MQTT", "Firebase"],
    role: "Full-Stack Developer",
    timeline: "4 months (2024)",
    links: {
      github: "https://github.com/abu-talha/smart-home",
      demo: "https://smart-home-demo.vercel.app"
    },
    tags: ["IoT", "Mobile", "Cloud", "Automation"],
    featured: true
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and dark mode.",
    fullDescription: "Created a modern, fully responsive personal portfolio website showcasing projects, skills, and experience. Features include smooth scroll animations with Framer Motion, dark/light mode toggle, SEO optimization, and mobile-first design. Built with modern web technologies and deployed on Vercel with automatic CI/CD.",
    image: "web-development.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    role: "Frontend Developer",
    timeline: "2 months (2024)",
    links: {
      github: "https://github.com/abu-talha/portfolio",
      demo: "https://abu-talha-portfolio.vercel.app"
    },
    tags: ["Web", "Frontend", "Design", "React"],
    featured: true
  }
];

export const featuredProjects = projects.filter(project => project.featured);