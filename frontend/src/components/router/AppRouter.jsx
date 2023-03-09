import React from "react";
import { Routes, Route } from "react-router-dom";
// los componentes

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/juego" element={<p>juego</p>} />
        {/* registro */}
      </Routes>
    </>
  );
}
