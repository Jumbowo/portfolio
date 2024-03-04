import externalLink from "./assets/externalLink.svg";

export default function ProjectCard({ project }: {
  project: {
    name: string,
    info: string,
    link: string,
    sourceLink: string,
    img: string,
  }
}) {
  return (
    <div
      className="
        border border-zinc-600 hover:border-zinc-400
        bg-zinc-800 p-4 text-xl
        overflow-auto flex flex-row justify-evenly gap-4
        shadow-sm shadow-zinc-700
      "
    >
      <div className="flex flex-col gap-4" >
        <a href={project.link} target="blank">
          <h1 className="flex flex-row gap-1">
            <strong>{project.name}</strong>
            <img className="w-4 invert-[.50] translate-y-0.5" src={externalLink}/>
          </h1>
        </a>
        <p>{project.info}</p>
        <a 
          className="
            text-blue-400 visited:text-violet-600 flex flex-row gap-1
          "
          href={project.sourceLink}
          target="blank">
          <p>Check out the source code here!</p>
          <img className="w-4 invert-[.50] translate-y-0.5" src={externalLink}/>
        </a>
      </div>
      <a className="max-w-[50%] self-center" href={project.img} target="blank">
        <img src={project.img} alt={"A screenshot from my project: " + project.name} />
      </a>
    </div>
  );
}
