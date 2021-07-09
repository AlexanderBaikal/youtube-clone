import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Vue js",
  "Javascript",
  "Python",
  "Coding",
  "Basketball",
  "Football",
  "Photoshop",
  "GoPro",
  "Adobe",
  "Google",
];

function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          className={activeElement === value ? "active" : ""}
          onClick={() => setActiveElement(value)}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export default CategoriesBar;
