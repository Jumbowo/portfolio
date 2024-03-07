import { Link } from "react-router-dom";

export default function TitleCard() {
  return(
    <Link className="self-center basis-56 px-4" to="/">
      <h1 className="text-4xl font-bold">Bryan Y</h1>
      <p className="overflow-hidden whitespace-nowrap">Software Developer</p>
    </Link>
  );
}
