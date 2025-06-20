
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with a focus on user experience and conversion optimization.",
      tags: ["React", "TypeScript", "Stripe"],
      link: "#"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity and design system for a sustainable fashion startup.",
      tags: ["Branding", "Design System", "Figma"],
      link: "#"
    },
    {
      title: "Mobile App Design",
      description: "User interface design for a productivity app focused on mindfulness and well-being.",
      tags: ["UI/UX", "Mobile", "Prototyping"],
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-16 text-center">
          Selected Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="aspect-video bg-slate-100 rounded-md mb-6 flex items-center justify-center">
                <span className="text-slate-400 text-sm">Project Image</span>
              </div>
              <h3 className="text-xl font-light text-slate-800 mb-3 group-hover:text-slate-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors text-sm group"
              >
                View Project
                <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
