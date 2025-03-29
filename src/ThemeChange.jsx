// import React, { useState } from "react";
// import logo from "./assets/extension-img/logo.svg";
// import settings from "./assets/extension-img/icon-sun.svg";
// import moon from "./assets/extension-img/icon-moon.svg";
// const ThemeChange = () => {
//     const [theme, setTheme] = useState(true);
//     const onTheme = () => {
//         console.log("click")
//         setTheme(!theme)
//     }
//   return (
//     <div>
//       <section className="theme-container flex text-whte p-1 rounded-md  mb-4 bg-lightTheme justify-between">
//         <img className="h-5" src={logo} alt="logo" />
//         {theme ? (
//           <img className="bg-red-800 rounded-md h-5" onClick={onTheme} onChange={onTheme} src={settings} alt="" />
//         ) : (
//           <img className="rounded-md h-5" onClick={onTheme} onChange={onthTheme} src={moon} alt="" />
//         )}
//       </section>
//     </div>
//   );
// };

// export default ThemeChange;

import React, { useState, useEffect } from "react";
import logo from "./assets/extension-img/logo.svg";
import settings from "./assets/extension-img/icon-sun.svg";
import moon from "./assets/extension-img/icon-moon.svg";

const ThemeChange = () => {
  // true = light mode, false = dark mode
  const [theme, setTheme] = useState(true);

  const onTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    // Toggle dark mode class on document root
    if (theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <div>
      <section className="theme-container flex items-center text-white p-1 rounded-md mb-4 bg-lightTheme justify-between">
        <img className="h-5" src={logo} alt="logo" />
        {theme ? (
          <img
            className="bg-red-800 rounded-md h-5 cursor-pointer"
            onClick={onTheme}
            src={settings}
            alt="sun icon"
          />
        ) : (
          <img
            className="rounded-md h-5 cursor-pointer"
            onClick={onTheme}
            src={moon}
            alt="moon icon"
          />
        )}
      </section>
    </div>
  );
};

export default ThemeChange;
