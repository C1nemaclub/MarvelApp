import React, { useEffect, useState } from 'react';
import '../styles/Home/home.scss';

export default function Home() {
  return (
    <div className='page home-page'>
      <div className='hero'>
        <h1>SEARCH FOR YOUR FAVORITE MARVEL CHARACTERS</h1>
        <button className='btn btn-primary'>
          <a href='/characters?page=1'>Explore</a>
        </button>
      </div>
    </div>
  );
}
