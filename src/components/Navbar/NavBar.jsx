import { Link } from "react-router-dom";
import "./nav.css";
const NavBar = () => {
  return (
    <div>
      <Link className="nav" to="/">
        Home
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NavBar;
