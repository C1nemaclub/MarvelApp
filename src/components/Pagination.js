import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination(props) {
  const pageNumbers = [];
  const charsPerPage = 100;
  const pageCount = Math.ceil(props.totalCharacters / charsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
  const pageItems = pageNumbers.map((number) => {
    return (
      // <li key={number} onClick={() => props.changePage(number)}>
      //   <a href={`characters?page=${number}`}>{number}</a>
      // </li>
      <Link
        key={number}
        onClick={() => props.changePage(number)}
        to={`/characters?page=${number}`}
      >
        {number}
      </Link>
    );
  });

  return (
    <>
      <ul className='pagination'>{pageItems}</ul>
    </>
  );
}
