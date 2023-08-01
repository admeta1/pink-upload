import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pink from "./components/pinksale/Pink";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/pink" element={<Pink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
