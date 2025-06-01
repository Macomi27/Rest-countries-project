import React from "react";
import { FaSearch } from "react-icons/fa";
import './search.css'

const Search = () => {
  return (
    <section className="search">
        <div className="search-content">
        <div className="search-box">
            <FaSearch className="search-icon" />
          <input type="text" className="search-input" placeholder="Search for a country..." />
        </div>
        <div className="filter">
          <select>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          </div>
          </div>
    </section>
  );
}
export default Search;