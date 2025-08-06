import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(10);
  const [disLike, setDisLike] = useState(10);

  return (
    <section>
      <div className="counter-btn-container">
        <button onClick={() => setLike(like + 1)}>👍 {like}</button>
        <button onClick={() => setDisLike(disLike + 1)}>
          😢 {disLikelike}
        </button>
      </div>
      <progress value={like} max={like + disLike}></progress>
      {/* Conditional Rendering */}
      {5 < 4 ? <h1>Awesome</h1> : <h3>cool</h3>}
      {like - disLike >= 10 ? <h1>Awesome</h1> : <h3>cool</h3>}
    </section>
  );
}
