import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Futuristic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-black z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
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
        <div className="animate-fadeIn space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-4 
                         bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-300 to-white
                         animate-gradient-x">
            Cutting to the Chase with Every Frame
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl mb-6 sm:mb-10 lg:mb-8 
                       text-primary-100 font-light tracking-wide">
            Professional video editing that brings your vision to life
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="group relative px-8 py-3 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-500 to-primary-700 
                             opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent)]" />
              <span className="relative flex items-center">
                View Portfolio
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-3 rounded-full overflow-hidden
                         border border-white/30 hover:border-white/50 backdrop-blur-sm
                         transition-colors duration-200"
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
              <span className="relative">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;