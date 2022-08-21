import React, { useEffect, useState } from 'react';
import axios from 'axios';

const hash = 'af05cbeffabc192e13f2c39fed8e8c87';

const publicKey = '6735dc87e02eb6a2654a69e50aea46b5';

export default function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&limit=10`
      );

      setApiData(response.data.data.results);
    }
    getData();
  }, []);

  const charElement = apiData.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <img
          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          alt='hero'
        />
      </div>
    );
  });
  return <div>{charElement}</div>;
}
