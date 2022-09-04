import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home/home.scss';

export default function Home() {
  return (
    <div className='page home-page'>
      <div className='hero'>
        <h1>SEARCH FOR YOUR FAVORITE MARVEL CHARACTERS</h1>
        <button className='btn btn-primary'>
          <Link to='/characters?page=1'>Explore</Link>
        </button>
      </div>
    </div>
  );
}
