import { Link } from 'react-router-dom';

function CountriesList({ countries }) {

  return (
    <div className="list">
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <Link to={`countries/${country.alpha3Code}`}>
              <p>{country.name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
