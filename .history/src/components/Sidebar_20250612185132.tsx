import React from 'react';
import profile from './data/profile.json';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col items-center py-10 z-50">
      {/* Profile image */}
      <img
        src={profile.profileImage}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-white object-cover mb-4"
        style={{width:59, height:59}}
      />

      {/* Name */}
      <h1 className="text-xl font-semibold">{profile.name}</h1>

      {/* Navigation */}
      <nav className="mt-10 space-y-4 text-sm font-medium">
        <a href="#hero" className="hover:text-indigo-400 block">Home</a>
        <a href="#about" className="hover:text-indigo-400 block">About</a>
        <a href="#skills" className="hover:text-indigo-400 block">Skills</a>
        <a href="#projects" className="hover:text-indigo-400 block">Projects</a>
        <a href="#contact" className="hover:text-indigo-400 block">Contact</a>
      </nav>

      {/* Socials */}
      <div className="mt-auto flex space-x-4 text-lg">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          <i className="fab fa-github"></i>
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
