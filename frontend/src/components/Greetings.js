import React from "react";
import Hello from "./Hello";
import People from "./People";
import Image from "./Image";
import About from "./About";

const Greetings = () => {
  return (
    <div className="d-flex flex-row align-igtems-center w-100">
      <div className="w-100 d-flex flex-column align-items-center p-5">
        <Hello />
        <People />
        <About />
        <Image />
      </div>
    </div>
  );
};

export default Greetings;
