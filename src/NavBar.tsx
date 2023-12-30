export default function NavBar() {
  return (
    <nav
      className="
        hidden 
        md:flex flex-row justify-evenly lg:gap-8 gap-2
        self-center
      "
    >    
      <p className="text-2xl text-center">Home</p>
      <p className="text-2xl text-center">Projects</p>
      <p className="text-2xl text-center">Contact</p>
    </nav>    
  )
}
