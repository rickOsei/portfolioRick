import CediratesImage from "../assets/projects/cedirates.webp";
import PortfolioImage from "../assets/projects/portfolio.webp";
import TelicalImage from "../assets/projects/telical-light.webp";
import EdfricaImage from "../assets/projects/edfrica.webp";
export const data = [
  {
    title: "Cedirates",
    details:
      "A web app that provides up-to-date fuel prices and foreign exchange rates for the Ghanaian market. It combines a clean UI with a content-driven approach, featuring articles and insights for financial and energy sector enthusiasts. Topics covered include API integration, dynamic data fetching, and mobile-first design principles.",
    img: CediratesImage,
    extras: "",
    skills: ["NextJs", "Shadcn", "Typescript", "Javascript", "TailwindCSS"],
    link: "https://cedirates.com/",
  },
  {
    title: "Telical Health",
    details:
      "A full-featured web app that bridges the gap between patients and healthcare providers. Built to deliver seamless virtual healthcare, it includes functionalities like patient-doctor consultations, prescription handling, and medication delivery. Topics covered in its development include WebSocket communication, real-time call adjustments, resilient localStorage-based error handling, and responsive design .",
    img: TelicalImage,
    extras: "",
    skills: ["React", "MUI", "JSDoc", "Javascript"],
    link: "https://staging.telicalhealth.com/",
  },
  {
    title: "Edfrica",
    details:
      "A comprehensive educational platform designed to enhance learning experiences through interactive tools and seamless digital resources. Built to empower both students and educators, it offers features such as progress tracking, AI tutor for personalized guidance, a PDF chat analyzer for seamless document-based learning, and an ML-driven assessment system for adaptive evaluations. Key aspects of its development include real-time data synchronization, intuitive UI/UX for engagement, and scalable architecture for diverse educational needs.",
    img: EdfricaImage,
    extras: "",
    skills: ["React", "MUI", "Javascript"],
    link: "https://www.edfrica.com/",
  },
  {
    title: "My Personal Portfolio",
    details:
      "A responsive web app that showcases my personal projects and professional expertise.",
    img: PortfolioImage,
    extras: "",
    skills: ["React", "Vite", "Typescript", "TailwindCSS"],
  },
];
