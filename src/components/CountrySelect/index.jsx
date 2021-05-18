import React from 'react';
import { Link } from 'react-router-dom';

export const CountrySelect = () => {
  return (
    <>
      <h1>Výber země</h1>
      <ul>
        <li>
          <Link to="detail-zeme/argentina">Argentina</Link>
        </li>
        <li>
          <Link to="detail-zeme/bhutan">Bhutan</Link>
        </li>
      </ul>
    </>
  );
};
