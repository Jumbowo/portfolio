export default function ProjectCard({ project }: {
  project: {
    name: string,
    info: string,
    link: string,
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
      <div
        className="
          flex flex-col
        "
      >
        <h1><strong>{project.name}</strong></h1>
        <p>{project.info}</p>
      </div>
      <img
        className="
          max-w-[50%]
        "
        src={project.img}
        alt={"A screenshot from my project: " + project.name}
      />
    </div>
  );
}
