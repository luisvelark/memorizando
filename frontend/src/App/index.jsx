import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PublicRoutes,
  PrivateRoutes,
  AuthRouter,
  AppRouter,
} from "../components/router";

import { Home } from "../components/pages/Home";

// En la carpeta "App" se implementaran las rutas.
export function App() {
  const isLogged = true; // usa una variable de estado para verificar si el usuario está conectado
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/auth/*"
          element={
            <PublicRoutes isLogged={isLogged}>
              <AuthRouter />
            </PublicRoutes>
          }
        />

        <Route
          path="/app/*"
          element={
            <PrivateRoutes isLogged={isLogged}>
              <AppRouter />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
