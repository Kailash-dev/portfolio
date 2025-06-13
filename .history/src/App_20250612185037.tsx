import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
// (Later you'll import other sections like About, Projects, etc.)

const App = () => {
  return (
    <div>
      
    </div>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
