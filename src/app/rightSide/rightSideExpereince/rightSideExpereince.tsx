import { Calendar, Building2, MapPin } from "lucide-react";
import "./rightSideExpereince.css";

import hackonnect from "../../../assets/hackonnect.jpg";
import rs from "../../../assets/rs.jpg";
import gk from "../../../assets/gk.jpg";
import exadel from "../../../assets/exadel.jpg";

interface Experience {
  role: string;
  dateRange: string;
  company: string;
  location: string;
  description: string;
  icon: string;
  alt: string;
}

const experiences: Experience[] = [
  {
    role: "AI Product Manager",
    dateRange: "Sep 2026 – Present",
    company: "GK Technologies",
    location: "Tashkent, Uzbekistan (On-site)",
    description:
      "Managing AI-driven product initiatives, working with Amazon Bedrock to shape and deliver features from concept to release.",
    icon: gk,
    alt: "GK Technologies Logo",
  },
  {
    role: "Software Engineer Intern",
    dateRange: "Jul 2026 – Present",
    company: "Hackonnect",
    location: "Tashkent, Uzbekistan (Remote)",
    description:
      "Improved Lighthouse performance on startupweekend.uz from 36 to 82, cutting blocking time from 4.6 s to 120 ms and LCP from 5.0 s to 1.8 s, using Next.js and modern front-end optimization techniques.",
    icon: hackonnect,
    alt: "Hackonnect Logo",
  },
  {
    role: "Digital Publishing Operations Specialist",
    dateRange: "Jul 2026 – Aug 2026",
    company: "Exadel",
    location: "Tashkent, Uzbekistan (Hybrid)",
    description:
      "Handled digital publishing operations using Adobe Experience Manager (AEM), managing and maintaining web content.",
    icon: exadel,
    alt: "Exadel Logo",
  },
  {
    role: "Frontend Developer Student Trainee",
    dateRange: "May 2024 – Apr 2025",
    company: "The Rolling Scopes School",
    location: "Uzbekistan (Hybrid)",
    description:
      "Supported day-to-day digital publishing operations, coordinating workflows for 150+ pieces of content per week across editorial, design, and technical teams.",
    // Completed a one-year apprenticeship focused on front-end development and JavaScript, building hands-on projects and following industry best practices.
    icon: rs,
    alt: "Rolling Scopes School Logo",
  },
];

const RightSideExperience = () => {
  return (
    <div className="experience-section right-container">
      <p className="mini-titles box-for-element">Experience</p>

      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <img src={exp.icon} alt={exp.company} className="experience-logo" />

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
