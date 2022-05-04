import React from 'react';

export default function Status({ setStat }) {
  return (
    <article>
      <select onChange={(e) => setStat(e.target.value)}>
        <option value="Alive">Sort by Alive</option>
        <option value="Dead">Sort by Dead</option>
      </select>
    </article>
  );
}
