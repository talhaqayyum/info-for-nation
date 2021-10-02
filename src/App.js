import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsDashboard from './services/news/newsDashboard'
import MainPage from './mainPage';
import Dictionary from './services/dictionary';
import Home from './services/corona/Home'
import Stats from './services/corona/Stats'
import Map from './services/corona/Map'

function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <MainPage />
        </div>
        <Route exact path="/news" component={NewsDashboard} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/covid/Home" component={Home} />
        <Route path="/covid/Stats" component={Stats} />
        <Route path="/covid/Map" component={Map} />
      </Router>
    </div>
  );
}

export default App;
