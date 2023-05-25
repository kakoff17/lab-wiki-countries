import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const params = useParams();
  const [details, setDetails] = useState(null);

    // usar useEffect para encontrar el pais que coincida con el parametro de alpha3code de la URL
  useEffect(() => {
    const country = countries.find(
      (country) => country.alpha3Code === params.alpha3code
    );

    // una vez encuentra el pais actualiza el estado
    setDetails(country);
  }, [params.alpha3code, countries]);

  if (!details) {
    return <div>Intentando cargar pais...</div>;
  }

  // busca el nombre de un pais en base a su alpha3code
  const getCountryName = (alpha3Code) => {
    const country = countries.find(
      (country) => country.alpha3Code === alpha3Code
    );
    return country ? country.name.common : "";
  };

  return (
    <div>
      <h2>Pais</h2>
      <div className="col-7">
        <img          
          src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}
          alt="imagenPais"
        />
        <h1>{details.name.common}</h1>
        <table className="table" align='center'>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{details.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {details.area} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {details.borders.map((eachBorder) => (
                    <li key={eachBorder}>
                      <Link to={`/country/${eachBorder}`}>
                        {getCountryName(eachBorder)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;