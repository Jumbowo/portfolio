export default function DotfilesContent() {
  return (
    <div className="flex flex-col grow p-4 text-2xl">
      <p className="text-3xl"><strong>Dotfiles</strong></p>
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
    </div>
  );
}
