import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReportsContainer from './containers/ReportsContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/reports" component={ReportsContainer} />
      </div>
    </Router>
  );
}

export default App;
