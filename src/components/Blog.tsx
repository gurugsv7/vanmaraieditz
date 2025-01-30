import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Art of Seamless Transitions in Video Editing",
    excerpt: "Explore the importance of seamless transitions in video editing and techniques to master them.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2070",
    date: "January 29, 2025",
    readTime: "5 min read",
    slug: "seamless-transitions"
  },
  {
    id: 2,
    title: "The Power of Color Grading in Video Editing",
    excerpt: "Understand how color grading can transform your videos by setting mood and enhancing storytelling.",
    image: "https://images.unsplash.com/photo-1533468432434-200de3b5d528?auto=format&fit=crop&q=80&w=2070",
    date: "January 29, 2025",
    readTime: "7 min read",
    slug: "color-grading"
  },
  {
    id: 3,
    title: "The Future of Video Editing: Trends and Predictions",
    excerpt: "Discover the future trends in video editing, including AI and cloud-based technologies.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2069",
    date: "January 29, 2025",
    readTime: "6 min read",
    slug: "future-of-video-editing"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-primary-700">
            Tips, trends, and thoughts on video editing and the media industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/0 transition-colors duration-300 z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-primary-100/10 to-white">
                <div className="flex items-center text-sm text-primary-700 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-primary-700 mb-4">{post.excerpt}</p>
                <Link
                  to={`/vanmaraieditz/${post.slug}`} // Ensure the base URL is correct
                  className="inline-flex items-center text-primary-700 hover:text-primary-900 transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;