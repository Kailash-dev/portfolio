import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
// (Later you'll import other sections like About, Projects, etc.)

const App = () => {
  return (
    // <div className="container" style={{  }}>
    //   {/* <div style={{ width: "20%" }}>
    //     <Sidebar />
    //   </div>
    //   <div style={{ width: "80%" }}>
    //     <Routes>
    //       <Route path="/" element={<Hero />} />
    //       <Route path="*" element={<Navigate to="/" replace />} />
    //     </Routes>
    //   </div> */}
    //   <div style={{backgroundColor:'blue'}}></div>
    //   <div style={{backgroundColor:'red'}}></div>
    // </div>
    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
