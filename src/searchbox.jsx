import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Infobox from "./infobox";  // import your Infobox component

export default function Searchbox() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;

  const getweatherinfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonresponse = await response.json();

      return {
        city: city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        Humidity:jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      alert("Failed to fetch weather data. Please check your city name and try again.");
      return null;
    }
  };

  const handlechange = (e) => setCity(e.target.value);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!city) return;
    const info = await getweatherinfo();
    if (info) {
      setWeatherInfo(info);
      setCity("");
    }
  };

  return (
    <div className="searchbox">
      <h3>Search the weather</h3>
      <form onSubmit={handlesubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          value={city}
          required
          onChange={handlechange}
        />
        <br />
        <br />
        {/* Render Infobox with fetched info */}
      {weatherInfo && <Infobox info={weatherInfo} />}
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      
    </div>
  );
}
