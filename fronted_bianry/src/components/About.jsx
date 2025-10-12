// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Binary Consultants</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Binary Consultants, we are a passionate team of software engineers, data scientists, and technology visionaries dedicated to solving complex business challenges. We believe in the power of code and the intelligence of data to create robust, scalable, and impactful solutions. Our mission is to partner with businesses, from startups to enterprises, to help them navigate the digital landscape and achieve sustainable growth through technology.
        </p>
      </div>
    </section>
  );
};

export default About;

