import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import OurPractice from './components/OurPractice/OurPractice';
import Services from './components/Services/Services';
import NewClients from './components/NewClients/NewClients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
        
    <Router>
      <Nav />
        <nav>
          <ul>
            <li>
              <Link to="/ourpractice">I. Our Practice</Link>
            </li>
            <li>
            <Link to="/services">II. Services</Link>
            </li>
            <li>
              <Link to="/new-clients">III. New Clients</Link>
            </li>
            <li>
              <Link to="/contact">IV. Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/ourpractice/" component={OurPractice} />
            <Route path="/services/" component={Services} />
            <Route path="/new-clients/" component={NewClients} />
            <Route path="/contact/" component={Contact} />
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;
