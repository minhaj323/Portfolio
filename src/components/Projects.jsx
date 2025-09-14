import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Frontend",
      description:
        "A modern e-commerce frontend with product listing, categories, and cart functionality using React.js and Tailwind CSS.",
      link: "https://github.com/minhaj323/e-commerce-front-end-",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio to showcase my skills and projects, built with React.js and Tailwind CSS.",
      link: "#", // tum apna portfolio ka repo link daal sakte ho
    },
    {
      title: "Landing Page",
      description:
        "Responsive landing page design with pure HTML & CSS for practicing UI/UX layout skills.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 relative inline-block">
        My Projects
        <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-indigo-500 rounded-md transform -translate-x-1/2"></span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 border rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Github size={18} /> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
