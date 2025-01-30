import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ColorGrading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">The Power of Color Grading in Video Editing</h1>
      <div className="flex items-center text-sm text-primary-700 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <time>January 29, 2025</time>
        <span className="mx-2">•</span>
        <Clock className="w-4 h-4 mr-2" />
        <span>7 min read</span>
      </div>
      <div className="relative h-48 overflow-hidden rounded-lg mb-8">
        <img
          src="https://images.unsplash.com/photo-1533468432434-200de3b5d528?auto=format&fit=crop&q=80&w=2070"
          alt="The Power of Color Grading in Video Editing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-primary-700 leading-relaxed">
        <p className="mb-4">
          Color grading is a powerful tool in video editing that can transform the look and feel of your videos. It helps in setting the mood, enhancing the storytelling, and making your videos visually appealing.
        </p>
        <p className="mb-4">
          In this blog post, we will explore the basics of color grading, the tools you can use, and some tips to get started. We will also look at how color grading can be used to convey different emotions and themes in your videos.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Understanding Color Grading</h2>
        <p className="mb-4">
          Color grading involves adjusting the colors in your video to achieve a specific look or feel. This can include correcting color imbalances, enhancing certain colors, and creating a consistent color palette throughout your video.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Tools for Color Grading</h2>
        <p className="mb-4">
          There are several tools available for color grading, ranging from professional software like DaVinci Resolve and Adobe Premiere Pro to more accessible options like Final Cut Pro and even mobile apps. Each tool offers different features and capabilities, so it's important to choose one that fits your needs and skill level.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Tips for Effective Color Grading</h2>
        <p className="mb-4">
          Here are some tips to help you get started with color grading:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Start with color correction: Before diving into creative grading, make sure your footage is properly color corrected.</li>
          <li>Use color wheels: Color wheels are a great tool for adjusting the hue, saturation, and brightness of your footage.</li>
          <li>Experiment with LUTs: Look-Up Tables (LUTs) can be used to apply predefined color grades to your footage.</li>
          <li>Pay attention to skin tones: Make sure skin tones look natural and consistent throughout your video.</li>
        </ul>
        <p className="mb-4">
          By following these tips and experimenting with different techniques, you can create stunning videos that captivate your audience.
        </p>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Conclusion</h2>
        <p className="mb-4">
          Color grading is an essential skill for any video editor. It allows you to enhance the visual appeal of your videos and convey different emotions and themes. With the right tools and techniques, you can take your videos to the next level.
        </p>
      </div>
    </div>
  );
};

export default ColorGrading;