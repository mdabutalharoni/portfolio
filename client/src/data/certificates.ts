import ALA from "../../../public/certificates/Advanced_Learning_Algorithms.jpg";
import pdsd from "../../../public/certificates/Python_for_Data_Science_and_AI.jpg";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  image: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    id: "aws-cloud-practitioner",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    issueDate: "2024-03-15",
    credentialUrl: "https://aws.amazon.com/verification/verify-cert",
    image: ALA,
    description: "Foundational understanding of AWS Cloud services and deployment"
  },
  {
    id: "robotics-fundamentals",
    title: "Robotics Fundamentals Certification",
    issuer: "IEEE Robotics Society",
    issueDate: "2024-01-20",
    credentialUrl: "https://ieee.org/certification/verify",
    image: pdsd,
    description: "Comprehensive certification in robotics principles and applications"
  },
  {
    id: "embedded-systems",
    title: "Advanced Embedded Systems Design",
    issuer: "ARM Education",
    issueDate: "2023-11-10",
    credentialUrl: "https://arm.com/education/certification",
    image: "certificate.jpg",
    description: "Advanced certification in embedded systems and microcontroller programming"
  },
  {
    id: "machine-learning",
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford University",
    issueDate: "2023-09-05",
    credentialUrl: "https://coursera.org/verify/specialization",
    image: "certificate.jpg",
    description: "Comprehensive machine learning specialization covering algorithms and applications"
  }
];