import "./App.css";
import Card from "./components/Card";
import "./index.css";
import React from "react";
import useData from "./hooks/useData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Scores from "./Scores";
import Upload from "./Upload";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Scores />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
