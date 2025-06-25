
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WritingSpeaking from '@/components/WritingSpeaking';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WritingSpeaking />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
