import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/splash/index.jsx';
import Home from './pages/home/index.jsx';
import Test from './pages/Test/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/fail" element={<Test />} />
        <Route path="/test/success" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
