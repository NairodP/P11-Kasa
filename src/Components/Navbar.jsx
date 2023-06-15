import { Link, NavLink } from "react-router-dom";
import "/src/css/Components/Navbar.css";

// Composant Navbar affichant la barre de navigation.
export default function Navbar() {
  return (
      <nav className="nav">
        {/* Logo redirigeant vers la page d'accueil */}
        <Link to="/" className="logo">
          <img src="/src/assets/icons/logo.png" alt="Logo" />
        </Link>
        <ul>
          <li>
            {/* Lien actif pour la page "Accueil" */}
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            {/* Lien actif pour la page "A Propos" */}
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
  );
}
