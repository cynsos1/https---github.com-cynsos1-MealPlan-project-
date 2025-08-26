// routes.jsx
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home.jsx"));
const Recipes = lazy(() => import("./pages/Recipes.jsx"));
const MealPlan = lazy(() => import("./pages/MealPlan.jsx"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="card">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/plan" element={<MealPlan />} />
      </Routes>
    </Suspense>
  );
}
