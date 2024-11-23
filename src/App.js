import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatedRoutes />
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/start" element={<Start />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;