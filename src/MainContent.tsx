import TechCardShowcase from "./TechCardShowcase";

export default function MainContent() {
  return (
    <section
      className="
        flex flex-col grow p-4 text-2xl
        animate-[fadeIn_0.4s_ease-in-out_1]
      "
    >
      <p className="text-3xl"><h1>Hi, I'm <strong>Bryan</strong>.</h1></p>
      <p>
        <br/>
        A full stack web developer with a passion for building clean and
        reliable websites. Insert more stuff here about me! Woof woof woof!
      </p>
      <TechCardShowcase />
    </section>
  );
}
