import React, { use, useState } from 'react';
import Country from './country';
const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country, newVisited) => {

        if (newVisited === true) {
            setVisitedCountries([...visitedCountries, country])
        } else {
            setVisitedCountries(
                visitedCountries.filter((c) => c.cca3 !== country.cca3)
            );
        }


    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h3>I visited: {visitedCountries.length}  Countries</h3>
            <div className='card-container'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
