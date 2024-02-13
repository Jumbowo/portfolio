import MainContent from "./MainContent";

export default function Content() {

  return (
    <div
      className="
        self-center
        flex flex-row justify-center
        lg:w-[66rem]
        p-4 pt-32
      "
    >
      <MainContent />
    </div>
  );
}
