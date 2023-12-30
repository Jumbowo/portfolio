import NavBar from "./NavBar";
import Socials from "./Socials";
import TitleCard from "./TitleCard";

export default function Header() {

  return (
    <div
      className="
        border-b border-zinc-500
        flex flex-row justify-between
        p-3 lg:px-40
        bg-zinc-950
        sticky
      "
    >
      <TitleCard />
      <NavBar />
      <Socials />
    </div>
  );
}
