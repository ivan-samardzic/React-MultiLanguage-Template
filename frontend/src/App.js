import React, { Suspense } from "react";
import "./App.css";
import "./i18n";
import Header from "./components/Header";
import Greetings from "./components/Greetings";

const App = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Suspense
        fallback={
          <p className="d-flex flex-column align-items-center w-100 h-100 py-5">
            Loading...
          </p>
        }
      >
        <Header />
        <Greetings />
      </Suspense>
    </div>
  );
};

export default App;
