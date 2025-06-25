
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-xxl px-xl lg:px-xxl bg-sofia-white">
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-accent text-sofia-purple mb-lg">
          Let's Work Together
        </h2>
        <p className="text-body text-sofia-black max-w-content mx-auto leading-relaxed mb-xxl">
          I'm always interested in new opportunities and meaningful projects. 
          Whether you have a question or just want to say hello, I'd love to hear from you.
        </p>
        
        <div className="flex justify-center space-x-xxl mb-xxl">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center text-body text-sofia-black hover:text-sofia-purple transition-colors group"
          >
            <Mail className="w-5 h-5 mr-sm" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-body text-sofia-black hover:text-sofia-purple transition-colors group"
          >
            <Linkedin className="w-5 h-5 mr-sm" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-body text-sofia-black hover:text-sofia-purple transition-colors group"
          >
            <Github className="w-5 h-5 mr-sm" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      
      <footer className="mt-xxl pt-lg border-t border-sofia-warm-gray text-center">
        <p className="text-sm text-sofia-black opacity-60">
          © 2024 Karen Church. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
