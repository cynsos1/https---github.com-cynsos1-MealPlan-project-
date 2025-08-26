import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="stack">
      <h1>Welcome to MealMate 🍽️</h1>
      <p className="muted">Plan a week of meals, search recipes, and keep it simple.</p>
      <div className="row">
        <Link to="/recipes" className="btn primary">Browse Recipes</Link>
        <Link to="/plan" className="btn">Open Meal Plan</Link>
      </div>
    </div>
  );
}
