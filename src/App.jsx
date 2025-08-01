// Named import - rename
import { useState } from "react";
import { MovieList } from "./MovieList";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";

// Component = Logic + UI
// 2. Default export
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* <MsgList />
      <UserList /> */}

      {/* <MovieList /> */}

      <Counter />
    </div>
  );
}

// onclick (HTML) -> onClick (React)
// hook - useState - all are function - 'use'
// state - App State - Current value

// Component = F(S)
function Counter() {
  const [like, setLike] = useState(10);
  // Dislike

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    </div>
  );
}