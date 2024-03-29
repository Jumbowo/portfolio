import MainContent from "./MainContent";

export default function Content() {
  return (
    <main
      className="
        self-center
        flex flex-row justify-center
        lg:w-[66rem]
        p-4 md:pt-32 pt-40
      "
    >
      <MainContent />
    </main>
  );
}
