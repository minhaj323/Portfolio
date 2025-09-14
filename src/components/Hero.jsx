import React from 'react';
import minhajImage from '../assets/minhaj_image.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between h-screen bg-burlywood px-10 md:px-20"
    >
      {/* Left Text */}
      <div className="hero-text md:w-1/2 text-center md:text-left animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <Typewriter
            words={["Hi, I'm Minhaj Ahmad"]}
            loop={false}           // ek hi baar chalega
            cursor
            cursorStyle="|"
            typeSpeed={100}        // typing ki speed
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Aspiring Software Engineer & Frontend Developer
        </p>
        <a
          href="#contact"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-orange-500 transition transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>

      {/* Right Image */}
      <div className="hero-img md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end animate-fadeIn">
        <img
          src={minhajImage}
          alt="My Photo"
          className="w-60 h-60 rounded-full object-cover border-4 border-gray-800 hover:scale-110 transition"
        />
      </div>
    </section>
  );
};

export default Hero;
