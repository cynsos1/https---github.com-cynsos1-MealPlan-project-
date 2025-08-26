export default function MealPlanGrid({ plan = {}, onRemove }) {
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const slots = ["Breakfast","Lunch","Dinner"];

  return (
    <div className="card">
      <h3>Your Weekly Plan</h3>
      <div className="grid" style={{gridTemplateColumns:"repeat(7,1fr)"}}>
        {days.map(day => (
          <div key={day} className="stack">
            <strong>{day}</strong>
            {slots.map(slot => {
              const item = plan?.[day]?.[slot];
              return (
                <div key={slot} className="card" style={{padding:".6rem"}}>
                  <div className="row">
                    <span>{slot}</span>
                    {item ? (
                      <button className="btn" onClick={() => onRemove?.(day, slot)}>Remove</button>
                    ) : (
                      <span className="badge">empty</span>
                    )}
                  </div>
                  {item && <p style={{marginTop:".4rem"}}>{item.title}</p>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
