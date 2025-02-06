import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Play } from 'lucide-react';
import { VideoPreloadContext } from './context/VideoPreloadContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeamlessTransitions from './components/SeamlessTransitions';
import ColorGrading from './components/blog/ColorGrading';
import FutureOfVideoEditing from './components/blog/FutureOfVideoEditing';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPreloaded, setIsVideoPreloaded] = useState(false);

  useEffect(() => {
    document.title = "Vanmarai Editz";
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Preload video immediately
    const preloadVideo = async () => {
      try {
        const videoUrl = 'https://player.vimeo.com/video/1053517169?background=1&muted=1&autoplay=1';
        await fetch(videoUrl);
        setIsVideoPreloaded(true);
      } finally {
        // Ensure loading screen shows for at least 1.5 seconds for smooth transition
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    preloadVideo();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-4xl font-bold flex items-center space-x-2">
          <Play className="animate-pulse" size={48} />
          <span className="animate-pulse">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <VideoPreloadContext.Provider value={{ isVideoPreloaded, setIsVideoPreloaded }}>
      <Routes>
        <Route path="/" element={(
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Portfolio />
              <Services />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </div>
        )} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/seamless-transitions" element={<SeamlessTransitions />} />
        <Route path="/blog/color-grading" element={<ColorGrading />} />
        <Route path="/blog/future-of-video-editing" element={<FutureOfVideoEditing />} />
        {/* Add other routes as needed */}
      </Routes>
    </VideoPreloadContext.Provider>
  );
}

export default App;