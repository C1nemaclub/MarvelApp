import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getCharacters,
  getSingleCharacter,
  searchCharacter,
} from '../features/data/dataSlice';
import CharCard from '../components/CharCard';
import '../styles/About/index.css';
import Pagination from '../components/Pagination';

export default function Characters() {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { chars, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.chars
  );

  const [totalChars, setTotalChars] = useState(1562);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchChar, setSearchChar] = useState({ charName: '' });
  const [showPagination, setShowPagination] = useState(true);

  function onChange(e) {
    const { name, value } = e.target;

    setSearchChar((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    const requestParameters = {
      currentPage: currentPage,
      type: 'characters',
    };
    dispatch(getCharacters(requestParameters));
    setShowPagination(true);
  }, [currentPage]);

  function viewCharacter(character) {
    navigate(`/characters/${character.id}`, { state: { char: character } });
  }

  const charCards = chars.map((item) => {
    return (
      <CharCard
        key={item.id}
        name={item.name}
        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        handleClick={() => viewCharacter(item)}
        isLoading={isLoading}
      />
    );
  });

  function onSearch(e) {
    e.preventDefault();
    if (searchChar.charName === '') {
      dispatch(getCharacters());
      setShowPagination(true);
      return;
    }
    dispatch(searchCharacter(searchChar.charName));
    setShowPagination(false);
    setSearchChar({ charName: '' });
  }

  function changePage(page) {
    setCurrentPage(page);
  }
  if (isLoading) {
    return <div className='loader'></div>;
  }
  return (
    <>
      <div className='page about-page'>
        <h1>About</h1>
        {msg && <p>{msg}</p>}
        <div className='form-container'>
          <form onSubmit={(e) => onSearch(e)}>
            <input
              type='search'
              name='charName'
              placeholder='Search Character'
              onChange={(e) => onChange(e)}
              value={searchChar.charName}
            />
            <button>Search</button>
          </form>
        </div>
        {showPagination && (
          <Pagination totalCharacters={totalChars} changePage={changePage} />
        )}
        {chars.length === 0 && (
          <h2 style={{ color: 'white' }}>
            Not Characters Found under {searchChar.charName}
          </h2>
        )}
        <div className='card-grid'>{charCards}</div>
      </div>
    </>
  );
}
