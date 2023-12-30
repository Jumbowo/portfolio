import github from "./assets/github.svg"
import mail from "./assets/mail.svg"

export default function Socials() {
  return (
    <div
      className="
        flex flex-row self-center justify-evenly lg:gap-4 gap-2
        basis-48
        h-fill
        p-4
      "
    >
      <a href="mailto:bryan.yang255@gmail.com">
        <img
          className="
            w-8 invert
            transition ease-in-out delay-0 hover:scale-125 duration-200
          "
          src={mail}
        />
      </a>
      <a
        href="https://github.com/jumbowo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="
            w-8 rounded-full invert
            transition ease-in-out delay-0 hover:scale-125 duration-200
          "
          src={github}
        />
      </a>
    </div>
  );
}
