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

function User({ name }) {
  return (
    <div>
      <img
        className="marvel"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="ProfilePic"
      />

      <h1>Hello, {name} 🎊</h1>
    </div>
  );
}

function Counter() {
  
  const [like, setLike] = useState(10);
   const [disLike, setdisLike] = useState(10);
  

  return (
    <section>
    <div  className="counter-btn-container">
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDisLike(disLikelike + 1)}>😢 {disLikelike}</button>
    </div>
    <progress value={like} max={like+disLike}></progress>
    {/* Conditional Rendering */}
    {5 < 4 ? <h1>Awesome</h1> : <h3>cool</h3>}
    {like - disLike >= 10 ? <h1>Awesome</h1> : <h3>cool</h3>}
     </section>
  );
}