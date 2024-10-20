import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FeaturedStoryProps {
  name: string;
  title: string;
  description: string;
  quote: string;
  image: string;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({ name, title, description, quote, image }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Story</h2>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={image} alt={`${name}'s project`} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold mb-2 text-secondary">{name}</h3>
              <h4 className="text-xl font-medium mb-4 text-primary">{title}</h4>
              <p className="text-gray-600 mb-6">{description}</p>
              <blockquote className="italic text-lg text-gray-700 mb-6 border-l-4 border-accent pl-4">
                "{quote}"
              </blockquote>
              <button className="flex items-center text-white bg-accent hover:bg-primary transition duration-300 py-2 px-4 rounded-full">
                Read Full Story <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;