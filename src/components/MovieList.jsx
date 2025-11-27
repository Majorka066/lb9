import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSelect }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "15px",
      marginTop: "20px"
    }}>
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
