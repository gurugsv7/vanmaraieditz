import React from 'react';
import { Scissors, Film, Palette, Type, Music } from 'lucide-react'; // Changed icons

const About = () => {
  const skills = [
    { icon: Scissors, label: 'Jump Cuts', description: 'Dynamic & precise' },
    { icon: Film, label: 'B Rolls', description: 'Engaging visuals' },
    { icon: Palette, label: 'Green Screen', description: 'Clean removal' },
    { icon: Type, label: 'Text Animation', description: 'Eye-catching motion' },
    { icon: Music, label: 'Sound Effects', description: 'Perfect timing' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="relative mb-6">
              <h2 className="text-4xl font-bold text-primary-900 mb-2">
                Hi, I'm Vanmarai
              </h2>
              <h2 className="text-4xl font-bold text-primary-700">
                Your Story Editor
              </h2>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-900 to-primary-700" />
            </div>
            <p className="text-lg text-gray-700 mb-4">
              As a passionate video editor, I specialize in transforming ideas into compelling visual stories. 
              Whether it's creating engaging reels, dynamic YouTube content, or eye-catching thumbnails, 
              I'm dedicated to helping clients make their vision come to life through creative and professional editing.
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">What I Can Do For You</h3>
              <p className="text-lg text-gray-700">
                I can help you create engaging videos for social media, businesses, or personal projects. 
                Let's work together to tell your story.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map(({ icon: Icon, label, description }) => (
                <div key={label} className="relative group">
                  <div className="absolute inset-0 bg-primary-100/30 rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0" />
                  <div className="relative bg-white p-4 rounded-lg shadow-sm transform transition-transform group-hover:translate-y-1">
                    <Icon className="h-8 w-8 text-primary-700 mx-auto mb-2" />
                    <div className="text-lg font-bold text-primary-900 text-center">{label}</div>
                    <div className="text-sm text-primary-700 text-center">{description}</div>
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