import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/Character/character.scss';

export default function SingleCharacter() {
  const { id } = useParams();

  const { state } = useLocation();
  const char = state;

  return (
    <>
      <div className='page char-page'>
        <div className='content'>
          <div className='left'>
            <img
              src={`${char.char.thumbnail.path}.${char.char.thumbnail.extension}`}
              alt=''
            />
          </div>
          <div className='right'>
            <h1>{char.char.name}</h1>
            {char.char.description == '' ? (
              <p>No description available for this character</p>
            ) : (
              <p>{char.char.description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
