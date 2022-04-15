import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [primary, setPrimary] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`He said he feels ${primary}`);
  }, [primary]);

  useEffect(() => {
    console.log(`But i don't understand why he also feels ${secondary}`);
  }, [secondary]);

  return (
    <>
      <h1>
        Right now, Eben is <i>{primary}</i> but also <i>{secondary}</i>
      </h1>

      <button onClick={() => setPrimary("happy")}>Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setSecondary("awkward")}>Awkward</button>
      <button onClick={() => setPrimary("frustrated")}>Frustrated</button>
      <button onClick={() => setPrimary("enthusiastic")}>Enthused</button>
    </>
  );
}

export default App;
