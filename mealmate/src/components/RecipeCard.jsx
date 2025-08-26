export default function RecipeCard({ recipe, onAdd }) {
  if (!recipe) return null;
  const { title, image, calories, protein, carbs, fat } = recipe;

  return (
    <div className="card">
      <img className="thumb" src={image} alt={title} loading="lazy" />
      <h3>{title}</h3>
      <p className="row">
        <span className="badge">{calories} kcal</span>
        <span className="badge">P {protein}g</span>
        <span className="badge">C {carbs}g</span>
        <span className="badge">F {fat}g</span>
      </p>
      <div className="row">
        <button className="btn" onClick={() => onAdd?.(recipe)}>Add to plan</button>
        <button className="btn" onClick={() => navigator.clipboard.writeText(title)}>Copy name</button>
      </div>
    </div>
  );
}
