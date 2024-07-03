import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  navigate("/login");
  return (
    <div>
      <Link to={"/login"}>ingresar</Link>
      <h1 className="text-3xl font-bold transition-all hover:text-fuchsia-600">
        Hello world!
      </h1>
    </div>
  );
}

export default Main;
