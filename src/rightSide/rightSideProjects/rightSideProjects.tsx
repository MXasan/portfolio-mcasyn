const Projects = [
  {
    id: 1,
    title: "Project 1",
    image: "path/to/image1.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Project 2",
    image: "path/to/image2.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project 3",
    image: "path/to/image3.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://example.com/project3",
  },
];

const RightSideProjects = () => {
  return (
    <div>
      <p className="mini-titles box-for-element">PROJECTS</p>
      {Projects.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.title} />
          <p>{project.title}</p>
        </div>
      ))}
      <div className="carusel-of-projects"></div>
    </div>
  );
};

export default RightSideProjects;
