import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Play, Pause, ChevronRight, Mail, Linkedin, Youtube, Video, Award, Clock, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeamlessTransitions from './components/SeamlessTransitions';
import ColorGrading from './components/blog/ColorGrading'; // Update to the correct file name
import FutureOfVideoEditing from './components/blog/FutureOfVideoEditing';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Vanmarai Editz"; // Update the title here
    // Simulate loading time for animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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
    <Router>
      <Routes>
        <Route path="/" element={(
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Portfolio />
              <Services />
              <Testimonials />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </div>
        )} />
        <Route path="/seamless-transitions" element={<SeamlessTransitions />} />
        <Route path="/color-grading" element={<ColorGrading />} />
        <Route path="/future-of-video-editing" element={<FutureOfVideoEditing />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;