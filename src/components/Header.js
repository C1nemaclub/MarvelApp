import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header/index.css';

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname='active' to='/MarvelApp'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/characters?page=1'>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/comics'>
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
