import NavBar from "./NavBar";
import NavBarNarrow from "./NavBarNarrow";
import Socials from "./Socials";
import TitleCard from "./TitleCard";

export default function Header() {
  return (
    <header className="flex flex-col grow">
      <div
        className="
          w-full p-4 self-center grow
          flex flex-row justify-between
          border-b border-b-zinc-600 md:border-0
        "
      >
        <TitleCard />
        <NavBar />
        <Socials />
      </div>
      <NavBarNarrow />
    </header>
  );
}
