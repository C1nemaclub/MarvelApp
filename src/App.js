import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Comics from './pages/Comics';
import Characters from './pages/Characters';
import SingleCharacter from './pages/SingleCharacter';
import SingleComic from './pages/SingleComic';
import './styles/Layout/layout.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comics'>
            <Route index element={<Comics />} />
            <Route path=':id' element={<SingleComic />} />
          </Route>
          <Route path='/characters'>
            <Route index element={<Characters />} />
            <Route path=':id' element={<SingleCharacter />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
