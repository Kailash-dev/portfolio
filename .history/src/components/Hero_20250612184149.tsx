// import React from 'react';
// import profile from './data/profile.json';

// const Hero = () => {
//   return (
//     // <section
//     //   className="min-h-screen bg-cover bg-center relative"
//     //   style={{ backgroundImage: `url(${profile.backgroundImage})` }}
//     // >
//     //   <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//     //   <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white text-center font-outfit">
//     //     <img
//     //       src={profile.profileImage}
//     //       alt="Profile"
//     //       className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mb-6"
//     //     />
//     //     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
//     //       Hi, I'm <span className="text-indigo-400">{profile.name}</span>
//     //     </h1>
//     //     <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
//     //       {profile.tagline}
//     //     </p>
//     //     <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-md sm:text-lg">
//     //       {profile.summary}
//     //     </p>

//     //     <a
//     //       href="#contact"
//     //       className="inline-block mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-xl transition duration-300"
//     //     >
//     //       Contact Me
//     //     </a>
//     //   </div>
//     // </section>
//     <section
//       className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${profile.backgroundImage})`,
//       }}
//     >
//       {/* Overlay for darkening the background */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white font-outfit">
//         <div className="flex flex-col items-center space-y-6">
//           {/* Profile Image */}
//           <img
//             src={profile.profileImage}
//             alt="Profile"
//             className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
//           />

//           {/* Name + Tagline */}
//           <div>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
//               Hi, I'm <span className="text-indigo-400">{profile.name}</span>
//             </h1>
//             <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">
//               {profile.tagline}
//             </p>
//           </div>

//           {/* Summary */}
//           <p className="mt-2 text-md sm:text-lg text-gray-300 max-w-2xl">
//             {profile.summary}
//           </p>

//           {/* CTA Button */}
//           <a
//             href="#contact"
//             className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-lg transition-all duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import profile from './data/profile.json';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
    className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${profile.backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0" />

    <div className="relative z-10 flex flex-col items-center text-white text-center font-outfit px-4">
      {/* Profile Image */}
      <img
        src={profile.profileImage}
        alt="Profile"
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md mb-6 object-cover"
      />

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
        I’m <span className="text-indigo-400">{profile.name}</span>
      </h1>

      {/* Typewriter Roles */}
      <h2 className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-300">
        <Typewriter
          words={profile.roles}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Summary */}
      <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base">{profile.summary}</p>

      {/* Social Links */}
      <div className="flex space-x-4 mt-6">
        {profile.socials.linkedin && (
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-6 h-6" />
          </a>
        )}
        {profile.socials.github && (
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-6 h-6" />
          </a>
        )}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce text-gray-300 text-sm">
        <span>Scroll Down ↓</span>
      </div>
    </div>
  </section>
  );
};

export default Hero;
