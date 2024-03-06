export default function DotfilesContent() {
  return (
    <section
      className="
        flex flex-col grow p-4 text-2xl
        animate-[fadeIn_0.4s_ease-in-out_1]
      "
    >
      <h1 className="text-3xl"><strong>Dotfiles</strong></h1>
      <br/>
      <p className="pb-8">
        This page is for showcasing my developer workflow along with the tools I use.
      </p>
      <div
        className="
          border border-zinc-600 hover:border-zinc-400
          bg-zinc-800 p-4 text-xl
          overflow-auto flex md:flex-row flex-col justify-evenly gap-4
          shadow-sm shadow-zinc-700
        "
      >

      </div>
    </section>
  );
}
