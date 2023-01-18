import { useState, useEffect } from 'react'
import axios from 'axios'


const WeatherDetails = (props) => {
    const [weather, setWeather] = useState([]) 
    const [weather_icon, setWeatherIcon] = useState('') 
    const [weather_alt_icon, setWeatherAltIcon] = useState('') 
    const api_key = process.env.REACT_APP_API_KEY
    const lat = props.country.latlng[0]
    const lon = props.country.latlng[1]
    
    useEffect(() => {
        function getWeatherData(){
            axios
            .get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+api_key)
            .then(response => {
            setWeather(response.data)
            setWeatherIcon("https://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png")
            setWeatherAltIcon(response.data.weather[0].description)
            console.log(response.data)
            })
        }
        getWeatherData()
    }, [lat,lon,api_key])
  
    if(weather.length === 0){
        return (
            <div>
                <h2>Weather in </h2>
                <p>Temperature: </p>
                <p>Wind: </p>
            </div>
        )
    } else{
        return (
            <div>
                <h2>Weather in {props.country.capital}</h2>
                <p>Temperature: {(weather.main["temp"] - 273,15)} Celsius</p>
                <p><img src={weather_icon} alt={weather_alt_icon}></img></p>
                <p>Wind: {weather.wind["speed"]} m/s</p>
            </div>
        )
    }
    
}

export default WeatherDetails