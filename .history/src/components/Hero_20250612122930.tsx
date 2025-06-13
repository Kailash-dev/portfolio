import React from 'react';
import profile from './data/profile.json';

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${profile.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white text-center font-outfit">
        <img
          src={profile.profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-indigo-400">{profile.name}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-md sm:text-lg">
          {profile.summary}
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-xl transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
