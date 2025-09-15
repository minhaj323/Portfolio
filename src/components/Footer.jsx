import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-6">
      <div className="max-w-6xl mx-auto">
        {/* Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/minhaj323"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/minhaj-ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/capturingnature_526_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2025 <span className="text-white font-semibold">Minhaj Ahmad</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
