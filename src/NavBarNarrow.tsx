import NavItem from "./NavItem";

export default function NavBarNarrow() {
  return (
    <nav
      className="
        md:hidden py-2
        flex flex-row justify-evenly lg:gap-8 gap-2
      "
    >    
      <NavItem name="About" />
      <NavItem name="Projects" />
      <NavItem name="Contact" />
    </nav>
  )
}
