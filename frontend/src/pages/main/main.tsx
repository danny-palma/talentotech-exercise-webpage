import { Link } from "react-router-dom";

function Main() {
  return (
    <h1>
      <Link to={"/login"}>ingresar</Link>
      <h1 className="text-3xl font-bold transition-all hover:text-fuchsia-600">
        Hello world!
      </h1>
    </h1>
  );
}

export default Main;
