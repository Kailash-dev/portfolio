import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
// (Later you'll import other sections like About, Projects, etc.)

const App = () => {
  return (
    <div style={{display:'flex', justifyItems:'space-between'}}>
      <div>
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
