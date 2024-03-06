import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav
      className="
        hidden 
        md:flex flex-row justify-evenly lg:gap-8 gap-2
        basis-56 self-center
      "
    >    
      <NavItem name="Home" />
      <NavItem name="Projects" />
      <NavItem name="Contact" />
    </nav>
  )
}
