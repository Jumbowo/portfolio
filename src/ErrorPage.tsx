import { useState } from "react";

export default function App() {
  const [mousePos, setMousePos] = useState({ left: 0, top: 0 });

  function handleMouseMove(event: React.MouseEvent) {
    setMousePos({ left: event.pageX, top: event.pageY });
  }

  return (
    <div
      className="
        flex flex-col
        h-screen
      "
      id="mainApp"
      onMouseMove={(event) => handleMouseMove(event)}
      style={{
        backgroundImage: `radial-gradient(36rem circle at ${mousePos.left}px ${mousePos.top}px, #27272a, #18181b)`
      }}
    >
      <p
        className="
          text-xl text-center max-w-3xl
          m-auto pb-24
        "
      >
        OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo!
        The code monkeys at our headquarters are working VEWY HAWD to fix this!!!
      </p>
    </div>
  )
}
