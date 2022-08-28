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
            <Link to='/comics'>Comics</Link>
          </li>
          <li>
            <Link to='/characters?page=1'>Characters</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
