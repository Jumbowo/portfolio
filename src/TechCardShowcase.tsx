import TechCard from "./TechCard";

export default function TechCardShowcase({ technologies, title }: { technologies: string[], title: string }) {
  return (
    <>
      <h4 className="text-zinc-100 text-3xl">{title}</h4>
      <section
        className="
          flex flex-row flex-wrap grow
          gap-2 py-8 text-center 
        "
      >
        {technologies.map((technology) => <TechCard key={technology} name={technology} />)}
      </section>
    </>
  );
}
