import data from "../data/recipes.json";

export async function searchRecipes(query = "") {
  const q = query.trim().toLowerCase();
  if (!q) return data;
  return data.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.ingredients.some(i => i.toLowerCase().includes(q)) ||
    r.tags.some(t => t.toLowerCase().includes(q))
  );
}
