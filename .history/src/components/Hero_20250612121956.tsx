import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500">Kailash</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          Full Stack Developer | Angular • React • Node.js • Docker
        </p>
        <p className="mt-6 max-w-xl mx-auto text-gray-400 text-md md:text-lg">
          With 5+ years of hands-on experience in building scalable web and mobile applications using modern technologies, I bring speed, quality, and innovation to every project.
        </p>
      </div>
    </section>
  );
};

export default Hero;
