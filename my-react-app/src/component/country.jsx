import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
       const newVisited = !visited;
       setVisited(newVisited)
        handleVisitedCountries(country, newVisited)
    }



    return (

        <div className={`card ${visited && 'visited'} `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.official} </p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited }>
                {
                    visited ? 'Visited' : 'Not Visited'
                }
            </button>
        </div>

    );
};

export default Country;