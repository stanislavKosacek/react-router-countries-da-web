import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const CountryDetail = () => {
  const { name } = useParams();

  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((json) => {
        setCountry(json.pop());
      });
  }, []);

  return (
    <>
      <h1>Detail země: {name}</h1>
      <div>
        <p>
          <strong>Počet obyvatel:</strong> {country ? country.population : null}
        </p>
      </div>
    </>
  );
};
