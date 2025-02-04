<section id="portfolio" className="relative py-20 bg-black overflow-hidden">
  {/* Update background gradients */}
  <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
  // ...existing code...

  {/* Update text colors in the content */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
      // ...existing code...
    </h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto relative">
      // ...existing code...
    </p>
  </div>

  {/* Update thumbnail overlay colors */}
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
  <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/90 to-transparent">
    <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">{project.category}</p>
    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-gray-300 transition-colors">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {project.description}
    </p>
  </div>

  {/* Update modal background */}
  {selectedImage && (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/95" />
      // ...existing code...
    </div>
  )}
</section>
