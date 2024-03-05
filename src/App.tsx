import { useMemo, useState } from "react";
import Content from "./Content";
import HeaderBG from "./HeaderBG";

export default function App() {
  const [mousePos, setMousePos] = useState({ left: 0, top: 0 });

  const children = useMemo(() => {
    return (
      <>
        <HeaderBG /> 
        <Content />
      </>
    )}, []
  );

  function handleMouseMove(event: React.MouseEvent) {
    setMousePos({ left: event.pageX, top: event.pageY });
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      id="mainApp"
      onMouseMove={(event) => handleMouseMove(event)}
      style={{
        backgroundImage: `radial-gradient(36rem circle at ${mousePos.left}px ${mousePos.top}px, #27272a, #18181b)`
      }}
    >
      {children}
    </div>
  )
}
