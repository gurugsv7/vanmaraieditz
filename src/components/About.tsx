import React from 'react';
import { Video, Award, Clock, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Video, label: 'Projects Completed', value: '200+' },
    { icon: Award, label: 'Awards Won', value: '15' },
    { icon: Clock, label: 'Years Experience', value: '8' },
    { icon: Users, label: 'Happy Clients', value: '150+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="relative mb-6">
              <h2 className="text-4xl font-bold text-primary-900 mb-2">
                Crafting Stories Through
              </h2>
              <h2 className="text-4xl font-bold text-primary-700">
                Visual Excellence
              </h2>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-900 to-primary-700" />
            </div>
            <p className="text-lg text-primary-700 mb-8">
              With over 8 years of experience in video editing, I've had the privilege of working
              with leading brands and creative minds across the globe. My passion lies in
              transforming raw footage into compelling narratives that captivate audiences
              and deliver messages that resonate.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="relative group">
                  <div className="absolute inset-0 bg-primary-100/30 rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0" />
                  <div className="relative bg-white p-6 rounded-lg shadow-sm transform transition-transform group-hover:translate-y-1">
                    <Icon className="h-8 w-8 text-primary-700 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-900">{value}</div>
                    <div className="text-sm text-primary-700">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-primary-700 rounded-lg transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=1932"
                alt="Video editing workspace"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute inset-0 bg-primary-900/10 rounded-lg z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;