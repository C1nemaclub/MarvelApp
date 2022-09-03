import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function SingleCharacter() {
  const { id } = useParams();

  const { state } = useLocation();
  const char = state;
  return (
    <>
      <h1>Single Character</h1>
      <h2>{char.char.name}</h2>
      <p>{char.char.description}</p>
    </>
  );
}
