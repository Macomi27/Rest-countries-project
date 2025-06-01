import React from "react";
import './countryList.css';
import usaFlag from '../assets/usa.png'
import brazilFlag from '../assets/brazil.png'
import icelandFlag from '../assets/iceland.png'
import afghanistanFlag from '../assets/afghanistan.png'
import alislandFlag from '../assets/aland-island.png'
import albaniaFlag from '../assets/albania.png'
import algeriaFlag from '../assets/algeria.png'
import germanyFlag from '../assets/germany.png'; // Example flag image

const CountryList = ({ countries }) => {
  return (
    <section className="country-list">
      {/* <div className="country-list-content">
        {countries.map((country) => (
          <div className="country-card" key={country.name.common}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <div className="country-info">
              <h3>{country.name.common}</h3>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="countries-boxes">
        <div className="country-content germany">
            <div className="flag">
                <img src={germanyFlag} alt="germany flag" />
            </div>
            <div className="country-info">
                <h5>Germany</h5>
                <p>Population: 81,770,900</p>
                <p>Region: Europe</p>
                <p>Capital: Berlin</p>
            </div>
        </div>
        <div className="country-content usa">
            <div className="flag">
                <img src={usaFlag} alt="usa flag" />
            </div>
            <div className="country-info">
                <h5>United States of America</h5>
                <p>Population: 323,947,000</p>
                <p>Region: Americas</p>
                <p>Capital: Washington, D.C.</p>
            </div>
        </div>
        <div className="country-content brazil">
            <div className="flag">
                <img src={brazilFlag} alt="brazilian flag" />
            </div>
            <div className="country-info">
                <h5>Brazil</h5>
                <p>Population: 206,135,893</p>
                <p>Region: Americas</p>
                <p>Capital: Brasilia</p>
            </div>
        </div>
        <div className="country-content iceland">
            <div className="flag">
                <img src={icelandFlag} alt="iceland flag" />
            </div>
            <div className="country-info">
                <h5>Iceland</h5>
                <p>Population: 334,300</p>
                <p>Region: Europe</p>
                <p>Capital: Reykjavik</p>
            </div>
        </div>
        <div className="country-content afghanistan">
            <div className="flag">
                <img src={afghanistanFlag} alt="afghanistan flag" />
            </div>
            <div className="country-info">
                <h5>Afghanistan</h5>
                <p>Population: 27,657,145</p>
                <p>Region: Asia</p>
                <p>Capital: Kabul</p>
            </div>
        </div>
        <div className="country-content alisland">
            <div className="flag">
                <img src={alislandFlag} alt="aland islands flag" />
            </div>
            <div className="country-info">
                <h5>Aland Islands</h5>
                <p>Population: 28,875</p>
                <p>Region: Europe</p>
                <p>Capital: Mariahamn</p>
            </div>
        </div>
        <div className="country-content albania">
            <div className="flag">
                <img src={albaniaFlag} alt="albanian flag" />
            </div>
            <div className="country-info">
                <h5>Albanian</h5>
                <p>Population: 2,886,026</p>
                <p>Region: Europe</p>
                <p>Capital: Tirana</p>
            </div>
        </div>
        <div className="country-content algeria">
            <div className="flag">
                <img src={algeriaFlag} alt="algerian flag" />
            </div>
            <div className="country-info">
                <h5>Algeria</h5>
                <p>Population: 40,400,000</p>
                <p>Region: Africa</p>
                <p>Capital: Algiers</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default CountryList;