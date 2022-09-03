import axios from 'axios';
const hash = 'af05cbeffabc192e13f2c39fed8e8c87';

const publicKey = '6735dc87e02eb6a2654a69e50aea46b5';

const getCharacters = async (requestParameters) => {
  const offset = requestParameters.currentPage * 100;
  const type = requestParameters.type;

  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/${type}?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${offset}`
  );

  const rawCharacters = response.data.data.results;
  const filteredCharacters = rawCharacters.filter((item) => {
    return !item.thumbnail.path.includes('not_available'); // Dont include chars without an image
  });

  return filteredCharacters;
};

const getSingleCharacter = async (charId) => {
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters/${charId}?ts=1&apikey=${publicKey}&hash=${hash}`
  );

  return response.data.data.results;
};

const searchCharacter = async (requestParameters) => {
  const query = requestParameters.characterName;
  const type = requestParameters.type;
  const nameOrTitle = type === 'characters' ? 'name' : 'title';

  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/${type}?ts=1&apikey=${publicKey}&hash=${hash}&${nameOrTitle}StartsWith=${query}`
  );

  return response.data.data.results;
};

const dataService = {
  getCharacters,
  getSingleCharacter,
  searchCharacter,
};

export default dataService;
