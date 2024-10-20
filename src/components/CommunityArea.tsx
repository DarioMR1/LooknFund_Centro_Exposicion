import React, { useState } from 'react';
import { Search, MessageCircle, Heart, Award, ChevronRight } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  role: string;
  story: string;
  image: string;
  badges: string[];
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Sophia Chen",
    role: "Student",
    story: "Aspiring environmental scientist working on innovative solutions for ocean cleanup.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badges: ["Storyteller", "Eco-Warrior"]
  },
  {
    id: 2,
    name: "Jamal Thompson",
    role: "Mentor",
    story: "Tech entrepreneur dedicated to bridging the digital divide in underserved communities.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badges: ["Community Builder", "Innovator"]
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Student",
    story: "First-generation college student pursuing a degree in renewable energy engineering.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badges: ["Rising Star", "Green Energy Advocate"]
  },
  // Add more profiles as needed
];

const CommunityArea: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.story.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Community</h2>
        
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search community members..."
              className="w-full py-3 px-4 pr-10 rounded-full border-2 border-white bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-3 text-white" size={24} />
          </div>
        </div>
        
        {/* Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfiles.map(profile => (
            <div key={profile.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={profile.image} alt={profile.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">{profile.name}</h3>
                <p className="text-primary mb-2">{profile.role}</p>
                <p className="text-gray-600 mb-4">{profile.story}</p>
                <div className="flex flex-wrap mb-4">
                  {profile.badges.map((badge, index) => (
                    <span key={index} className="bg-accent text-white text-xs font-bold mr-2 mb-2 px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProfile(profile)}
                  className="flex items-center text-accent hover:text-primary transition duration-300"
                >
                  Connect <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Story */}
        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Featured Story" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Featured Story: Building Bridges</h3>
              <p className="text-gray-600 mb-6">
                Discover how our community members are coming together to create positive change and foster deep connections across cultures and backgrounds.
              </p>
              <button className="flex items-center text-white bg-accent hover:bg-primary transition duration-300 py-2 px-6 rounded-full">
                Read Full Story <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Community Engagement */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">Get Involved</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center bg-white text-primary hover:bg-primary hover:text-white transition duration-300 py-3 px-6 rounded-full">
              <MessageCircle size={24} className="mr-2" /> Join Discussions
            </button>
            <button className="flex items-center bg-white text-primary hover:bg-primary hover:text-white transition duration-300 py-3 px-6 rounded-full">
              <Heart size={24} className="mr-2" /> Support a Student
            </button>
            <button className="flex items-center bg-white text-primary hover:bg-primary hover:text-white transition duration-300 py-3 px-6 rounded-full">
              <Award size={24} className="mr-2" /> Become a Mentor
            </button>
          </div>
        </div>
      </div>
      
      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">{selectedProfile.name}</h3>
            <p className="text-primary mb-2">{selectedProfile.role}</p>
            <p className="text-gray-600 mb-4">{selectedProfile.story}</p>
            <div className="flex flex-wrap mb-4">
              {selectedProfile.badges.map((badge, index) => (
                <span key={index} className="bg-accent text-white text-xs font-bold mr-2 mb-2 px-2 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProfile(null)}
                className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunityArea;