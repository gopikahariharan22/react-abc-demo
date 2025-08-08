import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { AddMovie } from "./AddMovie";
// import { INITIAL_MOVIES } from "./INITIAL_MOVIES";

// 1. When will MovieList be mounted?
export function MovieList() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await fetch(
      "https://6402db84f61d96ac487212a6.mockapi.io/movies",
      { method: "GET" }
    );
    const data = await response.json();
    setMovies(data);
  }

  // Component Mounted - once
  useEffect(() => {
    getMovies();
  }, []);

  // Delete -> Refresh
  const deleteMovie = async (id) => {
    console.log("Deleting...", id);
    const response = await fetch(
      `https://6402db84f61d96ac487212a6.mockapi.io/movies/${id}`,
      { method: "DELETE" }
    );

    const data = await response.json();
    console.log(data);
    getMovies();
  };
  // C=F(S)

  return (
    <section className="movie-list-container">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          deleteBtn={
            <button onClick={() => deleteMovie(movie.id)}>🗑️ Delete Me</button>
          }
        />
      ))}
    </section>
  );
}
