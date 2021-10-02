import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsDashboard from './services/news/newsDashboard'
import MainPage from './mainPage';
import Dictionary from './services/dictionary';
import CovidMain from './services/corona/main'



function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <MainPage />
        </div>
        <Route path="/news" component={NewsDashboard} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/covid" component={CovidMain} />
      </Router>
    </div>
  );
}

export default App;
