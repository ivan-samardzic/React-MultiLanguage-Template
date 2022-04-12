import React, { useState } from "react";

const Dropdown = ({ label, value, options, onChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{
          backgroundColor: "#FF1E1E",
          borderRadius: "24px",
          width: " fill-content",
        }}
      >
        <div className="d-flex flex-row align-items-center">
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "white",
              width: "100px",
              margin: "10px 15px",
              padding: "0px 5px",
              textAlign: "center",
            }}
            onClick={handleClick}
          >
            {label}
          </p>
        </div>
      </div>
      {isClicked && (
        <select
          style={{
            position: "absolute",
            top: "50px",
            width: "130px",
            borderRadius: "24px",
          }}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option
              style={{
                width: "100px",
                borderRadius: "24px",
              }}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
