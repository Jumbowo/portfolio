import Content from "./Content";
import HeaderBG from "./HeaderBG";

export default function App() {

  return (
    <div
      className="
        flex flex-col
        h-screen
      "
      id="mainApp"
    >
      <HeaderBG />
      <Content  />
    </div>
  )
}
