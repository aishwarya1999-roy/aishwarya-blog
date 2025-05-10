import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import AIArticlePage from './pages/aiarticlepage';
import ReactArticlePage from './pages/react';
import CloudArticlePage from './pages/cloud';

function App() {
  return (
    <Router basename="/aishwarya-blog">
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/future-of-ai" element={<AIArticlePage />} />
          <Route path="/article/mastering-react-hooks" element={<ReactArticlePage />} />
          <Route path="/article/scalable-systems-cloud" element={<CloudArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
