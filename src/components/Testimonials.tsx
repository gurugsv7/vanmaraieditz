import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887",
    content: "Working with this editor was a game-changer for our marketing campaigns. The attention to detail and creative vision brought our content to life.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Independent Filmmaker",
    company: "Studio 23",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
    content: "Exceptional editing skills and a true professional. The ability to understand and enhance the emotional core of our documentary was remarkable.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Creative Director",
    company: "Brand Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070",
    content: "Fast, efficient, and incredibly talented. Our corporate videos have never looked better. Highly recommended for any professional video editing needs.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-primary-700">
            Don't just take my word for it - here's what my clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-700/20 rounded-full transform -rotate-6" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover relative z-10"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-primary-900">{testimonial.name}</h3>
                  <p className="text-primary-700 text-sm">{testimonial.role}</p>
                  <p className="text-primary-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-primary-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-primary-700 italic relative">
                <span className="absolute -left-2 -top-2 text-4xl text-primary-500/20">"</span>
                {testimonial.content}
                <span className="absolute -right-2 -bottom-2 text-4xl text-primary-500/20">"</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;