import React, { useState } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <>
      <h1>Current emotion is {emotion}</h1>

      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrated</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthused</button>
    </>
  );
}

export default App;
