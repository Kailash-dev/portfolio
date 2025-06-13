
import profile from './data/profile.json';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-indigo-500">{profile.name}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
          {profile.tagline}
        </p>
        <p className="text-md sm:text-lg text-gray-400">
          {profile.summary}
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold shadow-lg transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
