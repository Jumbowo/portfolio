export default function DotfilesContent() {
  return (
    <section
      className="
        flex flex-col grow p-4 text-2xl
        animate-[fadeIn_0.4s_ease-in-out_1]
      "
    >
      <p className="text-3xl"><h1><strong>Dotfiles</strong></h1></p>
      <br/>
      <p className="pb-8">
        Dotfiles and stuff
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
