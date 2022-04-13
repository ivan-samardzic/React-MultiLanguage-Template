import React from "react";
import Greetings from "../components/Greetings";

const HomeScreen = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        padding: "10px",
      }}
    >
      <Greetings />
    </div>
  );
};

export default HomeScreen;
