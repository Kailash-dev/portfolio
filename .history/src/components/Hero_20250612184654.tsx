// // import React from 'react';
// // import profile from './data/profile.json';

// // const Hero = () => {
// //   return (
// //     // <section
// //     //   className="min-h-screen bg-cover bg-center relative"
// //     //   style={{ backgroundImage: `url(${profile.backgroundImage})` }}
// //     // >
// //     //   <div className="absolute inset-0 bg-black bg-opacity-60"></div>

// //     //   <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white text-center font-outfit">
// //     //     <img
// //     //       src={profile.profileImage}
// //     //       alt="Profile"
// //     //       className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mb-6"
// //     //     />
// //     //     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
// //     //       Hi, I'm <span className="text-indigo-400">{profile.name}</span>
// //     //     </h1>
// //     //     <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
// //     //       {profile.tagline}
// //     //     </p>
// //     //     <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-md sm:text-lg">
// //     //       {profile.summary}
// //     //     </p>

// //     //     <a
// //     //       href="#contact"
// //     //       className="inline-block mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-xl transition duration-300"
// //     //     >
// //     //       Contact Me
// //     //     </a>
// //     //   </div>
// //     // </section>
// //     <section
// //       className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
// //       style={{
// //         backgroundImage: `url(${profile.backgroundImage})`,
// //       }}
// //     >
// //       {/* Overlay for darkening the background */}
// //       <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

// //       {/* Hero Content */}
// //       <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white font-outfit">
// //         <div className="flex flex-col items-center space-y-6">
// //           {/* Profile Image */}
// //           <img
// //             src={profile.profileImage}
// //             alt="Profile"
// //             className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
// //           />

// //           {/* Name + Tagline */}
// //           <div>
// //             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
// //               Hi, I'm <span className="text-indigo-400">{profile.name}</span>
// //             </h1>
// //             <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">
// //               {profile.tagline}
// //             </p>
// //           </div>

// //           {/* Summary */}
// //           <p className="mt-2 text-md sm:text-lg text-gray-300 max-w-2xl">
// //             {profile.summary}
// //           </p>

// //           {/* CTA Button */}
// //           <a
// //             href="#contact"
// //             className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-lg transition-all duration-300"
// //           >
// //             Contact Me
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import React from 'react';
// import profile from './data/profile.json';
// import { Typewriter } from 'react-simple-typewriter';

// const Hero = () => {
//   return (
//     <section
//     className="relative w-full h-screen bg-center bg-cover flex items-center justify-center"
//     style={{ backgroundImage: `url(${profile.backgroundImage})` }}
//   >
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />

//     {/* Content */}
//     <div className="relative z-10 text-white flex flex-col items-center text-center px-4">
//       {/* Profile Picture */}
//       <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md overflow-hidden mb-6">
//         <img
//           src={profile.profileImage}
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Name */}
//       <h1 className="text-4xl sm:text-5xl font-bold mb-2">
//         I'm <span className="text-indigo-400">{profile.name}</span>
//       </h1>

//       {/* Role (Animated) */}
//       <h2 className="text-lg sm:text-xl text-gray-300 mb-4 h-6">
//         <Typewriter
//           words={profile.roles}
//           loop={true}
//           cursor
//           cursorStyle="_"
//           typeSpeed={60}
//           deleteSpeed={30}
//           delaySpeed={1000}
//         />
//       </h2>

//       {/* Summary */}
//       <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
//         {profile.summary}
//       </p>

//       {/* Social Icons */}
//       <div className="flex space-x-5 text-white text-xl">
//         {profile.socials.linkedin && (
//           <a
//             href={profile.socials.linkedin}
//             className="hover:text-indigo-400 transition"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i className="fab fa-linkedin-in"></i>
//           </a>
//         )}
//         {profile.socials.github && (
//           <a
//             href={profile.socials.github}
//             className="hover:text-indigo-400 transition"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//         )}
//       </div>

//       {/* Scroll Down */}
//       <div className="absolute bottom-8 text-gray-400 text-sm animate-bounce">
//         ↓ Scroll Down
//       </div>
//     </div>
//   </section>
//   );
// };

// export default Hero;



import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profile from './data/profile.json';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${profile.backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-light tracking-wide mb-2">
          I'm <span className="font-bold text-indigo-400">{profile.name}</span>
        </h1>

        {/* Role Typewriter */}
        <h2 className="text-lg sm:text-xl text-gray-300 mb-4">
          <Typewriter
            words={profile.roles}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>

        {/* Summary */}
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
          {profile.summary}
        </p>

        {/* Socials */}
        <div className="flex justify-center space-x-6 text-white text-2xl">
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              className="hover:text-indigo-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              className="hover:text-indigo-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 w-full flex justify-center text-gray-400 animate-bounce text-sm">
          <span>↓ Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
