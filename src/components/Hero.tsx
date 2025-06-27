
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pb-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-sm opacity-75"></div>
            <Avatar className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 ring-4 ring-yellow-400">
              <AvatarImage 
                src="/lovable-uploads/c43002a8-1512-4127-9afd-81c031d7cccc.png" 
                alt="Karen Church" 
                className="object-cover"
              />
              <AvatarFallback className="text-4xl">KC</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
            Hello, I'm <span className="font-normal bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Karen Church</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            A passionate Research & Data Science leader who turns data into decisions that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
