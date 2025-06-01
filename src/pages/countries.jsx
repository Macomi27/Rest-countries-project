import React from "react";
import Header from "../components/header";
import Search from "../components/search";
import CountryList from "../components/countryList";
import './countries.css'

const Countries = () => {
  return (
    <div className="countries">
      <Header />
      <Search />
      <CountryList />
    </div>
  );
}
export default Countries;