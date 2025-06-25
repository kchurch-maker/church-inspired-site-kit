
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-xxl px-xl lg:px-xxl bg-sofia-white">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl">
          {/* Left Side - Content */}
          <div className="space-y-xl">
            <h2 className="text-accent text-sofia-purple mb-lg">
              About Me
            </h2>
            <div className="space-y-lg text-body text-sofia-black leading-relaxed max-w-text">
              <p>
                I'm a Research and Data Science leader who loves building great teams, and using data and evidence to drive effective decision making and inform product innovation. I lead the Research, Analytics & Data Science (RAD) team at Intercom where I've been based for the past ~8 years.
              </p>
              <p>
                We're on a mission to drive effective, evidence-based decisions using research and data science. We believe in the power of combining quantitative and qualitative approaches to drive product direction, shape company strategy, and gain a holistic understanding of our customers and business.
              </p>
              <p>
                Before Intercom, I spent 8 years in industrial research labs — Yahoo Labs and Telefonica Research — leading teams of scientists and conducting research of my own focused on understanding, mining and modeling mobile user behaviours with a view to a shaping new product innovation.
              </p>
              <p>
                I hold a PhD in Computer Science and have published 50 peer reviewed papers at top-tier conferences in areas like human computer interaction, mobile computing, information retrieval and recommender systems.
              </p>
            </div>
          </div>

          {/* Right Side - Vertical Divider & Additional Info */}
          <div className="relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-sofia-purple"></div>
            <div className="lg:pl-xxl space-y-lg">
              <div className="space-y-md">
                <h3 className="text-heading text-sofia-black font-medium">Community & Leadership</h3>
                <p className="text-body text-sofia-black max-w-text">
                  I'm founder of HER+Data, a community to support and connect women who work with & love data. I enjoy writing and speaking about my experiences in research, data science and leadership.
                </p>
              </div>
              
              <div className="space-y-md">
                <h3 className="text-heading text-sofia-black font-medium">Personal</h3>
                <p className="text-body text-sofia-black max-w-text">
                  I live in Dublin, Ireland with my husband, two children and chocolate labrador. I'm a big foodie, amateur baker and curious crafter. I like lifting heavy weights and a good glass of red wine!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
