import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Work from './pages/Work';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
