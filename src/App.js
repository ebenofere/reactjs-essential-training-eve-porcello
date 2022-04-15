// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked((checked) => !checked)}
//       />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </>
//   );
// }

// export default App;

/************************************** SECOND LESSON ***************************************/

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [checked, setChecked] = useState(false);

//   function toggle() {
//     setChecked((checked) => !checked);
//   }

//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={toggle} />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </>
//   );
// }

// export default App;

/************************************** THIRD LESSON (using useReducer) ***************************************/

import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
