import Header from "./Header";

export default function HeaderBG() {

  return (
    <div
      className="
        border-b border-zinc-600
        self-center grow
        flex flex-row justify-between
        backdrop-blur-[3px]
        backdrop-brightness-[30%]
        fixed top-0 right-0 left-0 z-10
      "
    >
      <Header />
    </div>
  );
}
