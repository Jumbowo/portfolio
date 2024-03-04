import { Link } from "react-router-dom"

export default function NavItem({ name }: { name: string }) {
  let route = "/";
  if (name !== "Home") route = name.toLowerCase();
  return (
    <div
      className="
        text-2xl text-center
        transition ease-in-out delay-0 hover:scale-110 duration-200
      "
    >
      <Link to={route}>{name}</Link>
    </div>
  );
}
