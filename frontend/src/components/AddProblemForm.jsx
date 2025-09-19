import React, { useState } from 'react';

function AddProblemForm() {
  const [formData, setFormData] = useState({
    title: '',
    understanding: '',
    platform: '',
    link: '',
    difficulty: '',
    tags: [],
  });

  const topicOptions = ['Arrays', 'Strings', 'DP', 'Graphs', 'Recursion', 'Math'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagToggle = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Problem added successfully!');
    console.log('Submitted:', formData);
    setFormData({
  title: '',
  understanding: '',
  platform: '',
  link: '',
  difficulty: '',
  tags: [],
});
    // Later: send to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-violet-700">Add a New Problem</h2>

      {/* Problem Title */}
      <div>
        <label className="block font-medium text-gray-700">Problem Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      {/* Understanding */}
      <div>
        <label className="block font-medium text-gray-700">How You Understood It</label>
        <textarea
          name="understanding"
          value={formData.understanding}
          onChange={handleChange}
          rows="4"
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="Summarize your approach or key insights"
        />
      </div>

      {/* Platform */}
      <div>
        <label className="block font-medium text-gray-700">Platform</label>
        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="">Select platform</option>
          <option value="LeetCode">LeetCode</option>
          <option value="Codeforces">Codeforces</option>
          <option value="HackerRank">HackerRank</option>
          <option value="GeeksforGeeks">GeeksforGeeks</option>
        </select>
      </div>

      {/* Problem Link */}
      <div>
        <label className="block font-medium text-gray-700">Problem Link</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="https://..."
        />
      </div>

      {/* Difficulty */}
      <div>
        <label className="block font-medium text-gray-700">Difficulty Level</label>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Topic Tags */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Topic Tags</label>
        <div className="flex flex-wrap gap-3">
          {topicOptions.map((tag) => (
            <label key={tag} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.tags.includes(tag)}
                onChange={() => handleTagToggle(tag)}
              />
              <span className="text-gray-600">{tag}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 transition"
      >
        Add Problem
      </button>
    </form>
  );
}

export default AddProblemForm;