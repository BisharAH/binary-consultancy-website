// src/sections/Training.jsx
import React from 'react';
import { motion } from 'framer-motion';

const trainingTopics = [
  { name: "Power BI", details: "Master data visualization and business intelligence." },
  { name: "Google Sheets", details: "From basics to advanced scripting and automation." },
  { name: "SQL", details: "Learn to manage and query relational databases with confidence." },
];

const TrainingCard = ({ name, details }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="border border-gray-200 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
  >
    <h3 className="text-xl font-semibold text-blue-600">{name}</h3>
    <p className="mt-2 text-gray-600">{details}</p>
  </motion.div>
);

const Training = () => {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Expert-Led Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingTopics.map((topic, index) => (
            <TrainingCard key={index} name={topic.name} details={topic.details} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;