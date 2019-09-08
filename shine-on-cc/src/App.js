import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Services from './components/Services/Services';
import Legal from './components/Legal/Legal';
import Fees from './components/Fees/Fees';
import EC from './components/EC/EC';

function App() {
  return (
    <div className="App">
        <Nav />
        <EC />
        <About />
        <Services />
        <Legal />
        <Fees />
    </div>
  );
}

export default App;
