import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
// (Later you'll import other sections like About, Projects, etc.)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      {/* Placeholder for future sections */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
