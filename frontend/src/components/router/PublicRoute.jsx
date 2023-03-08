import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "../../App";

export function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/description/:id" element={<Description />} />
      <Route path="/products/:id" element={<ProductView />} />
      <Route path="/category" element={<CategoryView />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/login" element={<LoginView />} /> */}
    </Routes>
  );
}
