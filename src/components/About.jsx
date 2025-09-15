import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-black text-center md:text-left"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-indigo-500 relative inline-block">
          About Me
          <span className="absolute left-1/2 md:left-0 -bottom-2 w-16 h-1 bg-indigo-600 rounded-md transform -translate-x-1/2 md:translate-x-0"></span>
        </h2>

        {/* Description */}
        <p className="text-lg text-white leading-relaxed">
          I am an aspiring <span className="font-semibold text-indigo-400">Software Engineer</span> 
          with strong knowledge of <span className="font-semibold text-indigo-400">HTML, CSS, JavaScript</span> 
          and modern frameworks like <span className="font-semibold text-indigo-400">React.js</span>.  
          I love <span className="font-semibold text-indigo-400">problem-solving with Java</span> 
          and have a deep interest in <span className="font-semibold text-indigo-400">Data Structures & Algorithms</span>.  
          My passion lies in building responsive, scalable applications and continuously exploring new technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
