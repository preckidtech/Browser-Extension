// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
// import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
// const ExtensionData = ({ icon, name, description, alt }) => {
//   // toggle state management
//   const [toggle, setToggle] = useState(true);
//   // all state management
//   const [all, setAll] = useState([]);
//   const onToggle = () => {
//     console.log("clicked");
//     setToggle(!toggle);
//   };

//   const onRemove = () => {
//     console.log("clicked");
//     all;
//   };

//   return (
//     <div>
//       <section className="extension-card p-3 rounded-md text-white bg-lightTheme ">
//         <section className="flex gap-3 mb-4">
//           <img src={icon} className="w-8 h-8 rounded-md " alt={alt} />
//           <section className="grid gap-[2px]">
//             <p className="font-bold text-md">{name}</p>
//             <p className="text-sm text-gray-400">{description} </p>
//           </section>
//         </section>
//         <section className="flex justify-between">
//           <button
//             className=" text-[10px] bg-transparent border-2 border-grey-600  rounded-full py-1 px-2 "
//             onClick={onRemove}
//           >
//             Remove
//           </button>

//           {toggle ? (
//             <FontAwesomeIcon
//               className="text-lightGrey text-2xl cursor-pointer"
//               onClick={onToggle}
//               icon={faToggleOff}
//             />
//           ) : (
//             <FontAwesomeIcon
//               className="text-lightred text-2xl cursor-pointer"
//               onClick={onToggle}
//               icon={faToggleOn}
//             />
//           )}
//         </section>
//       </section>
//     </div>
//   );
// };

// export default ExtensionData;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const ExtensionData = ({
  id,
  icon,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
}) => {
  return (
    <div>
      <section className="extension-card p-3 rounded-md bg-white dark:bg-lightTheme text-white">
        <section className="flex gap-3 mb-4">
          <img src={icon} className="w-8 h-8 rounded-md" alt={name} />
          <section className="grid gap-[2px]">
            {/* In light mode, name color is hsl(227,75%,14%), in dark mode white */}
            <p className="font-bold text-md text-[hsl(227,75%,14%)] dark:text-white">
              {name}
            </p>
            <p className="text-sm text-gray-400">{description}</p>
          </section>
        </section>
        <section className="flex justify-between">
          <button
            className="text-[10px] bg-transparent border-2 border-[hsl(227,75%,14%)] text-black dark:text-white rounded-full py-1 px-2"
            onClick={() => onRemove(id)}
          >
            Remove
          </button>
          {isActive ? (
            <FontAwesomeIcon
              className="text-lightred text-2xl cursor-pointer"
              onClick={() => onToggle(id)}
              icon={faToggleOn}
            />
          ) : (
            <FontAwesomeIcon
              className="text-[hsl(0,0%,40%)] text-2xl cursor-pointer" // Professional dark gray for toggle off in light mode
              onClick={() => onToggle(id)}
              icon={faToggleOff}
            />
          )}
        </section>
      </section>
    </div>
  );
};

export default ExtensionData;

