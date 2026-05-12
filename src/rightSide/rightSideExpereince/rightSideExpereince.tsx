import { Calendar, Building2, MapPin, Code, Layers, Globe } from "lucide-react";
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
    role: "Frontend Lead",
    dateRange: "Jan 24 - Present",
    company: "Alpha",
    location: "Cupertino, CA",
    description:
      "Spearheaded the development of a suite of progressive web applications using React and Swift, and GraphQL.",
    logoBg: "#8B1A1A",
    icon: <Code strokeWidth={2.2} />,
  },
  {
    role: "Frontend Engineer",
    dateRange: "Sep 22 - Dec 23",
    company: "Sigma",
    location: "New York, NY",
    description:
      "Enhanced the user interfaces for the Sigma Web Player using React and Redux, achieving a 25% increase in user engagement.",
    logoBg: "#1B6B4A",
    icon: <Layers strokeWidth={2.2} />,
  },
  {
    role: "Junior Software Engineer",
    dateRange: "Feb 20 - Dec 23",
    company: "Omega",
    location: "Menlo Park, CA",
    description:
      "Involved in the lifecycle of feature development from conception to deployment, emphasizing responsive design and accessibility standards.",
    logoBg: "#2E5C8A",
    icon: <Globe strokeWidth={2.2} />,
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
