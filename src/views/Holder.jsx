import React from 'react';
import { Link } from 'react-router-dom';

export default function Holder() {
  return (
    <>
      <div>
        <Link to={`/char`}>Main</Link>
      </div>
    </>
  );
}
