const skills = {
  label: [
    "HTML",
    "CSS", 
    "JavaScript",
    "TypeScript",
    "Git",
    "React",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
    "Figma",
  ],
};
const LeftSideSkills = () => {
  return (
    <div>
      <p className={`mini-titles`}>skills</p>
      {skills.label.map((skill) => (
        <div className="skills-container hover:animate-bounce" key={skill}>
          <p className="border-SL">{skill}</p>
        </div>
      ))}

    </div>
  );
};

export default LeftSideSkills;
