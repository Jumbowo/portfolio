import { Link } from "react-router-dom"

export default function NavItem({ name }: { name: string }) {
  return (
    <div
      className="
        text-2xl text-center
        transition ease-in-out delay-0 hover:text-zinc-300
      "
    >
      <Link to={`${name.toLowerCase()}`}>{name}</Link>
    </div>
  );
}
