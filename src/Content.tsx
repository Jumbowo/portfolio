import { Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
}
