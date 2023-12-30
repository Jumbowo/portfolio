import Header from "./Header";
import Content from "./Content";

export default function App() {

  return (
    <div
      className="
        flex flex-col
        h-screen
        bg-gradient-to-tl
      "
      id="mainApp"
    >
      <Header />
      <Content  />
    </div>
  )
}
