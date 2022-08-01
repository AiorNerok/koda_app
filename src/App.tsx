import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
