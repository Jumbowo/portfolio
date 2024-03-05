import { Link } from "react-router-dom";

export default function TitleCard() {
  return(
    <Link className="self-center basis-56 px-4" to="/">
      <h1 className="text-4xl font-bold">Bryan Y</h1>
      <h2>Software Developer</h2>
    </Link>
  );
}
