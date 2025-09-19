import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProblemForm from './components/AddProblemForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-problem" element={<AddProblemForm />} />
      </Routes>
    </div>
  );
}

export default App;
