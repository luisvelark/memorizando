import React from "react";
import { Routes, Route } from "react-router-dom";

import { GameView } from "../pages/GameView";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/juego" element={<GameView />} />
        {/* registro */}
      </Routes>
    </>
  );
}
