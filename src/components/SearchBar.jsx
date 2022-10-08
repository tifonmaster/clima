import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  }

  return (
    <div className="containerSearchBar">
      <div className="title">
        <h1>Climate Finder</h1>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input className="inputStyle" type="text" placeholder="Ciudad..." onChange={(e) => handleInputChange(e)} />
        <button className="btn-container" type="submit">Search</button>
      </form>
    </div>
  );
}