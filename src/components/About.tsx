
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                I'm a creative professional with a passion for crafting digital experiences 
                that are both beautiful and functional. My journey began with a fascination 
                for how design can solve complex problems and create meaningful connections.
              </p>
              <p>
                With expertise in design and development, I bridge the gap between creative 
                vision and technical implementation. I believe that great design is not just 
                about aesthetics—it's about understanding users and creating solutions that 
                truly serve their needs.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new coffee shops, 
                reading design books, or taking long walks in nature for inspiration.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light text-slate-800 mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="space-y-2">
                  <p>UI/UX Design</p>
                  <p>Web Development</p>
                  <p>Brand Identity</p>
                  <p>Typography</p>
                </div>
                <div className="space-y-2">
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Figma</p>
                  <p>Adobe Creative Suite</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light text-slate-800 mb-4">Education</h3>
              <div className="text-sm text-slate-600 space-y-2">
                <p>Bachelor of Design</p>
                <p>University Name, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
