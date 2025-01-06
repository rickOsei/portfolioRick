import CediratesImage from "../assets/projects/cedirates.webp";
import PortfolioImage from "../assets/projects/portfolio.webp";
import TelicalImage from "../assets/projects/telical-light.webp";
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
    link: "https://www.telicalhealth.com/",
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
