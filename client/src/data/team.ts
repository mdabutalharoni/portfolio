export interface TeamRole {
  id: string;
  role: string;
  organization: string;
  description: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export const teamRoles: TeamRole[] = [
  {
    id: "sae-head-electrical",
    role: "Head Of Electrical",
    organization: "Society of Automotive Engineers (SAE)",
    description: "Leading the electrical team for Formula SAE racing vehicle development, overseeing all electrical systems design and implementation.",
    period: "2023 - Present",
    responsibilities: [
      "Lead electrical system design for Formula SAE vehicle",
      "Manage team of 8 electrical engineering students",
      "Coordinate with mechanical and software teams",
      "Ensure compliance with SAE competition regulations"
    ],
    achievements: [
      "Reduced vehicle weight by 15% through optimized wiring harness design",
      "Implemented advanced telemetry system for real-time performance monitoring",
      "Led team to 3rd place in electrical design competition"
    ]
  },
  {
    id: "team-zenith-lead",
    role: "Team Lead",
    organization: "Team Zenith",
    description: "Leading a multidisciplinary robotics team focused on autonomous systems and AI integration for competitive robotics.",
    period: "2022 - Present",
    responsibilities: [
      "Coordinate project planning and execution",
      "Mentor junior team members in robotics development",
      "Represent team in competitions and presentations",
      "Manage technical documentation and knowledge transfer"
    ],
    achievements: [
      "Won 1st place in National Robotics Competition 2023",
      "Successfully deployed 5 autonomous robot prototypes",
      "Established partnerships with 3 industry sponsors"
    ]
  },
  {
    id: "ruet-electra-member",
    role: "Member",
    organization: "RUET Electra Force",
    description: "Active member of the university's premier electrical engineering society, contributing to technical projects and community outreach.",
    period: "2021 - Present",
    responsibilities: [
      "Participate in technical workshops and seminars",
      "Contribute to educational content development",
      "Assist in organizing university technical events",
      "Mentor first-year students in electrical fundamentals"
    ],
    achievements: [
      "Organized 5 successful technical workshops",
      "Contributed to 10+ educational blog posts",
      "Mentored 20+ junior students"
    ]
  }
];