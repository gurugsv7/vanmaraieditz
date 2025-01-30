import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const SeamlessTransitions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">The Art of Seamless Transitions in Video Editing</h1>
      <div className="flex items-center text-sm text-primary-700 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <time>January 29, 2025</time>
        <span className="mx-2">•</span>
        <Clock className="w-4 h-4 mr-2" />
        <span>5 min read</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2070"
        alt="The Art of Seamless Transitions in Video Editing"
        className="w-full h-auto object-cover rounded-lg mb-8"
      />
      <div className="text-primary-700 leading-relaxed">
        <p className="mb-4">
          Seamless transitions are a crucial aspect of video editing that can significantly enhance the viewing experience. They help in maintaining the flow of the narrative and ensure that the audience remains engaged.
        </p>
        <p className="mb-4">
          In this blog post, we will explore various techniques to master seamless transitions, including the use of cuts, fades, and other creative methods. We will also discuss the importance of timing and how to match transitions with the rhythm of the video.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Understanding the Basics</h2>
        <p className="mb-4">
          The first step in mastering seamless transitions is to understand the basics. This includes knowing when to use a cut, a fade, or a dissolve. Each type of transition serves a different purpose and can evoke different emotions in the audience.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Techniques for Seamless Transitions</h2>
        <p className="mb-4">
          Here are some techniques to achieve seamless transitions:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Match cuts: Aligning the action or composition between two shots to create a smooth transition.</li>
          <li>Fade in/out: Gradually transitioning from one shot to another by fading in or out.</li>
          <li>Cross dissolve: Blending two shots together to create a smooth transition.</li>
          <li>Wipe: Using a shape or pattern to transition between shots.</li>
        </ul>
        <p className="mb-4">
          Experimenting with these techniques and finding the right balance is key to creating engaging videos.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Conclusion</h2>
        <p className="mb-4">
          Seamless transitions are an essential skill for any video editor. By understanding the basics and experimenting with different techniques, you can create videos that are not only visually appealing but also emotionally engaging.
        </p>
      </div>
    </div>
  );
};

export default SeamlessTransitions;
