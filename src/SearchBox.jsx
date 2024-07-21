import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import "./SearchBox.css"
function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL =
    "http://api.openweathermap.org/data/2.5/weather";
  let API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
   try {
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse = await response.json();
     
     let result ={
       city: city,
         temp: jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description
     }
     console.log(result);
     return result
   } catch (error) {
    throw error
   }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (evt) => {
   try {
     evt.preventDefault();
     console.log(city);
     setCity("");
    let info= await getWeatherInfo();
    updateInfo(info)
    setError(false); // Reset error state on successful fetch
   } catch (error) {
    setError(true)
   }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search <SearchIcon  className="searchButton" />
        </Button>
        {error && <p style={{color:"red"}} >No such place exist!</p> }
      </form>
    </div>
  );
}

export default SearchBox;
