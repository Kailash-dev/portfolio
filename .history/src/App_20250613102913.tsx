import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
// (Later you'll import other sections like About, Projects, etc.)

const App = () => {
  return (
    <div style={{ display: "flex", justifyItems: "space-between",justifyContent:'center', width:'100%', backgroundColor:"white" }}>
      {/* <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "80%" }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div> */}
      
    </div>
  );
};

export default App;
