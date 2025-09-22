import { 
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiC,
  SiArduino, SiRaspberrypi, SiRos,
  SiReact, SiNodedotjs, SiHtml5, SiTailwindcss,
  SiTensorflow, SiOpencv,
  SiGit, SiDocker, SiLinux,
  SiKicad,
  SiEasyeda, SiSolid,
  SiAutocad,
  SiStimulus,
  SiMultisim,
  SiPlatformio
} from "react-icons/si";
import { Cpu, Printer, Brain, Code } from "lucide-react";

export interface Skill {
  name: string;
  category: string;
  icon: React.ElementType; // React icon component
  color?: string; // Brand color for the icon
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Programming", icon: SiPython, color: "#d0c606ff" },
  { name: "C", category: "Programming", icon: SiC, color: "#aca8ccff" },
  { name: "C++", category: "Programming", icon: SiCplusplus, color: "#00599C" },
  
  
  // Robotics & Embedded
  { name: "ROS2", category: "Robotics & Embedded", icon: SiRos, color: "#c7cbd2ff" },
  { name: "PlatformIO", category: "Robotics & Embedded", icon: SiPlatformio, color: "#e99126ff" },
  { name: "Raspberry Pi", category: "Robotics & Embedded", icon: SiRaspberrypi, color: "#aa2143ff" },
  { name: "Arduino", category: "Robotics & Embedded", icon: SiArduino, color: "#00979D" },
  
  // Simulation
  { name: "Gazebo", category: "Simulation", icon: Cpu, color: "#589636ff" },
  { name: "MATLAB", category: "Simulation", icon: Cpu, color: "#f77503ff" },
  { name: "Multisim", category: "Simulation", icon: SiMultisim, color: "#7a0defff" },


  // CAD & PCB
  { name: "PCB Design", category: "CAD", icon: SiEasyeda, color: "#314CB0" },
  { name: "SolidWorks", category: "CAD", icon: SiSolid, color: "#b93510ff" },
  { name: "AutoCad", category: "CAD", icon: SiAutocad, color: "#b93510ff" },

  // AI/ML
  { name: "TensorFlow", category: "AI/ML", icon: SiTensorflow, color: "#FF6F00" },
  { name: "OpenCV", category: "AI/ML", icon: SiOpencv, color: "#4cc65cff" },
  { name: "Machine Learning", category: "AI/ML", icon: Brain, color: "#8B5CF6" },
  
  // Web Technologies
  { name: "React", category: "Web", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", category: "Web", icon: SiNodedotjs, color: "#339933" },
  
  
  
  // Tools
  { name: "Linux", category: "Tools", icon: SiLinux, color: "#FCC624" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#F05032" },
  { name: "VS Code", category: "Tools", icon: Code, color: "#007ACC" },
];

export const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));