import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Recent from './pages/Recent';
import About from './pages/About';
import SingleCharacter from './pages/SingleCharacter';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recent' element={<Recent />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<SingleCharacter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
