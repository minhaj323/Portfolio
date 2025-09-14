import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
          Contact Me
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-indigo-500 rounded-md transform -translate-x-1/2"></span>
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 mb-14">
          <a
            href="tel:+917564014207"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition"
          >
            <Phone /> +91-7564014207
          </a>
          <a
            href="mailto:minhaj36ahmad@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition"
          >
            <Mail /> minhaj36ahmad@gmail.com
          </a>
          <a
            href="https://www.instagram.com/capturingnature_526_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition"
          >
            <Instagram /> Instagram
          </a>
        </div>

        {/* Contact Form with FormSubmit */}
        <form
          action="https://formsubmit.co/minhaj36ahmad@gmail.com"
          method="POST"
          className="flex flex-col gap-4 max-w-xl mx-auto bg-white shadow-md p-8 rounded-xl"
        >
          {/* hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://your-portfolio-url.com/thanks" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
