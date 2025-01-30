import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Brand Campaign - Tech Giant",
    description: "A dynamic brand campaign showcasing innovative technology solutions",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=2070",
    videoUrl: "https://player.vimeo.com/video/76979871",
    category: "Commercial",
    client: "Major Tech Corporation",
    awards: ["Best Commercial - AdWeek 2023"]
  },
  {
    id: 2,
    title: "Documentary - Urban Life",
    description: "An intimate look at city life through the eyes of its residents",
    thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2144",
    videoUrl: "https://player.vimeo.com/video/347119375",
    category: "Documentary",
    client: "Independent Production",
    awards: ["Official Selection - Documentary Film Festival 2023"]
  },
  {
    id: 3,
    title: "Product Launch - Luxury Brand",
    description: "Elegant product showcase for a premium luxury brand",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070",
    videoUrl: "https://player.vimeo.com/video/824804225",
    category: "Commercial",
    client: "Luxury Fashion House",
    awards: []
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-lg text-primary-500">
            A selection of my best video editing projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60 z-10" />
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Play className="text-white h-16 w-16 mb-4" />
                  <p className="text-primary-500 text-sm uppercase tracking-wider">{project.category}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary-500 text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setSelectedProject(null)}>
              <div className="absolute inset-0 bg-primary-900 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-primary-500 hover:text-primary-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe
                    src={selectedProject.videoUrl}
                    className="w-full h-[400px]"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-primary-700 mb-4">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary-900">Client</h4>
                    <p className="text-primary-700">{selectedProject.client}</p>
                  </div>
                  {selectedProject.awards.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-primary-900">Awards</h4>
                      <ul className="text-primary-700">
                        {selectedProject.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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