import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import axios from 'axios';

export default function App() {
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  const [cities, setCities] = useState([]);
  // console.log(cities, "addCities State");
  async function onSearch(ciudad) {
    try {
      const jsonCity = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      );

      const cityData = jsonCity.data;

      if (cityData.main !== undefined) {
        const ciudad = {
          min: Math.round(cityData.main.temp_min),
          max: Math.round(cityData.main.temp_max),
          img: cityData.weather[0].icon,
          id: cityData.id,
          wind: cityData.wind.speed,
          temp: cityData.main.temp,
          name: cityData.name,
          weather: cityData.weather[0].main,
          clouds: cityData.clouds.all,
          latitud: cityData.coord.lat,
          longitud: cityData.coord.lon
          
        };

        const cityId = ciudad.id;
        if (!cities.find(e => e.id === cityId)) setCities(state => [...state, ciudad]);
      } else { alert("found city") }

    } catch (error) {
      console.log(error)
    }
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}