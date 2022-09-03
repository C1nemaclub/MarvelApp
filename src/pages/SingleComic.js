import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SingleComic/comic.scss';

export default function SingleComic() {
  const { state } = useLocation();
  const comic = state;

  return (
    <>
      <div className='page char-page'>
        <div className='content'>
          <div className='left'>
            <img
              src={`${comic.char.thumbnail.path}.${comic.char.thumbnail.extension}`}
              alt=''
            />
          </div>
          <div className='right'>
            <h1>{comic.char.title}</h1>
            {comic.char.description == '' ? (
              <p>No description available for this comic</p>
            ) : (
              <p>{comic.char.description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
