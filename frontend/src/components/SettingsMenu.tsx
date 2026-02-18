import { useState } from "react";
import "./SettingsMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface SettingsMenuProps {
  onThemeChange: (color: string) => void;
}

export default function SettingsMenu({ onThemeChange }: SettingsMenuProps) {
  const [firstOption, setFirst] = useState(false);
  const [secondOption, setSecond] = useState(false);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const handleThemeChange = (color: string) => {
    setActiveColor(color);
    if (onThemeChange) {
      onThemeChange(color);
    }

    document.documentElement.style.setProperty("--bg-color", color);
    document.documentElement.style.setProperty("--card-color", color);
  };

  const themeColors = [
      ["#53747D", "#FF8D8D", "#FFC871", "#FFFB87", "#B7FFB3"],
    ["#5F8768", "#6E8DC8", "#8CC2FF", "#B688D4", "#FFA1EB"],
    ["#9C805A", "#776B59", "#58746B", "#689D9A", "#58929C"],
  ];

  // Map theme color to text class for best contrast
  const themeTextClassMap: Record<string, string> = {
    "#FF8D8D": "dark-text",
    "#FFC871": "dark-text",
    "#FFFB87": "dark-text",
    "#B7FFB3": "dark-text",
    "#6E8DC8": "dark-text",
    "#8CC2FF": "dark-text",
    "#B688D4": "dark-text",
    "#FFA1EB": "dark-text",
    "#53747D": "light-text",
    "#5F8768": "light-text",
    "#9C805A": "light-text",
    "#776B59": "light-text",
    "#58746B": "light-text",
    "#689D9A": "light-text",
    "#58929C": "light-text",
  };

  // Determine which text class to use based on selected color
  const textClass = activeColor ? themeTextClassMap[activeColor] || "dark-text" : "dark-text";




  return (
    <div className="card bCard" style={{ width: "400px" }}>
      <div
        className="card-header"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <button type="button" className="btn-close" aria-label="Close"></button>
        <text
          style={{
            fontSize: 12,
            marginTop: "auto",
            marginLeft: "auto",
          }}
        >
          <text>Money</text>
        </text>
      </div>
      <div className="card-body">
        <h5 className={`card-title ${textClass}`}>General</h5>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="sampleCheckbox1"
            onClick={() => {
              firstOption ? setFirst(false) : setFirst(true);
            }}
          />
          <label className={`form-check-label ${textClass}`} htmlFor="sampleCheckbox1">
            This is set to {firstOption ? "true" : "false"}
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="sampleCheckbox2"
            onClick={() => {
              secondOption ? setSecond(false) : setSecond(true);
            }}
          />
          <label className={`form-check-label ${textClass}`} htmlFor="sampleCheckbox2">
            This is set to {secondOption ? "true" : "false"}
          </label>
        </div>
       <label className={`range ${textClass}`} style={{ paddingTop: 10 }}>
          Example range
        </label>
        <input type="range" className="form-range" id="range1"></input>
        <h5 className={`card-title ${textClass}`} style={{ paddingTop: 10 }}>
          Themes
        </h5>

  {themeColors.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{ display: "flex", gap: 10, marginTop: rowIndex === 0 ? 0 : 10 }}
          >
            {row.map((color) => (
              <div
                key={color}
                className="themeChoice"
                style={{
                  backgroundColor: color,
                  cursor: "pointer",
                  outline: activeColor === color ? "3px solid #fff" : "none",
                  outlineOffset: "2px",
                  boxShadow: activeColor === color ? "0 0 0 1px #333" : "none",
                  transition: "outline 0.15s ease, box-shadow 0.15s ease",
                }}
                onClick={() => handleThemeChange(color)}
              />
            ))}
          </div>
        ))}




      
      
        <h5 className={`card-title ${textClass}`} style={{ paddingTop: 10 }}>
          Miscellaneous
        </h5>
      </div>
    </div>
  );
}
