import React from 'react';
import profile from '../data/profile.json';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500">{profile.name}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">{profile.tagline}</p>
        <p className="mt-6 max-w-xl mx-auto text-gray-400 text-md md:text-lg">
          {profile.summary}
        </p>
      </div>
    </section>
  );
};

export default Hero;
