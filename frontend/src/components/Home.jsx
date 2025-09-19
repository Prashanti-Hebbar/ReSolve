import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center px-6 py-12">
      {/* Content Card */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center border border-purple-100">
        {/* Logo */}
        <img
          src="/icon.png"
          alt="ReSolve Logo"
          className="h-16 w-16 mx-auto mb-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-violet-700 mb-2 tracking-wide">
          Welcome to ReSolve
        </h1>

        {/* Tagline */}
        <p className="text-lg text-gray-700 italic mb-4">
          Because One-Time Solving Isn’t Enough
        </p>

        {/* Subtitle */}
        <p className="text-md text-gray-600 mb-6">
          Build your coding habits, track your progress, and revise smarter—one streak at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/revise"
            className="bg-violet-600 text-white px-6 py-3 rounded-full shadow hover:bg-violet-700 transition duration-300"
          >
            Start Revising
          </Link>
          <Link
            to="/add-problem"
            className="bg-white border border-violet-600 text-violet-700 px-6 py-3 rounded-full hover:bg-violet-50 transition duration-300"
          >
            Add Today's Problem
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;