import ProjectCard from "./ProjectCard";
import placeholderImg from "./assets/placeholderImg.png";

export default function ProjectContent() {
  const projects = [
    {
      name: "Portfolio",
      info: "The site you're on right now! This SPA was made using React and styled with Tailwind CSS.", 
      link: "/",
      sourceLink: "https://github.com/jumbowo/portfolio",
      img: placeholderImg,
    },
    {
      name: "Google",
      info: "This is google.com, the search engine. It can do stuff like find things on the internet.", 
      link: "https://google.com",
      sourceLink: "https://google.com",
      img: placeholderImg,
    },
    {
      name: "Woof",
      info: "Woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof", 
      link: "https://google.com",
      sourceLink: "https://google.com",
      img: placeholderImg,
    },
  ];

  return (
    <div className="flex flex-col grow p-4 text-2xl">
      <p className="text-3xl"><strong>Projects</strong></p>
      <p>
        <br/>
        Check out some of the projects I've worked on below.
        They cover a wide range of skills and technologies.
        This list is constantly being updated!
      </p>
      <div className="pt-8 flex flex-col gap-4" >
        {projects.map((project) => <ProjectCard project={project} />)}
      </div>
    </div>
  );
}

