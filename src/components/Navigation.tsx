
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#" 
            className="text-xl font-light text-slate-800 hover:text-slate-600 transition-colors"
          >
            Your Name
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-slate-800 transition-colors text-sm font-light tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 hover:text-slate-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
