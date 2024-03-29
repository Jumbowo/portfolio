export default function ContactContent() {
  return (
    <section
      className="
        flex flex-col grow p-4 text-2xl
        animate-[fadeIn_0.4s_ease-in-out_1]
      "
      id="Contact"
    >
      <a className="invisible relative block top-[-8rem]" id="Contact" />
      <h2 className="text-center text-7xl font-thin py-6">Contact</h2>
      <br/>
      <div className="flex flex-row flex-wrap justify-evenly pb-24 font-thin text-4xl text-center">
        <a className="min-w-36 py-2" href="mailto:Bryan.Yang255@gmail.com">Email</a>
        <a className="min-w-36 py-2" href="https://github.com/Jumbowo" target="_blank">Github</a>
        <a className="min-w-36 py-2" href="" target="_blank">LinkedIn</a>
        <a className="min-w-36 py-2">Resume</a>
      </div>
    </section>
  );
}
