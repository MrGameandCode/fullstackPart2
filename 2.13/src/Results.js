import CountryDetails from './CountryDetails'
import {useState} from 'react'

import './Results.css'

const Results = (props) =>{
  const [countries, setCountries] = useState(props.countries) 
  const [selectedCountry, setSelectedCountry] = useState('') 

  const ShowCountry = (props) =>{
    setSelectedCountry(props)
  }
    if(props.filter.length === 0){
      return(
        <div>
          <p>Please, enter a filter to find countries.</p>
        </div>
      )
    }
    const filteredCountries = props.countries.filter(country => country.name.common.toLowerCase().includes(props.filter.toLowerCase()));
    if(filteredCountries.length === 0){
      return(
        <div>
          <p>No countries found!</p>
        </div>
      )
    } else if(filteredCountries.length > 10){
      return(
        <div>
          <p>Too many countries, specify another filter.</p>
        </div>
      )
    } else if(filteredCountries.length === 1){
        console.log(filteredCountries[0]);
        return(
            <CountryDetails country={filteredCountries[0]}></CountryDetails>
        )
    } else{
      return(
        <div>
          {filteredCountries.map(country=><p key={country.cca2}>{country.name.common} <button onClick={() => ShowCountry(country)}>Show</button></p>)}
          <CountryDetails country={selectedCountry}></CountryDetails>
        </div>
      )
    }
  }

export default Results