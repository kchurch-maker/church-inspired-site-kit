
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-white shadow-2xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80" 
                  alt="Karen Church"
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl bg-slate-200">KC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase mb-2">
                Research & Data Science Leader
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                Karen Church
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 mb-6"></div>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              Transforming complex data into actionable insights that drive meaningful business decisions and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
