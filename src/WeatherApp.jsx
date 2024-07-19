import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]= useState({
        city: "Varanasi",
        feelslike: 41.05 ,
        temp: 34.05,
tempMin: 34.05,
tempMax: 34.05,
humidity: 75,
weather: "haze"
    });
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo)

    }
    return(
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}