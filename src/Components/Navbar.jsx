import { Link, NavLink } from "react-router-dom";
import "/src/css/Components/Navbar.css";

export default function Navbar() {
  return (
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="/src/assets/icons/logo.png" alt="Logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
  );
}
