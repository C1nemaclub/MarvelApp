import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../features/data/dataSlice';

export default function About() {
  const dispatch = useDispatch();

  const { chars, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.chars
  );
  console.log(chars);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  if (isLoading) {
    return <h1>Cargando....</h1>;
  }

  return (
    <>
      <h1>About</h1>
      {chars.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt='hero'
            />
          </div>
        );
      })}
    </>
  );
}
