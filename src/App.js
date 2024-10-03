// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questions from './components/Questions';
import Answer from './components/Answer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/answer/:id" element={<Answer />} />
      </Routes>
    </Router>
  );
};

export default App;

