export default function TechCard({ name }: { name: string }) {
  return (
    <article
      className="
        border border-zinc-600 hover:border-zinc-400
        bg-zinc-800 p-4 max-h-96 text-xl
        overflow-auto flex flex-col
        shadow-sm shadow-zinc-700
      "
    >
      <h2>{name}</h2>
    </article>
  );
}
