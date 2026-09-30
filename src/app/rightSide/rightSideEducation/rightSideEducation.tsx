import { Calendar, GraduationCap, MapPin, Compass } from "lucide-react";
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
    degree: "B.Sc. in Software Engineering",
    dateRange: "2025 – 2029 (expected)",
    university: "IT Park University",
    location: "Tashkent, Uzbekistan",
    description:
      "Currently pursuing a Bachelor of Science in Software Engineering. Developing strong foundations in algorithms, web development, and software architecture.",
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
