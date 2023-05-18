
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavBarComponent from './components/NavBarComponent';









function App() {
  return (
   
    <>
    <NavBarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  
  );
  
}

export default App;
