import webDesign from "../../../public/certificates/Web_Design.jpg";
import supervisedML from "../../../public/certificates/Supervised_Learning.jpg";
import siliconova from "../../../public/certificates/Siliconova_Industrial_Attachment.jpg";
import pdsd from "../../../public/certificates/Python_for_Data_Science_and_AI.jpg";
import programmingPython from "../../../public/certificates/Programming_for_Everybody.jpg";
import mlSpecialization from "../../../public/certificates/ML_Specialization.jpg";
import matlab from "../../../public/certificates/MATLAB_Onramp.jpg";
import aiCerts from "../../../public/certificates/AICERTs.jpg";
import ALA from "../../../public/certificates/Advanced_Learning_Algorithms.jpg";
import PDSAI from "../../../public/certificates/Python_for_Data_Science_and_AI_excellence.jpg";
import UIU from "../../../public/certificates/UIU_CSE_FEST.jpg";
import Unsupervised from "../../../public/certificates/Unsupervised_Reinforcement.jpg";


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
    id: "python-ai",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (via Coursera)",
    issueDate: "2024-09-03",
    credentialUrl: "https://coursera.org/verify/O1Z9D35OAOLN",
    image: pdsd,
    description: "Practical course on Python programming applied to AI and data science problems."
  },
  {
    id: "programming-python",
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    issueDate: "2023-07-31",
    credentialUrl: "https://coursera.org/verify/C9BP9VW7G8NJ",
    image: programmingPython,
    description: "Foundational course on Python programming for beginners by Dr. Charles Severance."
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI - Stanford University",
    issueDate: "2024-11-09",
    credentialUrl: "https://coursera.org/verify/specialization/6B5IPEE6UXP4",
    image: mlSpecialization,
    description: "Comprehensive ML specialization covering supervised, unsupervised, and reinforcement learning."
  },
  {
    id: "advanced-learning",
    title: "Advanced Learning Algorithms",
    issuer: "Stanford University (Coursera)",
    issueDate: "2024-09-04",
    credentialUrl: "https://coursera.org/verify/OD487W0FBUVV",
    image: ALA,
    description: "Intermediate ML course including regularization and neural networks."
  },
  {
    id: "supervised-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI - Stanford University",
    issueDate: "2024-08-16",
    credentialUrl: "https://coursera.org/verify/P5SLVX8DR8J8",
    image: supervisedML,
    description: "Hands-on training in supervised learning models including linear and logistic regression."
  },
  {
    id: "unsupervised-rl",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Stanford University (Coursera)",
    issueDate: "2024-11-09",
    credentialUrl: "https://coursera.org/verify/QHXOE6K3TDTM",
    image: Unsupervised,
    description: "Advanced topics including clustering, recommenders, and reinforcement learning."
  },
  {
    id: "industrial-training",
    title: "Industrial Training",
    issuer: "Siliconova Ltd.",
    issueDate: "2025-03-07",
    credentialUrl: "https://siliconova.com",
    image: siliconova,
    description: "Industrial training on RTL design, functional verification, and EDA tools."
  },
  {
    id: "matlab-onramp",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    issueDate: "2023-06-07",
    credentialUrl: "https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted",
    image: matlab,
    description: "Self-paced training on MATLAB fundamentals including scripting and visualization."
  },
  {
    id: "ai-certs",
    title: "AI+ Prompt Engineer Level 1™",
    issuer: "AI CERTs™",
    issueDate: "2025-06-29",
    credentialUrl: "https://www.aicerts.ai/certifications/essentials/ai-prompt-engineer",
    image: aiCerts,
    description: "Blockchain-verified certificate for mastering AI prompt engineering fundamentals."
  },
  {
    id: "dsai-excellence",
    title: "Python for Data Science and AI",
    issuer: "IBM (Credly)",
    issueDate: "2024-08-28",
    credentialUrl: "https://www.credly.com",
    image: PDSAI,
    description: "Professional certificate for commitment to excellence in Python for AI."
  },
  {
    id: "web-design",
    title: "Web Design",
    issuer: "10 Minute School",
    issueDate: "2021-05-27",
    credentialUrl: "#",
    image: webDesign,
    description: "Completed online web design course covering HTML, CSS, and layout best practices.",
  },
  {
    id: "uiu-line-follower",
    title: "Line Following Robot - CSE Fest",
    issuer: "UIU CSE FEST 2025",
    issueDate: "2025-03-15",
    credentialUrl: "https://uiu.ac.bd/csefest",
    image: UIU,
    description: "Participation in competitive line following robot event at UIU CSE FEST."
  },
];
