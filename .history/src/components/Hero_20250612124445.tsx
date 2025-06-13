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
import profile from '../data/profile.json';

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${profile.backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center text-white font-outfit space-y-6">
        {/* Profile Image */}
        <img
          src={profile.profileImage}
          alt="Profile"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-white shadow-md mx-auto object-cover"
        />

        {/* Name and Tagline */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-indigo-400">{profile.name}</span>
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-200">
            {profile.tagline}
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          {profile.summary}
        </p>

        {/* Call to Action */}
        <a
          href="#contact"
          className="inline-block mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium rounded-full transition duration-300 shadow-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
