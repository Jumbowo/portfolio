import NavBar from "./NavBar";
import Socials from "./Socials";
import TitleCard from "./TitleCard";

export default function Header() {

  return (
    <div
      className="
        border-b border-zinc-600
        flex flex-row justify-between
        p-3 lg:px-40
        backdrop-blur-[3px]
        backdrop-brightness-[30%]
        sticky top-0
      "
    >
      <TitleCard />
      <NavBar />
      <Socials />
    </div>
  );
}
