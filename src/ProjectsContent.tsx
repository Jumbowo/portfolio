import ProjectCard from "./ProjectCard";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";
import typescriptLogo from "./assets/typescript.svg";
import portfolioImg from "./assets/portfolio.png";
import pokedexImg from "./assets/pokedex.png";

export default function ProjectContent() {
  const projects = [
    {
      name: "Portfolio",
      info: "The site you're on right now. Clean and minimal as to not waste your time.",
      link: "/",
      sourceLink: "https://github.com/jumbowo/portfolio",
      img: portfolioImg,
      technologies: [["Typescript", typescriptLogo], ["React", reactLogo], ["TailwindCSS", tailwindLogo]],
    },
    {
      name: "Pokedex",
      info: "Search any pokemon and retrieve information about stats, evolutions, weaknesses, and more. Features fully functional dark mode and fuzzy search. Powered by Pokeapi.",
      link: "/",
      sourceLink: "https://github.com/jumbowo/pokedex",
      img: pokedexImg,
      technologies: [["Typescript", typescriptLogo], ["React", reactLogo], ["TailwindCSS", tailwindLogo]],
    },
  ];

  return (
    <section 
      className="flex flex-col grow p-4 text-2xl"
    >
      <a className="invisible relative block top-[-8rem]" id="Projects" />
      <h2 className="text-center text-7xl font-thin py-6">Projects</h2>
      <p>
        <br/>
        Check out some of the projects I've worked on below.
        They cover a wide range of skills and technologies.
        This list is constantly being updated.
      </p>
      <div className="pt-8 flex flex-col gap-4">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}

