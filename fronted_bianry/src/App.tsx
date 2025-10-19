// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Training from './sections/Training';
import Contact from './sections/Contact';
import Footer from './components/Footer'; // 1. Import the Footer

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Training />
        <Contact />
      </main>
      <Footer /> {/* 2. Add it here, after the main content */}
    </div>
  );
}

export default App;

