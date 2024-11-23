import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/splash/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </Router>
  );
}

export default App;