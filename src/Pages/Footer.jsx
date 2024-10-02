import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="md:flex justify-between">
          {/* Left Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
