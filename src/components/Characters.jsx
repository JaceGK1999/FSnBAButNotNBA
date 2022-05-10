import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchID } from '../services/FetchById';

export default function CharacterCard() {
  const { id } = useParams();
  const [char, setChar] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      const info = await fetchID(id);
      setChar(info);
    };
    fetchCharacter();
  }, [id]);

  return (
    <article>
      <img alt={`${char.name}`} src={char.image} />
      <h1 aria-label='headerSize1'>Name: {char.name}</h1>
      <h3 aria-label='headerSize3'>
        Specifics: {char.gender} {char.species}
      </h3>
    </article>
  );
}
