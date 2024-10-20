import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedStory from './components/FeaturedStory';
import FeaturedStories from './components/FeaturedStories';
import WallOfDreams from './components/WallOfDreams';
import InspirationalVideo from './components/InspirationalVideo';
import CommunityArea from './components/CommunityArea';
import ProfileCreation from './components/ProfileCreation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <InspirationalVideo />
                <FeaturedStory
                  name="Maya Patel"
                  title="Revolutionizing Renewable Energy"
                  description="Maya's groundbreaking solar panel design is making clean energy more accessible to communities worldwide."
                  quote="I believe that everyone deserves access to clean, sustainable energy. My goal is to make that a reality."
                  image="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                />
                <FeaturedStories />
                <WallOfDreams />
                <CommunityArea />
              </>
            } />
            <Route path="/create-profile" element={<ProfileCreation />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;