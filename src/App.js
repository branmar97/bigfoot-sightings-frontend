import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReportFormContainer from './containers/ReportFormContainer';
import ReportsContainer from './containers/ReportsContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ReportFormContainer />
        <ReportsContainer />
      </div>
    </Router>
  );
}

export default App;
