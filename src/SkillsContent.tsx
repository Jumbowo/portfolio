import TechCardShowcase from "./TechCardShowcase";

const languages = ["HTML", "Css", "JavaScript", "TypeScript", "SQL", "Python", "Java", "C", "C++", "Lua", "Bash"];
const frameworks = ["React", "Node", "Express", "MongoDB", "TailwindCSS", "Flask", "SQLite", "Jest", "Next"];
const tools = ["Git", "Unix", "Vim/Neovim", "Visual Studio Code", "Windows", "MacOS", "Linux", "Microsoft 365"];

export default function SkillsContent() {
  return (
    <div className="flex flex-col p-4 text-2xl">
      <h2 className="text-center text-7xl font-thin py-6">Skills</h2>
      <div>
        <TechCardShowcase technologies={languages} title="Languages" />
      </div>
      <div>
        <TechCardShowcase technologies={frameworks} title="Frameworks" />
      </div>
      <div>
        <TechCardShowcase technologies={tools} title="Tools" />
      </div>
    </div>
  );
}
