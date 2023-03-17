import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import "normalize.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//se implementara el estado global.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
