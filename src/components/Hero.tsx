import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-primary-900 z-10" />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d8f42ef5d16e8c3841d15c8af41c8b5ee7199&profile_id=175"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cutting to the Chase with Every Frame
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Professional video editing that brings your vision to life
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="bg-primary-700 hover:bg-primary-900 text-white px-8 py-3 rounded-full flex items-center transition-colors duration-200"
            >
              View Portfolio
              <ChevronRight className="ml-2" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-full transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;