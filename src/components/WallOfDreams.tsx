import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Globe, Heart, PenTool } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  country: string;
  dream: string;
  quote: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Amina Khalid",
    country: "Kenya",
    dream: "To become a wildlife conservationist and protect endangered species",
    quote: "Nature's beauty inspires me to fight for its preservation.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    country: "Mexico",
    dream: "To revolutionize sustainable agriculture in arid regions",
    quote: "I believe technology can help us grow food anywhere, ending hunger.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    country: "Japan",
    dream: "To create AI-powered educational tools for children with special needs",
    quote: "Every child deserves the chance to learn and grow at their own pace.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // Add more stories as needed
];

const WallOfDreams: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story>(stories[0]);
  const [userDream, setUserDream] = useState('');
  const [userDreams, setUserDreams] = useState<string[]>([]);

  const nextStory = () => {
    const currentIndex = stories.findIndex(story => story.id === activeStory.id);
    const nextIndex = (currentIndex + 1) % stories.length;
    setActiveStory(stories[nextIndex]);
  };

  const prevStory = () => {
    const currentIndex = stories.findIndex(story => story.id === activeStory.id);
    const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
    setActiveStory(stories[prevIndex]);
  };

  const handleDreamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userDream.trim()) {
      setUserDreams([...userDreams, userDream]);
      setUserDream('');
    }
  };

  useEffect(() => {
    const interval = setInterval(nextStory, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(interval);
  }, [activeStory]);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Wall of Dreams</h2>
        
        {/* Interactive Story Panels */}
        <div className="relative bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={activeStory.image} alt={activeStory.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold mb-2">{activeStory.name}</h3>
              <p className="text-primary mb-4 flex items-center">
                <Globe size={20} className="mr-2" /> {activeStory.country}
              </p>
              <p className="text-xl font-medium mb-4">{activeStory.dream}</p>
              <blockquote className="italic text-lg text-gray-600 mb-6 border-l-4 border-accent pl-4">
                "{activeStory.quote}"
              </blockquote>
            </div>
          </div>
          <button onClick={prevStory} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft size={24} className="text-primary" />
          </button>
          <button onClick={nextStory} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight size={24} className="text-primary" />
          </button>
        </div>
        
        {/* Dream Contribution Station */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Share Your Dream</h3>
          <form onSubmit={handleDreamSubmit} className="flex items-center">
            <input
              type="text"
              value={userDream}
              onChange={(e) => setUserDream(e.target.value)}
              placeholder="What's your dream?"
              className="flex-grow py-2 px-4 rounded-l-full border-2 border-r-0 border-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="bg-primary hover:bg-accent text-white font-bold py-2 px-6 rounded-r-full transition duration-300">
              <PenTool size={20} />
            </button>
          </form>
        </div>
        
        {/* Dream Clouds */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {userDreams.map((dream, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-full p-4 shadow-md flex items-center justify-center text-center">
              <p className="text-sm">{dream}</p>
            </div>
          ))}
        </div>
        
        {/* Reflection Space */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Reflect and Inspire</h3>
          <p className="mb-4">Take a moment to reflect on the stories you've encountered. How do they inspire you?</p>
          <textarea
            className="w-full h-32 p-4 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Share your thoughts and reflections..."
          ></textarea>
          <button className="mt-4 bg-primary hover:bg-accent text-white font-bold py-2 px-6 rounded-full transition duration-300 flex items-center">
            <Heart size={20} className="mr-2" /> Share Inspiration
          </button>
        </div>
      </div>
    </section>
  );
};

export default WallOfDreams;