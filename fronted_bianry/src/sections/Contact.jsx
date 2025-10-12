// src/sections/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? Fill out the form below, and we'll get back to you promptly.
          </p>

          <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;