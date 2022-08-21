import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCharacters, getSingleCharacter } from '../features/data/dataSlice';
import CharCard from '../components/CharCard';
import '../styles/About/index.css';

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { chars, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.chars
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  function viewCharacter(charId) {
    // dispatch(getSingleCharacter(charId));
    navigate(`/about/${charId}`, { state: { char: charId } });
  }

  if (isLoading) {
    return <h1>Cargando....</h1>;
  }

  const charCards = chars.map((item) => {
    return (
      <CharCard
        key={item.id}
        name={item.name}
        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        handleClick={() => viewCharacter(item)}
      />
    );
  });

  return (
    <>
      <div className='page about-page'>
        <h1>About</h1>
        <div className='card-grid'>{charCards}</div>
      </div>
    </>
  );
}
