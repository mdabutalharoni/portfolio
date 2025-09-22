export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  highlights: string[];
  gpa?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  authors: { name: string; strong?: boolean }[];
  link?: string;
  type: "patent" | "journal" | "conference" | "workshop";
}

export const aboutContent = {
  intro:
    "I am Md. Abu-Talha Roni, a robotics and embedded systems enthusiast pursuing my B.Sc. in Electrical and Electronic Engineering at RUET. I enjoy building intelligent machines that interact with the world and solve real problems through code and control systems.",

  fullBio:
    "My journey began with hands-on experiments using Arduino and quickly evolved into designing self-balancing robots, accident detection systems, and line followers using C++, ROS2, and embedded platforms like ESP32 and Raspberry Pi. I recently completed an industrial training in chip design (FPGA/ASIC) at SILICONOVA Ltd. My interests span across robotics, embedded systems, AI, and the intersection of hardware and software engineering.",

  interests: [
    "Autonomous robotics and control systems",
    "Embedded systems (Arduino, ESP32, STM32)",
    "Computer vision and sensor fusion",
    "AI and reinforcement learning",
    "IoT and wireless communication",
    "Open-source robotics development",
  ],
};


export const education: Education[] = [
  {
    id: "ruet-eee",
    degree: "B.Sc. in Electrical and Electronic Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    year: "2021 - 2025(Expected)",
    gpa: "3.67 / 4.00",
    highlights: [
      "Focused on Robotics, Embedded Systems and Control Engineering",
      "Hands-on experience with microcontrollers, communication protocols, and simulation tools",
      "Successfully completed an industrial attachment in chip design (FPGA/ASIC) at SILICONOVA Ltd.",
    ],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dinajpur Government College",
    year: "2018 - 2020",
    gpa: "5.00 / 5.00",
    highlights: [
      "Achieved GPA 5.00 in national examination",
      "Strong academic background in Physics and Mathematics",
    ],
  },
];


export const publications: Publication[] = [
  {
    id: "line-follower-patent",
    title: "Apparatus and Method for Effective Speed Control of Fast Line Following Robots",
    venue: "Patent",
    year: "2024",
    authors: [
      {name: "S. S. Swapnil"}, {name: "S. K. Sarker"}, {name: "A. B. Dibya"},
      {name: "M. T. Islam"}, {name: "M. A. T. Roni", strong: true}, {name: "K. Muhammad"}
    ],
    type: "patent", // fallback type (since no "patent" in your type union)
    link: undefined,
  }
];