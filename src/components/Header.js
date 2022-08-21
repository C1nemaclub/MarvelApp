import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header/index.css';

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/recent'>Recent</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
