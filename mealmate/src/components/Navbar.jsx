import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">🍽️ MealMate</NavLink>
        <div className="nav-links">
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/plan">Meal Plan</NavLink>
        </div>
      </div>
    </nav>
  );
}
