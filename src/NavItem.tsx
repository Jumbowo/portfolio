import { Link } from "react-router-dom"

export default function NavItem({ name }: { name: string }) {
  return (
    <div className="text-zinc-50 text-2xl text-center transition ease-in-out delay-0 hover:scale-110 duration-200">
      <Link to={name !== "Home" ? name.toLowerCase() : "/"}>{name}</Link>
    </div>
  );
}
