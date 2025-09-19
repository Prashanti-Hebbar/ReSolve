import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-lg border-b border-indigo-200 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-0">
          <img
            src="/icon.png"
            alt="ReSolve Logo"
            className="h-8 w-8 rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
          />
          <span className="text-2xl font-extrabold text-violet-700 hover:text-violet-900 transition duration-300 tracking-wide">
            ReSolve
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-base">
          {[
            { label: 'Home', path: '/' },
            { label: 'Revise', path: '/revise' },
            { label: 'Streaks', path: '/streaks' },
            { label: 'Resources', path: '/resources' },
            { label: 'About', path: '/about' },
            { label: 'Profile', path: '/profile' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-emerald-700 font-medium hover:text-violet-600 transition duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;