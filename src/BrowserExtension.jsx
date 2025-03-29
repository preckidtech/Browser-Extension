// import React, { useState } from "react";
// import devLens from "./assets/extension-img/logo-devlens.svg";
// import styleSpy from "./assets/extension-img/logo-style-spy.svg";
// import speedBoost from "./assets/extension-img/logo-speed-boost.svg";
// import jsonWizard from "./assets/extension-img/logo-json-wizard.svg";
// import tabMasterPro from "./assets/extension-img/logo-tab-master-pro.svg";
// import viewPortBuddy from "./assets/extension-img/logo-viewport-buddy.svg";
// import markupNotes from "./assets/extension-img/logo-markup-notes.svg";
// import gridGuides from "./assets/extension-img/logo-grid-guides.svg";
// import palettePicker from "./assets/extension-img/logo-palette-picker.svg";
// import linkChecker from "./assets/extension-img/logo-link-checker.svg";
// import domSnapShot from "./assets/extension-img/logo-dom-snapshot.svg";
// import consolePlus from "./assets/extension-img/logo-console-plus.svg";
// import ThemeChange from "./ThemeChange";
// import ExtensionData from "./ExtensionData";
// const BrowserExtension = () => {
//   const extensionList = [
//     {
//       id: 1,
//       name: "DevLens",
//       description:
//         "Quickly inspect page layouts and visualise element boundaries",
//       icon: devLens,
//     },
//     {
//       id: 2,
//       name: "StyleSpy",
//       description: "Instantly analyse and copy CSS from any webpage element",
//       icon: styleSpy,
//     },
//     {
//       id: 3,
//       name: "SpeedBoost",
//       description: "Optimize broswer resource usage to accelerate page loading",
//       icon: speedBoost,
//     },
//     {
//       id: 4,
//       name: "JSONWizard",
//       description:
//         "Formats, validates and preettifies JSON response in browser",
//       icon: jsonWizard,
//     },
//     {
//       id: 5,
//       name: "TabMaster Pro",
//       description: "Organize broswer tabs ito groups and section",
//       icon: tabMasterPro,
//     },
//     {
//       id: 6,
//       name: "ViewPortBuddy",
//       description:
//         "Simulates various screen resolutions directly within the browser",
//       icon: viewPortBuddy,
//     },
//     {
//       id: 7,
//       name: "Markup Notes",
//       description:
//         "Enables annotation and notes directly onto webpages for collaborative debugging",
//       icon: markupNotes,
//     },
//     {
//       id: 8,
//       name: "GridGuides",
//       description:
//         "Overlay customizable gridws and allignement guides on webpage",
//       icon: gridGuides,
//     },
//     {
//       id: 9,
//       name: "Palette Picker",
//       description: "Instantly extracts color palettes from any webpage",
//       icon: palettePicker,
//     },
//     {
//       id: 10,
//       name: "LinkChecker",
//       description: "Scans and highlights broken links on any page",
//       icon: linkChecker,
//     },
//     {
//       id: 11,
//       name: "DOM Snapshot",
//       description: "Capture and export DOM structures quickly",
//       icon: domSnapShot,
//     },
//     {
//       id: 12,
//       name: "ConsolePlus",
//       description:
//         "Enhanced developer console with advanced filtering and logging",
//       icon: consolePlus,
//     },
//   ];

//   // all state management
//   const [all, setAll] = useState(extensionList);

//   const onRemove = (id) => {
//     console.log("item removed");

//     setAll((items) => items.filter((item) => item.id !== id));
//   };

//   const [items, setItems] = useState([]);

//   return (
//     <div>
//       <ThemeChange />
//       <section className="mb-5 text-white flex justify-between">
//         <p>Extension Lists</p>
//         <section className="text-white gap-4 flex">
//           <button
//             className="rounded-full bg-lightBtn active:bg-lightred px-4 py-1"
//             onClick={onRemove}
//           >
//             All
//           </button>
//           <button className="rounded-full bg-lightBtn active:bg-lightred px-4 py-1">
//             Active
//           </button>
//           <button className="rounded-full bg-lightBtn active:bg-lightred px-4 py-1">
//             InActive
//           </button>
//         </section>
//       </section>
//       <section className="card-container grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-3 ">
//         {all.map((list) => (
//           <ExtensionData
//             icon={list.icon}
//             name={list.name}
//             description={list.description}
//             key={list.id}
            
//           />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default BrowserExtension;

