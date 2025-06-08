import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import A1 from "./pages/A1";
import A2 from "./pages/A2";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Études d'espagnol</h1>
        <nav className="mb-6">
          <Link to="/a1" className="mr-4">Niveau A1</Link>
          <Link to="/a2">Niveau A2</Link>
        </nav>
        <Routes>
          <Route path="/a1" element={<A1 />} />
          <Route path="/a2" element={<A2 />} />
        </Routes>
      </div>
    </Router>
  );
}