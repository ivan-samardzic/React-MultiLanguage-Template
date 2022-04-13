import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

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
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
