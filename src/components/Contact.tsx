
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8">
          Let's Work Together
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          I'm always interested in new opportunities and meaningful projects. 
          Whether you have a question or just want to say hello, I'd love to hear from you.
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center text-slate-600 hover:text-purple-600 transition-colors group"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span className="text-sm font-light">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-600 hover:text-purple-600 transition-colors group"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            <span className="text-sm font-light">LinkedIn</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-600 hover:text-purple-600 transition-colors group"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="text-sm font-light">GitHub</span>
          </a>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-400">
          © 2024 Karen Church. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
