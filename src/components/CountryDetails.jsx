import { useParams } from "react-router-dom";

function CountryDetails({countries}) {
    const countryId = useParams();
    const looking = countries.find((pais) => pais.alpha3Code === countryId.alpha3Code);

    return (
        <div>
        <h2>{`${looking.name.common}'s details`}</h2>
        {!looking && <h3>Country not found!</h3>}
        {looking && (
            <>
            <h3>Capital: {looking.capital}</h3>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${looking.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            </>
        )}    
        </div>
    );
}

export default CountryDetails;