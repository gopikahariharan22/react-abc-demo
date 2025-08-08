// Task - User (Component)

import { Counter } from "./Counter";

// Presentation Component - Reusablity ⬆️
export function User({ name = "Unknown", pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={`${name}'s profile pic`} />
      <p>
        Hello, <span>{name} </span>🍊🍊
      </p>
      <Counter />
    </div>
  );
}
