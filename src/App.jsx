// Named import - rename
import { Link, Navigate, Route, Routes } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieList } from "./pages/MovieList";
import { NotFound } from "./pages/NotFound";
import "./styles.css";
import { UserList } from "./pages/UserList";
import { MovieDetails } from "./pages/MovieDetails";
import { AddMovie } from "./pages/AddMovie";

// Component = Logic + UI
// 2. Default export
export default function App() {
  // Logic Starts
  // Lifting the State Up

  // 2. Why getMovies is not done here?
  // Logic End
  return (
    <div className="App">
      {/* Common */}
      <nav>
        <ul><li>
            <Link to="/">Home </Link>
          </li>

          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/new">Add Movie</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
          
        </ul>
      </nav>

      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="contact/:id" element={<ContactDetails />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
