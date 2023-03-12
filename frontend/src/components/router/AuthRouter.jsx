import React from "react";
import { Routes, Route } from "react-router-dom";
// los componentes
import { RegisterView } from "../pages/RegisterView";
import { LoginView } from "../pages/LoginView";

export function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </>
  );
}
