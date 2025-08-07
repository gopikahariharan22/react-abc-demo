// Presentation

import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

export function Movie({ movie }) {
  const [show, setShow] = useState(true);

  // rating >= 8.5 (green) else (red)

  // Conditional Styling
  const ratingStyles = {
    color: movie.rating >= 8.5 ? "green" : "red",
    // fontSize: "32px",
  };

  // Conditional Styling
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>

        {/*   Task 1.2  */}
        <button onClick={() => setShow(!show)}>Toggle Summary</button>

        {/* Conditional Rendering */}
        {show && <p className="movie-summary">{movie.summary}</p>}

        {/* Conditional Styling */}
        {/* <p style={summaryStyles} className="movie-summary">
          {movie.summary}
        </p> */}
        {/* Task 1.1 - Like & DisLike - MovieCounter */}
        <MovieCounter />
      </div>
    </div>
  );
}
