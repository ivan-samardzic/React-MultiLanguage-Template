import React, { Component, Suspense } from "react";
import LanguageSelector from "./LanguageSelector";
import Title from "./Title";
const Header = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-around justify-a bg-secondary p-3 w-100">
      <Title />
      <LanguageSelector />
    </div>
  );
};

export default Header;
