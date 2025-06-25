
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-xl lg:px-xxl bg-sofia-cream">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
          {/* Left Side - Content */}
          <div className="space-y-xl">
            <div className="space-y-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-sofia-black leading-tight">
                Hello, I'm <span className="font-medium text-sofia-purple">Karen Church</span>
              </h1>
              <p className="text-body text-sofia-black max-w-text leading-relaxed">
                A passionate Research & Data Science leader who turns data into decisions that matter.
              </p>
            </div>
            
            <div className="pt-lg">
              <a
                href="#about"
                className="inline-flex items-center text-accent text-sofia-purple hover:text-sofia-purple-dark transition-colors group"
              >
                <span className="tracking-wide">Learn more about me</span>
                <svg 
                  className="ml-sm w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Avatar className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <AvatarImage 
                src="/lovable-uploads/06602a6c-c7e0-47d9-a40c-ab057bb2c54b.png" 
                alt="Karen Church" 
                className="object-cover"
              />
              <AvatarFallback className="text-3xl text-sofia-purple bg-sofia-warm-gray">KC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
