
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-16 text-center">
          Writing & Speaking
        </h2>
        
        {/* Blog Posts Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-slate-800 mb-8">Recent Blog Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <h4 className="text-xl font-light text-slate-800 mb-3 group-hover:text-slate-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors text-sm group"
                >
                  Read More
                  <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Speaking Engagements Section */}
        <div>
          <h3 className="text-2xl font-light text-slate-800 mb-8">Speaking Engagements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingEngagements.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="w-4 h-4 text-slate-500 mr-2" />
                  <span className="text-sm text-slate-500">{event.date}</span>
                </div>
                <h4 className="text-xl font-light text-slate-800 mb-2">
                  {event.title}
                </h4>
                <p className="text-slate-600 text-sm mb-2">
                  {event.topic}
                </p>
                <p className="text-slate-500 text-xs">
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSpeaking;
