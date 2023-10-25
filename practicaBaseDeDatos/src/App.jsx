import React from "react";
import "./App.css";
import Home from "./componets/Home/PrimeraHome/Home";
import RighBar from "./componets/Home/RightBar/RighBar";
import { Routes, Route } from "react-router-dom";
import Encuestas from "./componets/Encuestas/EncuestasC/Encuestas";

function App() {
  return (
    <div className="containerAll">
      <RighBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encuesta" element={<Encuestas />} />
      </Routes>
    </div>
  );
}

export default App;
