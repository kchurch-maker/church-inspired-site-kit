
import React from 'react';
import { ExternalLink, Calendar, MapPin, BookOpen } from 'lucide-react';

const WritingSpeaking = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Design",
      description: "Exploring emerging trends in digital design and their impact on user experience.",
      date: "March 15, 2024",
      link: "#"
    },
    {
      title: "Building Meaningful Connections",
      description: "How design can foster genuine human connections in digital spaces.",
      date: "February 22, 2024",
      link: "#"
    },
    {
      title: "Sustainable Design Practices",
      description: "Creating environmentally conscious design solutions for the modern web.",
      date: "January 10, 2024",
      link: "#"
    }
  ];

  const speakingEngagements = [
    {
      title: "Design Conference 2024",
      topic: "The Intersection of Creativity and Technology",
      date: "June 15, 2024",
      location: "San Francisco, CA"
    },
    {
      title: "UX Summit",
      topic: "Building Empathy Through Design",
      date: "April 20, 2024",
      location: "New York, NY"
    },
    {
      title: "Tech Talk Series",
      topic: "Future-Proofing Your Design Career",
      date: "March 8, 2024",
      location: "Austin, TX"
    }
  ];

  return (
    <section id="writing-speaking" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-16 text-center">
          Writing & Speaking
        </h2>
        
        {/* Blog Posts Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <BookOpen className="w-5 h-5 text-slate-600 mr-3" />
            <h3 className="text-xl font-light text-slate-800">Recent Writing</h3>
          </div>
          
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border-l-2 border-slate-200 pl-6 hover:border-slate-400 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-light text-slate-800 hover:text-slate-600 transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-sm text-slate-500 mt-1 sm:mt-0">{post.date}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors text-sm group"
                >
                  Read More
                  <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Speaking Engagements Section */}
        <div>
          <div className="flex items-center mb-8">
            <Calendar className="w-5 h-5 text-slate-600 mr-3" />
            <h3 className="text-xl font-light text-slate-800">Speaking Engagements</h3>
          </div>
          
          <div className="space-y-6">
            {speakingEngagements.map((event, index) => (
              <div
                key={index}
                className="border-l-2 border-slate-200 pl-6 hover:border-slate-400 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-lg font-light text-slate-800 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-2">
                      {event.topic}
                    </p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right sm:ml-4">
                    <div className="flex items-center sm:justify-end mb-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center sm:justify-end">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSpeaking;
