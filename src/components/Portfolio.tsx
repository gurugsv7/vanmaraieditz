import React, { useState, useEffect, useRef, useContext } from 'react';
import { X, Volume2, VolumeX, Loader, Play } from 'lucide-react';
import { VideoPreloadContext } from '../App';

const projects = {
  featured: {
    id: 1,
    title: "Social Media Showcase Reel",
    description: "A dynamic compilation of social media content",
    thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2144",
    videoUrl: "https://player.vimeo.com/video/1053517169",
    category: "Reel",
    format: "reel"
  },
  thumbnails: [
    {
      id: 2,
      title: "Use AI to Become Rich",
      description: "Master AI tools for video editing and monetization strategies",
      thumbnail: "https://res.cloudinary.com/dzp9gxlh8/image/upload/v1738700692/gvudaitpien5qxshouiw.jpg",
      category: "AI & Money",
    },
    {
      id: 3,
      title: "Turn Trash into Money",
      description: "Transform low-quality footage into profitable content",
      thumbnail: "https://res.cloudinary.com/dzp9gxlh8/image/upload/v1738701170/kkjpoix79tc1nflcrbfr.jpg",
      category: "Content Strategy",
    },
    {
      id: 4,
      title: "7 Best Video & Photo Editors",
      description: "Top editing tools for professional content creation",
      thumbnail: "https://res.cloudinary.com/dzp9gxlh8/image/upload/v1738701173/bc0cupsckwvebxswwmwq.jpg",
      category: "Software Review",
    }
  ]
};

const Portfolio = () => {
  interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
  }
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isReelVisible, setIsReelVisible] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    description: string;
    thumbnail: string;
    category: string;
  }>(null);
  const reelRef = useRef(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const { isVideoPreloaded } = useContext(VideoPreloadContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsReelVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (reelRef.current) {
      observer.observe(reelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getVideoUrl = (url: string, autoPlay: boolean = false) => {
    const baseUrl = url;
    const params = new URLSearchParams({
      autoplay: autoPlay ? '1' : '0',
      muted: isMuted ? '1' : '0',
      autopause: '0',
      background: '1',
      loop: '1'
    });
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <section id="portfolio" className="relative py-20 bg-primary-900 overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 to-primary-900" />
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-primary-700/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/4 bottom-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="absolute -left-6 -top-6 w-12 h-12 bg-gradient-to-br from-primary-500/50 to-transparent rounded-full blur-xl animate-pulse" />
            Featured Work
          </h2>
          <p className="text-lg text-primary-400 max-w-2xl mx-auto relative">
            A selection of my best video editing projects
            <span className="absolute -right-6 -bottom-6 w-12 h-12 bg-gradient-to-tl from-primary-700/50 to-transparent rounded-full blur-xl animate-pulse delay-300" />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          {/* Featured Vertical Reel */}
          <div className="lg:col-span-5 relative" ref={reelRef}>
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="group relative h-[600px] md:h-[800px] rounded-xl shadow-lg overflow-hidden">
              <iframe
                ref={videoRef}
                src={getVideoUrl(projects.featured.videoUrl, true)}
                className={`w-full h-full transition-opacity duration-500 ${isReelVisible ? 'opacity-100' : 'opacity-0'}`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-primary-900/90 to-transparent">
                <p className="text-primary-400 text-sm uppercase tracking-wider mb-2">{projects.featured.category}</p>
                <h3 className="text-white font-bold text-2xl mb-2">{projects.featured.title}</h3>
                <p className="text-primary-300">{projects.featured.description}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-7">
            <div className="flex flex-col h-[600px] md:h-[800px] justify-between">
              {projects.thumbnails.map((project) => (
                <div
                  key={project.id}
                  className="group relative w-full h-[32%] rounded-lg shadow-lg cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-primary-900/90 to-transparent">
                    <p className="text-primary-400 text-sm uppercase tracking-wider mb-2">{project.category}</p>
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/95 to-primary-950/95" />
          <div className="flex items-center justify-center min-h-screen px-4 py-6 sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setSelectedImage(null)}>
              <div className="absolute inset-0 bg-primary-900/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all w-full max-w-4xl mx-auto">
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="bg-white">
                <div className="aspect-video">
                  <img
                    src={selectedImage.thumbnail}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-primary-700 mb-6">{selectedImage.description}</p>
                  <div className="inline-block bg-primary-100 px-3 py-1 rounded-full">
                    <span className="text-primary-700">{selectedImage.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;