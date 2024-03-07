import externalLink from "./assets/externalLink.svg";

export default function ProjectCard({ project }: {
  project: {
    name: string,
    info: string,
    link: string,
    sourceLink: string,
    img: string,
    technologies: string[][], // [[tech name, tech logo]]
  }
}) {
  return (
    <article
      className="
        border border-zinc-600 hover:border-zinc-400
        bg-zinc-800 p-4 text-xl
        overflow-auto flex md:flex-row flex-col justify-evenly gap-4
        shadow-sm shadow-zinc-700
      "
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <a
            className="flex flex-row gap-1 text-2xl"
            href={project.link}
            target="blank">
            <h2>{project.name}</h2>
            <img className="w-4 invert-[.50] translate-y-0.5" src={externalLink} />
          </a>
          <div className="flex flex-row gap-2 pr-3 scale-125">
            {project.technologies.map((tech: string[]) => {
              return <img className="w-6" src={tech[1]} title={tech[0]} alt={tech[0] + " logo"} key={tech[1]} />
            })}
          </div>
        </div>
        <p>{project.info}</p>
        <a
          className="flex flex-row gap-1 text-blue-400 visited:text-violet-600"
          href={project.sourceLink}
          target="blank">
          Check out the source code here!
          <img className="w-4 invert-[.50] translate-y-0.5" src={externalLink} />
        </a>
      </div>
      <a className="md:max-w-[50%] max-w-100% self-center" href={project.img} target="blank">
        <img src={project.img} alt={"A screenshot from my project: " + project.name} />
      </a>
    </article>
  );
}
