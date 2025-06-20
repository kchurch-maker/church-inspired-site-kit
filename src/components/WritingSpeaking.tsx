
import React from 'react';
import { ExternalLink, Calendar, MapPin, BookOpen, ArrowRight } from 'lucide-react';

const WritingSpeaking = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Design",
      description: "Exploring emerging trends in digital design and their impact on user experience.",
      date: "March 15, 2024",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "Building Meaningful Connections",
      description: "How design can foster genuine human connections in digital spaces.",
      date: "February 22, 2024",
      readTime: "7 min read",
      link: "#"
    },
    {
      title: "Sustainable Design Practices",
      description: "Creating environmentally conscious design solutions for the modern web.",
      date: "January 10, 2024",
      readTime: "6 min read",
      link: "#"
    }
  ];

  const speakingEngagements = [
    {
      title: "Design Conference 2024",
      topic: "The Intersection of Creativity and Technology",
      date: "June 15, 2024",
      location: "San Francisco, CA",
      status: "upcoming"
    },
    {
      title: "UX Summit",
      topic: "Building Empathy Through Design",
      date: "April 20, 2024",
      location: "New York, NY",
      status: "completed"
    },
    {
      title: "Tech Talk Series",
      topic: "Future-Proofing Your Design Career",
      date: "March 8, 2024",
      location: "Austin, TX",
      status: "completed"
    }
  ];

  return (
    <section id="writing-speaking" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Writing & Speaking
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sharing insights and experiences through writing and speaking engagements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Blog Posts Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Recent Writing</h3>
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-200 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium group"
                  >
                    Read Article
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Speaking Engagements Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Speaking Engagements</h3>
            </div>
            
            <div className="space-y-6">
              {speakingEngagements.map((event, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      event.status === 'upcoming' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">
                    {event.topic}
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSpeaking;
