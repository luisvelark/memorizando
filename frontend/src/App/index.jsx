import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PublicRoutes,
  PrivateRoutes,
  AuthRouter,
  AppRouter,
} from "../components/router";

import { useSelector, useDispatch } from "react-redux";

import { Home } from "../components/pages/Home";

// En la carpeta "App" se implementaran las rutas.
export function App() {
  // usa una variable de estado para verificar si el usuario está conectado
  const authenticate = useSelector((state) => state.authenticate);
  console.log(authenticate, " routes");
  // const isLogged = authenticate;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/auth/*"
          element={
            <PublicRoutes isLogged={authenticate}>
              <AuthRouter />
            </PublicRoutes>
          }
        />

        <Route
          path="/app/*"
          element={
            <PrivateRoutes isLogged={authenticate}>
              <AppRouter />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
