import { useMemo, useState } from "react";
import MealPlanGrid from "../components/MealPlanGrid.jsx";

export default function MealPlan() {
  const [plan, setPlan] = useState(() =>
    JSON.parse(localStorage.getItem("mealmate:plan") || "{}")
  );

  function update(next) {
    setPlan(next);
    localStorage.setItem("mealmate:plan", JSON.stringify(next));
  }

  function removeFromPlan(day, slot) {
    const next = structuredClone(plan);
    if (next?.[day]?.[slot]) delete next[day][slot];
    update(next);
  }

  function clearAll() {
    update({});
  }

  const totals = useMemo(() => {
    // For now just counts meals scheduled
    let count = 0;
    Object.values(plan).forEach(day =>
      Object.values(day || {}).forEach(v => v && count++)
    );
    return { meals: count };
  }, [plan]);

  return (
    <div className="stack">
      <div className="row">
        <h2>Meal Plan</h2>
        <div className="row" style={{gap:".5rem"}}>
          <span className="badge">{totals.meals} meals scheduled</span>
          <button className="btn" onClick={clearAll}>Clear</button>
        </div>
      </div>
      <MealPlanGrid plan={plan} onRemove={removeFromPlan} />
    </div>
  );
}
