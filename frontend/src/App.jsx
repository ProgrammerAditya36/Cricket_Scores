import "./App.css";
import "./index.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Scores from "./Scores";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
