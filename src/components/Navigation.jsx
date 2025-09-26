import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to={"/"} className="text-secondary-600  ">
        Home
      </Link>
    </nav>
  );
};
export default Navigation;
