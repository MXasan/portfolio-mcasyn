import { Calendar, Building2, MapPin, Code, Layers } from "lucide-react";
import "./rightSideExpereince.css";

interface Experience {
  role: string;
  dateRange: string;
  company: string;
  location: string;
  description: string;
  logoBg: string;
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    dateRange: "Jan 2025 – Present",
    company: "EdgeRunners",
    location: "Tashkent, Uzbekistan (Remote)",
    description:
      "Developed and deployed a production-ready React catalog application for agents, accessible at next-store-gamma.vercel.app. Building an HR portfolio platform utilizing Next.js, TypeScript, and Tailwind CSS, featuring blog functionalities and vacancy listings. Engages directly with clients to gather feedback and iteratively refine features.",
    logoBg: "#1B3A6B",
    icon: <Code strokeWidth={2.2} />,
  },
  {
    role: "Frontend Developer",
    dateRange: "Feb 2025 – Apr 2025",
    company: "EdUmeed",
    location: "Tashkent, Uzbekistan (Remote)",
    description:
      "Delivered a fully functional educational web platform in just three months, built efficiently with React and Vite. Accurately translated 100% of Figma design specifications into responsive and reusable frontend components. Integrated robust REST APIs to enable dynamic content delivery and enhance platform interactivity.",
    logoBg: "#1B6B4A",
    icon: <Layers strokeWidth={2.2} />,
  },
];

const RightSideExperience = () => {
  return (
    <div className="experience-section right-container">
      <p className="mini-titles box-for-element">Experience</p>

      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div
            className="experience-logo"
            style={{ backgroundColor: exp.logoBg }}
          >
            {exp.icon}
          </div>

          <div className="experience-content">
            <span className="experience-role">{exp.role}</span>

            <div className="experience-meta">
              <span className="experience-meta-item">
                <Calendar />
                {exp.dateRange}
              </span>
              <span className="experience-meta-item">
                <Building2 />
                {exp.company}
              </span>
              <span className="experience-meta-item">
                <MapPin />
                {exp.location}
              </span>
            </div>

            <p className="experience-description">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSideExperience;
