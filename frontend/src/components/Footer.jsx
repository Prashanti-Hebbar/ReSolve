import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-700 py-8 border-t border-indigo-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        {/* Brand & Mission */}
        <div>
          <h2 className="text-xl font-bold text-violet-700 mb-2">ReSolve</h2>
          <p className="text-sm">
            Because one-time solving isn’t enough. ReSolve helps you build coding habits through revision, reflection, and streaks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-violet-600 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-violet-700 transition">Home</Link></li>
            <li><Link to="/revise" className="hover:text-violet-700 transition">Revise</Link></li>
            <li><Link to="/streaks" className="hover:text-violet-700 transition">Streaks</Link></li>
            <li><Link to="/resources" className="hover:text-violet-700 transition">Resources</Link></li>
            <li><Link to="/about" className="hover:text-violet-700 transition">About</Link></li>
            <li><Link to="/profile" className="hover:text-violet-700 transition">Profile</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-md font-semibold text-violet-600 mb-2">Connect</h3>
          <p className="text-sm mb-2">Made with ❤️ in India</p>
          <div className="flex justify-center sm:justify-start gap-4 text-violet-600">
            <a href="#" className="hover:text-violet-800 transition">GitHub</a>
            <a href="#" className="hover:text-violet-800 transition">Email</a>
            <a href="#" className="hover:text-violet-800 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ReSolve. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;