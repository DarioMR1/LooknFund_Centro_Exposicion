import React from 'react';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://example.com/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow">
          Discover Stories That Inspire the Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
          LooknFund connects you with heartfelt stories of students dreaming big and making a difference. Explore our exhibition center and be part of their journey.
        </p>
        <button className="bg-accent hover:bg-primary text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto">
          <Play size={24} className="mr-2" />
          Explore the Stories
        </button>
      </div>
    </div>
  );
};

export default HeroSection;