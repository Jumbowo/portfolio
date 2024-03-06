import NavBar from "./NavBar";
import Socials from "./Socials";
import TitleCard from "./TitleCard";

export default function Header() {
  return (
    <header className="self-center grow flex flex-row justify-between p-4">
      <TitleCard />
      <NavBar />
      <Socials />
    </header>
  );
}
