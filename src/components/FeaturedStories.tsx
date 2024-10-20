import React, { useState, useEffect } from 'react';
import { Search, X, Filter, ChevronRight } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Emma Johnson",
    title: "Revolutionizing Clean Water Access",
    description: "Emma's innovative filtration system is changing lives in rural communities.",
    image: "https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "STEM"
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    title: "Bridging Cultures Through Music",
    description: "Carlos's fusion orchestra is uniting students from diverse backgrounds.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Arts"
  },
  {
    id: 3,
    name: "Aisha Patel",
    title: "Coding for Social Good",
    description: "Aisha's app is connecting volunteers with local community projects.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "STEM"
  },
  {
    id: 4,
    name: "Lucas Chen",
    title: "Sustainable Fashion Revolution",
    description: "Lucas's eco-friendly designs are reshaping the future of fashion.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Design"
  },
  {
    id: 5,
    name: "Sophia Lee",
    title: "Reimagining Urban Spaces",
    description: "Sophia's innovative architectural designs are transforming city landscapes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Architecture"
  },
  {
    id: 6,
    name: "Ethan Brown",
    title: "Exploring Ancient Civilizations",
    description: "Ethan's research is uncovering new insights into forgotten cultures.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Humanities"
  }
];

const categories = ["All", "STEM", "Arts", "Design", "Architecture", "Humanities"];

const FeaturedStories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredStories, setFilteredStories] = useState(stories);
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    const filtered = stories.filter(story =>
      (story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       story.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || story.category === selectedCategory)
    );
    setFilteredStories(filtered);
    setIsFilterActive(searchTerm !== '' || selectedCategory !== 'All');
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Featured Stories</h2>
        
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center mb-4">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            <div className="w-full md:w-auto flex items-center justify-center md:ml-4">
              <Filter className="text-primary mr-2" size={20} />
              <select
                className="py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          {isFilterActive && (
            <div className="flex justify-center">
              <button
                onClick={clearFilters}
                className="flex items-center text-primary hover:text-accent transition duration-300"
              >
                <X size={16} className="mr-1" />
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {filteredStories.length === 0 ? (
          <p className="text-center text-gray-600">No stories found. Try adjusting your search or filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-primary bg-primary bg-opacity-10 rounded-full">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{story.name}</h3>
                  <h4 className="text-lg font-medium mb-2 text-primary">{story.title}</h4>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <button className="flex items-center text-accent hover:text-primary transition duration-300">
                    Learn More <ChevronRight size={20} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStories;