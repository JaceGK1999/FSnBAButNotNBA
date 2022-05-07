import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/';
import CharacterCard from '../components/Charecters';
import Status from '../components/Filter';
import { fetchRnM } from '../services/fetch';

export default function Main() {
  const [char, setChar] = useState([]);
  const [stat, setStat] = useState('Alive');
  const [load, setLoad] = useState(true);
  const { url, path } = useRouteMatch();

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
              <a href={`${url}/${item.id}`}>
                Name: {item.name} ({item.status})
              </a>
            </div>
          </article>
        ))}
        <Route path={`${path}/:id`}>
          <CharacterCard />
        </Route>
      </>
    </>
  );
}
