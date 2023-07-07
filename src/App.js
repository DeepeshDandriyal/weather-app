import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6cbfe909034d4279ac35500612e9e4f6`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          className="input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="bold">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p className="bold">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>
        <div className="bottom ">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like}°C</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}mph</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// api key
// 6cbfe909034d4279ac35500612e9e4f6
