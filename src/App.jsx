// Named import - rename
import { useState } from "react";
import { MovieList } from "./MovieList";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";
import { MovieList } from "./MovieList";


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
   const [disLike, setdisLike] = useState(10);
  // Dislike

  return (
    <section>
    <div  className="counter-btn-container">
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDisLike(disLikelike + 1)}>😢 {disLikelike}</button>
    </div>
    <progress value={like} max={like+disLike}></progress>
    {/* Conditional Rendering */}
    {5 < 4 ? <h1>Awesome</h1> : <h3>cool</h3>}
     </section>
  );
}