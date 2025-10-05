import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProblemForm from './components/AddProblemForm';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-problem" element={<AddProblemForm />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
