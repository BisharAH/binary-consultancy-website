// src/sections/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Software Development", description: "Custom web and mobile applications tailored to your business needs." },
  { title: "Data Analytics", description: "Unlock insights from your data to drive growth and efficiency." },
  { title: "Corporate Training", description: "Empower your team with skills in Power BI, Google Sheets, SQL, and more." },
];

const ServiceCard = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;