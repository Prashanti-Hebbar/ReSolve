import React from 'react';
import Footer from "./Footer";

function About() {
  return (
    <><div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-violet-700 mb-4">About ReSolve</h1>

      <p className="max-w-3xl text-lg text-gray-700 mb-6">
        <strong>ReSolve</strong> is a habit-forming coding revision platform built for beginner programmers who want to go beyond one-time problem solving. We believe that true mastery comes from revisiting, reflecting, and reinforcing what you've learned.
      </p>

      <p className="max-w-3xl text-md text-gray-600 mb-6">
        Whether you're preparing for interviews, building consistency, or just trying to retain what you've solved, ReSolve helps you track your progress, maintain streaks, and revise smarter. With intuitive design, personalized insights, and a growing community, ReSolve turns revision into a rewarding habit.
      </p>

      <div className="bg-white/70 backdrop-blur-md border border-purple-100 rounded-xl shadow-md p-6 max-w-xl">
        <h2 className="text-2xl font-bold text-violet-600 mb-2">Why ReSolve?</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Track revision streaks and build consistency</li>
          <li>Revisit problems with personalized notes and tags</li>
          <li>Organize problems by platform, topic, and difficulty</li>
          <li>Celebrate progress with badges and insights</li>
          <li>Empower your learning with habit-forming design</li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Built with ❤️ by passionate learners, for passionate learners.
      </p>
    </div>
    <Footer /> 
    </>
  );
}

export default About;