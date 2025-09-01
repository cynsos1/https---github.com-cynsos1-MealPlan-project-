import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import MealPlan from "./pages/MealPlan.jsx"; // ← rename import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/mealplan" element={<MealPlan />} /> {/* ← route path */}
      </Routes>
    </HashRouter>
  </StrictMode>
);
