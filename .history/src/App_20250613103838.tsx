import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Sidebar - 20% */}
      <div style={{ width: '20%', backgroundColor: '#1e1e2f', color: 'white' }}>
        <Sidebar />
      </div>

     
      <div style={{ width: '80%', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
