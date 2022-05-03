import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReportsContainer from './containers/ReportsContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="mt-20 pl-60 pr-60 flex items-center justify-center">
        <ReportsContainer />
      </div>
    </Router>
  );
}

export default App;
