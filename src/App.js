import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Resume from './components/resume/resume.jsx';
import Contact from './components/contact/contact.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import homeStyle from './components/home/home.module.scss';

import './App.scss';

const App = () => {

  return (
    <div className="App">
      <ScrollToTop >
        <Switch>
          <Route exact path='/' render={() => 
          <div className={homeStyle.home}>
            <Home cText={['DEVELOPER']} />
          </div>} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </ScrollToTop>
    </div>
  )
}

export default App;