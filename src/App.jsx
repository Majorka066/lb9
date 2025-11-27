import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

const API_KEY = "73eff1f9";

export default function App() {
  const [query, setQuery] = useState("Avatar");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
            query
          )}`
        );

        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error || "Фильмы не найдены");
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
      } catch (err) {
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Каталог фильмов</h1>

      <SearchBar onSearch={setQuery} />

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <MovieList movies={movies} onSelect={setSelectedMovie} />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
