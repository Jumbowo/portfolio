import ProjectContent from "./ProjectsContent";
import SkillsContent from "./SkillsContent";
import ContactContent from "./ContactContent";
import upArrow from "./assets/upArrow.svg";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-4">
      <section
        className="
          flex flex-col grow p-4 text-2xl
          animate-[fadeIn_0.4s_ease-in-out_1]
        "
      >
        <a className="invisible relative block top-[-8rem]" id="About" />
        <h1 className="font-normal text-3xl">Hi, I'm <strong>Bryan.</strong></h1>
        <p>
          <br/>
          <span>
          A full stack web developer with a passion for building clean and
          reliable websites. 
          </span>
        </p>
        <p>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aspernatur corporis. Rerum, vero asperiores reprehenderit tenetur omnis rem blanditiis consequuntur tempora minus nihil quaerat explicabo delectus? Totam dolorum quos error.
        </p>
        <br/>
      </section>
      <SkillsContent />
      <ProjectContent />
      <ContactContent />
      <a href="#About" className="flex flex-row gap-1 text-2xl text-center pt-4 pb-6 justify-center">
        <span>Back to top</span>
        <img className="animate-bounce w-8 invert" src={upArrow} />
      </a>
    </div>
  );
}
