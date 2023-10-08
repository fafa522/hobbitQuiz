import React from "react";
import "./App.scss";
import Rules from "./RulesScreen/Rules";
import { Route, Routes } from "react-router-dom";
import WinScreen from "./WinScreen/WinScreen";
import GameScreen from "./GameScreen/GameScreen";
import LoseScreen from "./LoseScreen/LoseScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GameScreen />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/win" element={<WinScreen />} />
        <Route path="/lose" element={<LoseScreen />} />
      </Routes>
    </div>
  );
}

export default App;
