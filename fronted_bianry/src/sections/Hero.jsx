// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/hero-consulting.jpg'; // Import your hero image or one of the generated ones

const Hero = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12"> {/* Changed to flex layout */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Transforming Data into Decisions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide expert software development, data analytics, and professional training to elevate your business.
          </p>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="#contact"
            className="mt-8 inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src={HeroImage} // Use your imported image here
            alt="Consulting and Data Analytics"
            className="rounded-lg shadow-xl max-w-full h-auto object-cover"
            style={{ maxHeight: '400px' }} // Optional: set a max height
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;