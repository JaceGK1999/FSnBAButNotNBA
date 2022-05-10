import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom/';
import CharacterCard from '../components/Characters';
import Status from '../components/Filter';
import { fetchRnM } from '../services/fetchChars.jsx';

export default function Main() {
  const [char, setChar] = useState([]);
  const [stat, setStat] = useState('Alive');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const results = await fetchRnM(stat);
      setChar(results);
      setLoad(false);
    };
    fetchApi();
  }, [stat]);

  if (load) return <h1>Loading Pickle Ricks</h1>;

  return (
    <>
      <div>
        <Status setStat={setStat} />
      </div>
      <>
        {char.map((item) => (
          <article key={item.id}>
            <div>
              <a href={`${item.id}`}>
                Name: {item.name} ({item.status})
              </a>
            </div>
          </article>
        ))}
        <BrowserRouter>
          <Route path={'/:id'}>
            <CharacterCard />
          </Route>
        </BrowserRouter>
      </>
    </>
  );
}
