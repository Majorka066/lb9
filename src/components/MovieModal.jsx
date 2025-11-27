import { useEffect, useState } from "react";

const API_KEY = "73eff1f9";

export default function MovieModal({ movie, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
        );
        const data = await res.json();
        setDetails(data);
      } catch {
        setDetails(null);
      }
    };

    loadDetails();
  }, [movie]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          width: 400,
        }}
      >
        {!details ? (
          <p>Загрузка...</p>
        ) : (
          <>
            <h2>{details.Title}</h2>
            <img
              src={details.Poster}
              width="200"
              style={{ borderRadius: 8 }}
            />
            <p><b>Год:</b> {details.Year}</p>
            <p><b>Жанр:</b> {details.Genre}</p>
            <p><b>Рейтинг:</b> {details.imdbRating}</p>

            <button onClick={onClose} style={{ marginTop: 10 }}>
              Закрыть
            </button>
          </>
        )}
      </div>
    </div>
  );
}
