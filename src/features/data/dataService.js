import axios from 'axios';
const hash = 'af05cbeffabc192e13f2c39fed8e8c87';

const publicKey = '6735dc87e02eb6a2654a69e50aea46b5';

const getCharacters = async () => {
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&limit=10`
  );

  return response.data.data.results;
};

const dataService = {
  getCharacters,
};

export default dataService;
