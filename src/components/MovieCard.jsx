export default function MovieCard({ movie, onSelect }) {
  return (
    <div
      onClick={() => onSelect(movie)}
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        cursor: "pointer",
        textAlign: "center"
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        style={{ width: "100%", borderRadius: 6 }}
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
}
