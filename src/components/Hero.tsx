
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage 
              src="/lovable-uploads/06602a6c-c7e0-47d9-a40c-ab057bb2c54b.png" 
              alt="Karen Church" 
              className="object-cover"
            />
            <AvatarFallback className="text-2xl">KC</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
          Hello, I'm <span className="font-normal">Karen Church</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
          A passionate Research & Data Science leader who turns data into decisions that matter.
        </p>
        <div className="mt-12">
          <a
            href="#about"
            className="inline-flex items-center text-slate-600 hover:text-purple-600 transition-colors group"
          >
            <span className="text-sm font-light tracking-wide">Learn more about me</span>
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
