import React from "react";
import LanguageSelector from "./LanguageSelector";
import Title from "./Title";
const Header = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-around justify-a p-1 w-100 border-bottom rounded">
      <Title />
      <LanguageSelector />
    </div>
  );
};

export default Header;
