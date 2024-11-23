import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/splash/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} />
      </Switch>
    </Router>
  );
}

export default App;