// Named import - rename
import { MovieList } from "./MovieList";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";
import { Counter } from "./Counter";

// Component = Logic + UI
// 2. Default export
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* <MsgList /> */}
      {/* <UserList /> */}

      <MovieList />
    </div>
  );
}
