import React from "react";
import { Routes, Route } from "react-router-dom";

import { Game } from "../pages/Game";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/juego" element={<Game />} />
        {/* registro */}
      </Routes>
    </>
  );
}
