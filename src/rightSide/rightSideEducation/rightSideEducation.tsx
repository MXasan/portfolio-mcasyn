import { Calendar, GraduationCap, MapPin, PenTool, Compass } from "lucide-react";
import "./rightSideEducation.css";

interface Education {
  degree: string;
  dateRange: string;
  university: string;
  location: string;
  description: string;
  logoBg: string;
  icon: React.ReactNode;
}

const educations: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    dateRange: "Sep 18 - Jun 20",
    university: "Astra University",
    location: "Stanford, CA",
    description:
      'Specialized in Software Engineering. Completed thesis on "Scalable Architectures for Real-Time Web Applications" and graduated with distinction.',
    logoBg: "#F5E6A3",
    icon: <PenTool strokeWidth={2.2} />,
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    dateRange: "Sep 15 - Sep 18",
    university: "Nova University",
    location: "Providence, RI",
    description:
      "Graduated with honors. Relevant coursework included Advanced Algorithms, Web Development, and User Interface Design.",
    logoBg: "#E8A87C",
    icon: <Compass strokeWidth={2.2} />,
  },
];

const RightSideEducation = () => {
  return (
    <div className="education-section right-container">
      <p className="mini-titles box-for-element">Education</p>

      {educations.map((edu, index) => (
        <div className="education-card" key={index}>
          <div
            className="education-logo"
            style={{ backgroundColor: edu.logoBg }}
          >
            {edu.icon}
          </div>

          <div className="education-content">
            <span className="education-degree">{edu.degree}</span>

            <div className="education-meta">
              <span className="education-meta-item">
                <Calendar />
                {edu.dateRange}
              </span>
              <span className="education-meta-item">
                <GraduationCap />
                {edu.university}
              </span>
              <span className="education-meta-item">
                <MapPin />
                {edu.location}
              </span>
            </div>

            <p className="education-description">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSideEducation;
