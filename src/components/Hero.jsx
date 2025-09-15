import React from 'react';
import minhajImage from '../assets/minhaj_image.png';
import { Typewriter } from 'react-simple-typewriter';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between h-screen bg-black"
    >
  {/* Left Image */}
<div className="w-full md:w-1/2 flex justify-center items-center p-6 relative">
  {/* Circle background with animation */}
  <div className="absolute w-72 h-72 md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>

  {/* Main image (circular) */}
  <img
    src={minhajImage}
    alt="My Photo"
    className="relative z-20 w-50 md:w-[320px] h-40 md:h-[320px] rounded-full object-cover border-4 border-indigo-600 shadow-2xl hover:scale-105 transition-transform duration-300"
  />
</div>




      {/* Right Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-10 md:px-20 text-white text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <Typewriter
            words={["Hi, I'm Minhaj Ahmad"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
          Aspiring <span className="text-indigo-400 font-semibold">Software Engineer</span> &{" "}
          <span className="text-indigo-400 font-semibold">Frontend Developer</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Explore Now
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Play size={18} /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
