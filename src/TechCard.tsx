export default function TechCard({ name }: { name: string }) {
  return (
    <article
      className="
        border border-zinc-600 hover:border-zinc-400
        bg-zinc-800 p-2 min-w-20 text-xl
        overflow-auto flex flex-col
        shadow-sm shadow-zinc-700
        text-teal-200 
      "
    >
      <span>{name}</span>
    </article>
  );
}
