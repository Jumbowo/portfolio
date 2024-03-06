import TechCardShowcase from "./TechCardShowcase";

export default function MainContent() {
  return (
    <section
      className="
        flex flex-col grow p-4 text-2xl
        animate-[fadeIn_0.4s_ease-in-out_1]
      "
    >
      <h1 className="text-3xl">Hi, I'm <strong>Bryan</strong>.</h1>
      <p>
        <br/>
        A full stack web developer with a passion for building clean and
        reliable websites. Insert more stuff here about me! Woof woof woof!
      </p>
      <TechCardShowcase />
    </section>
  );
}
