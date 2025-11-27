import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onSearch(text.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Введите название фильма"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: 8, width: 250 }}
      />
      <button style={{ marginLeft: 10, padding: 8 }}>Поиск</button>
    </form>
  );
}
