// import { useState } from "react";
// import "./App.css";
// import BrowserExtension from "./BrowserExtension";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <section className="bg-customBlue p-8">
//         <BrowserExtension />
//       </section>
//     </>
//   );
// }

// export default App;

import React from "react";
import BrowserExtension from "./BrowserExtension";

function App() {
  return (
    // Light mode uses hsl(0, 0%, 78%) and dark mode uses gray-900
    <section className="bg-[hsl(0,0%,78%)] dark:bg-gray-900 p-8 min-h-screen">
      <BrowserExtension />
    </section>
  );
}

export default App;
