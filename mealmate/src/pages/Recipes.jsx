import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import { searchRecipes } from "../services/api.js";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [plan, setPlan] = useState(() =>
    JSON.parse(localStorage.getItem("mealmate:plan") || "{}")
  );

  useEffect(() => { handleSearch(""); }, []);

  async function handleSearch(q) {
    const res = await searchRecipes(q);
    setRecipes(res);
  }

  function savePlan(next) {
    setPlan(next);
    localStorage.setItem("mealmate:plan", JSON.stringify(next));
  }

  function addToPlan(recipe) {
    // add to today's first empty slot
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const slots = ["Breakfast","Lunch","Dinner"];
    const jsDay = new Date().getDay(); // 0..6 (Sun..Sat)
    const today = days[jsDay === 0 ? 6 : jsDay - 1];

    const next = structuredClone(plan);
    next[today] = next[today] || {};
    const empty = slots.find(s => !next[today][s]);
    const slot = empty || "Dinner";
    next[today][slot] = { id: recipe.id, title: recipe.title };

    savePlan(next);
  }

  return (
    <div className="stack">
      <h2>Recipes</h2>
      <SearchBar onSearch={handleSearch} />
      {recipes.length === 0 ? (
        <div className="card" style={{textAlign:"center"}}>No recipes found.</div>
      ) : (
        <div className="grid">
          {recipes.map(r => (
            <RecipeCard key={r.id} recipe={r} onAdd={addToPlan} />
          ))}
        </div>
      )}
    </div>
  );
}
