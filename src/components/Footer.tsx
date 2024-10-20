import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">LooknFund</h3>
            <p className="text-lg">Connecting hearts and minds to build a better world through shared stories and dreams.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Follow us on Facebook">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Follow us on Twitter">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Follow us on Instagram">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Connect with us on LinkedIn">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-lg">
              <li><Link to="/stories" className="hover:text-accent transition duration-300">Inspiring Stories</Link></li>
              <li><Link to="/wall-of-dreams" className="hover:text-accent transition duration-300">Wall of Dreams</Link></li>
              <li><Link to="/community" className="hover:text-accent transition duration-300">Community</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition duration-300">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-lg">
              <li><Link to="/privacy-policy" className="hover:text-accent transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition duration-300">Terms and Conditions</Link></li>
              <li><Link to="/accessibility" className="hover:text-accent transition duration-300">Accessibility</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">Contact Us</h4>
            <p className="text-lg mb-4">1234 Inspiration Ave, Dreamland, DL 12345</p>
            <p className="text-lg mb-6">info@looknfund.com</p>
            <h5 className="text-xl font-semibold text-white mb-4">Stay Updated</h5>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="py-3 px-4 rounded-l-full w-full sm:w-auto focus:outline-none text-secondary mb-2 sm:mb-0"
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-r-full transition duration-300 sm:w-auto w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-lg">&copy; 2023 LooknFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;