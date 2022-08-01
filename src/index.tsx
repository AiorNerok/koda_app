import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Context, initContext } from "./context";

import App from "./App";
import { Home } from "./pages";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Context.Provider value={initContext}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Context.Provider>
);
