import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/splash/index.jsx';
import Home from './pages/home/index.jsx';
import Test from './pages/test/index.jsx';
import Fail from './pages/fail/index.jsx';
import Success from './pages/success/index.jsx';
import Detail from './pages/detail/index.jsx';
import Search from './pages/search/index.jsx'
import Scan from './pages/scan/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/success" element={<Success />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home/search" element={<Search />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </Router>
  );
}

export default App;
