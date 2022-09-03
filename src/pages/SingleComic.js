import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SingleComic() {
  const { state } = useLocation();
  const comic = state;

  return (
    <div>
      {comic.char.title}
      {comic.char.description}
    </div>
  );
}
