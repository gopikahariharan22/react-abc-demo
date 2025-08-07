// Named import - rename
import { MovieList } from "./MovieList";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";
import { Counter } from "./Counter";
import { ColorGame } from "./ColorGame";
import { Route, Routes, Link, Navigate } from "react-router";

// Component = Logic + UI
// 2. Default export
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* Common */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
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
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="contact/:id" element={<ContactDetails />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <UserList />
//       <ColorGame />
//     </div>
//   );
// }

function Home() {
  return <h1>Welcome to Movie App 🎊🎊 </h1>;
}

function NotFound() {
  return <h1>404 - Not Found </h1>;
}

// Task 4.1 - Basic setup
// Task 4.2

// /movies - MovieList
// /color-game - ColorGame
// /users - UserList
// /home - Welcome to Movie App
