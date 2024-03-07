import ProjectCard from "./ProjectCard";
import placeholderImg from "./assets/placeholderImg.png";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";
import typescriptLogo from "./assets/typescript.svg";

export default function ProjectContent() {
  const projects = [
    {
      name: "Portfolio",
      info: "The site you're on right now. Clean and minimal as to not waste your time.",
      link: "/",
      sourceLink: "https://github.com/jumbowo/portfolio",
      img: placeholderImg,
      technologies: [["Typescript", typescriptLogo], ["React", reactLogo], ["TailwindCSS", tailwindLogo]],
    },
    {
      name: "Blep",
      info: "Blep blep blep blep blep blep blep blep blep blep blep blep blep blep",
      link: "/",
      sourceLink: "https://github.com/jumbowo/portfolio",
      img: placeholderImg,
      technologies: [["React", reactLogo], ["TailwindCSS", tailwindLogo]],
    },
    {
      name: "Blep",
      info: "Blep blep blep blep blep blep blep blep blep blep blep blep blep blep",
      link: "/",
      sourceLink: "https://github.com/jumbowo/portfolio",
      img: placeholderImg,
      technologies: [["React", reactLogo], ["TailwindCSS", tailwindLogo]],
    },
  ];

  return (
    <section 
      className="
        flex flex-col grow p-4 text-2xl
        animate-[fadeIn_0.4s_ease-in-out_1]
      "
    >
      <h1 className="text-3xl">Projects</h1>
      <p>
        <br/>
        Check out some of the projects I've worked on below.
        They cover a wide range of skills and technologies.
        This list is constantly being updated.
      </p>
      <div className="pt-8 flex flex-col gap-4" >
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}

