import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      <h2>CountriesList</h2>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <Link to={`/country/${country.alpha3Code}`}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="imagenPais"
            />
            <br />
            {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
