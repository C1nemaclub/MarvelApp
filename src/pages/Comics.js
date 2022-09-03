import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharCard from '../components/CharCard';
import { getCharacters, searchCharacter } from '../features/data/dataSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/Comics/comics.scss';

export default function Comics() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [searchComics, setsearchComics] = useState({ comicName: '' });

  function onChange(e) {
    const { name, value } = e.target;
    console.log(value);

    setsearchComics((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

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

  function onSearch(e) {
    e.preventDefault();
    const requestParameters = {
      type: 'comics',
      characterName: searchComics.comicName,
    };
    if (searchComics.comicName === '') {
      dispatch(getCharacters());
      return;
    }
    dispatch(searchCharacter(requestParameters));
    setsearchComics({ comicName: '' });
  }

  function viewComic(comic) {
    navigate(`/comics/${comic.id}`, { state: { char: comic } });
  }
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
      <div className='page comics-page'>
        <div className='content'>
          <div className='form-container'>
            <form onSubmit={(e) => onSearch(e)}>
              <input
                type='search'
                name='comicName'
                placeholder='Search Comic'
                onChange={(e) => onChange(e)}
                value={searchComics.comicName}
              />
              <button>Search</button>
            </form>
          </div>
          <h1>Comics</h1>
          <div className='card-grid'>{charCards}</div>
        </div>
      </div>
    </>
  );
}
