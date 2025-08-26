import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch?.(value);
  }

  return (
    <form className="row" onSubmit={submit}>
      <input
        className="input"
        placeholder="Search by title, ingredient, or tag…"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="btn primary" type="submit">Search</button>
    </form>
  );
}
