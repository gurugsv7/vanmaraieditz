import React from 'react';
import { Video, Youtube, Image, Film } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Reel Editing',
    description: 'Creative and engaging reel editing for Instagram, Facebook, and other social platforms.',
    rate: '₹2000-4000/reel'
  },
  {
    icon: Youtube,
    title: 'YouTube Video Editing',
    description: 'Professional YouTube video editing with engaging cuts, effects, and optimized pacing.',
    rate: '₹5000-8000/video'
  },
  {
    icon: Image,
    title: 'Thumbnail Designing',
    description: 'Eye-catching thumbnail designs that drive clicks and engagement for your content.',
    rate: '₹1000-2000/thumbnail'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Services</h2>
          <p className="text-lg text-primary-700">
            Professional video editing services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, title, description, rate }) => (
            <div
              key={title}
              className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Icon className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-bold text-primary-900 mb-2">{title}</h3>
              <p className="text-primary-700 mb-4">{description}</p>
              <div className="text-primary-900 font-semibold">{rate}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary-700 mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary-700 text-white px-6 py-3 rounded-full hover:bg-primary-900 transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;