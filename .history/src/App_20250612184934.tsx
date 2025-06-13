import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
// (Later you'll import other sections like About, Projects, etc.)

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full">
        <Hero />
        {/* Add About, Skills, etc here */}
      </main>
    </div>
  );
};

export default App;
