import React from 'react';
import { Switch, Route } from "react-router-dom";

// import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Resume from './components/resume/resume.jsx';
import Contact from './components/contact/contact.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import bgImage from './images/img5.jp2';

import './App.scss';

const App = () => {

  return (
    <div className="App">
      {/* <Header /> */}
      <ScrollToTop >
        <Switch>
          <Route exact path='/' render={() => <Home cText={['DEVELOPER']} bgImage={bgImage}/>} />
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