import React, { useState } from "react";
import devLens from "./assets/extension-img/logo-devlens.svg";
import styleSpy from "./assets/extension-img/logo-style-spy.svg";
import speedBoost from "./assets/extension-img/logo-speed-boost.svg";
import jsonWizard from "./assets/extension-img/logo-json-wizard.svg";
import tabMasterPro from "./assets/extension-img/logo-tab-master-pro.svg";
import viewPortBuddy from "./assets/extension-img/logo-viewport-buddy.svg";
import markupNotes from "./assets/extension-img/logo-markup-notes.svg";
import gridGuides from "./assets/extension-img/logo-grid-guides.svg";
import palettePicker from "./assets/extension-img/logo-palette-picker.svg";
import linkChecker from "./assets/extension-img/logo-link-checker.svg";
import domSnapShot from "./assets/extension-img/logo-dom-snapshot.svg";
import consolePlus from "./assets/extension-img/logo-console-plus.svg";
import ThemeChange from "./ThemeChange";
import ExtensionData from "./ExtensionData";

const BrowserExtension = () => {
  // Extension list with isActive property
  const extensionList = [
    {
      id: 1,
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualise element boundaries",
      icon: devLens,
      isActive: true,
    },
    {
      id: 2,
      name: "StyleSpy",
      description: "Instantly analyse and copy CSS from any webpage element",
      icon: styleSpy,
      isActive: true,
    },
    {
      id: 3,
      name: "SpeedBoost",
      description: "Optimize broswer resource usage to accelerate page loading",
      icon: speedBoost,
      isActive: false,
    },
    {
      id: 4,
      name: "JSONWizard",
      description:
        "Formats, validates and preettifies JSON response in browser",
      icon: jsonWizard,
      isActive: true,
    },
    {
      id: 5,
      name: "TabMaster Pro",
      description: "Organize broswer tabs into groups and sections",
      icon: tabMasterPro,
      isActive: true,
    },
    {
      id: 6,
      name: "ViewPortBuddy",
      description:
        "Simulates various screen resolutions directly within the browser",
      icon: viewPortBuddy,
      isActive: true,
    },
    {
      id: 7,
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging",
      icon: markupNotes,
      isActive: true,
    },
    {
      id: 8,
      name: "GridGuides",
      description: "Overlay customizable grids and alignment guides on webpage",
      icon: gridGuides,
      isActive: true,
    },
    {
      id: 9,
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage",
      icon: palettePicker,
      isActive: true,
    },
    {
      id: 10,
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page",
      icon: linkChecker,
      isActive: true,
    },
    {
      id: 11,
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly",
      icon: domSnapShot,
      isActive: true,
    },
    {
      id: 12,
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging",
      icon: consolePlus,
      isActive: true,
    },
  ];

  // Manage extension list and filter state
  const [all, setAll] = useState(extensionList);
  const [filter, setFilter] = useState("All");

  // Toggle active state for an extension
  const handleToggle = (id) => {
    setAll((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  // Remove an extension
  const handleRemove = (id) => {
    setAll((prev) => prev.filter((item) => item.id !== id));
  };

  // Determine items to display based on filter
  let displayedItems = all;
  if (filter === "Active") {
    displayedItems = all.filter((item) => item.isActive);
  } else if (filter === "Inactive") {
    displayedItems = all.filter((item) => !item.isActive);
  }

  return (
    <div>
      <ThemeChange />
      <section className="mb-5 flex justify-between">
        <p className="text-[hsl(3,86%,64%)] dark:text-white">Extension Lists</p>
        <section className="flex gap-4">
          <button
            className={`rounded-full px-4 py-1 ${
              filter === "All"
                ? "bg-[hsl(3,86%,64%)] text-white"
                : "bg-lightBtn dark:bg-gray-700 text-white"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`rounded-full px-4 py-1 ${
              filter === "Active"
                ? "bg-[hsl(3,86%,64%)] text-white"
                : "bg-lightBtn dark:bg-gray-700 text-white"
            }`}
            onClick={() => setFilter("Active")}
          >
            Active
          </button>
          <button
            className={`rounded-full px-4 py-1 ${
              filter === "Inactive"
                ? "bg-[hsl(3,86%,64%)] text-white"
                : "bg-lightBtn dark:bg-gray-700 text-white"
            }`}
            onClick={() => setFilter("Inactive")}
          >
            InActive
          </button>
        </section>
      </section>
      <section className="card-container grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-3">
        {displayedItems.map((list) => (
          <ExtensionData
            key={list.id}
            id={list.id}
            icon={list.icon}
            name={list.name}
            description={list.description}
            isActive={list.isActive}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        ))}
      </section>
    </div>
  );
};

export default BrowserExtension;

