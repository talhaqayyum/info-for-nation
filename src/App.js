import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsDashboard from './services/news/newsDashboard'
import MainPage from './mainPage';
import Dictionary from './services/dictionary';




function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <MainPage />
        </div>
        <Route path="/news" component={NewsDashboard} />
        <Route path="/dictionary" component={Dictionary} />
      </Router>
    </div>
  );
}

export default App;
