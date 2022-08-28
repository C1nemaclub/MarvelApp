import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharCard from '../components/CharCard';
import { getCharacters, searchCharacter } from '../features/data/dataSlice';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Comics() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const { chars, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.chars
  );

  useEffect(() => {
    const requestParameters = {
      currentPage: currentPage,
      type: 'comics',
    };
    dispatch(getCharacters(requestParameters));
  }, []);

  function viewComic() {}
  const charCards = chars.map((item) => {
    return (
      <CharCard
        key={item.id}
        name={item.title}
        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        handleClick={() => viewComic(item)}
        isLoading={isLoading}
      />
    );
  });

  if (isLoading) {
    return <div className='loader'></div>;
  }

  return (
    <>
      <h1>Comics</h1>
      <div className='card-grid'>{charCards}</div>
    </>
  );
}
