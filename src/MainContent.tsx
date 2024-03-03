import TechCardShowcase from "./TechCardShowcase";

export default function MainContent() {
  return (
    <div
      className="
      flex flex-col
      grow p-4
      text-2xl
      "
    >
      <p className="text-3xl">Hi, I'm <strong>Bryan</strong>.</p>
      <p>
        <br/>
        A full stack web developer with a passion for building clean and
        reliable websites. Insert more stuff here about me! Woof woof woof!
      </p>
      <TechCardShowcase />
    </div>
  );
}
