import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const Results = (props) =>{
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
    const languages = filteredCountries[0].languages
    const arrayLanguages = []
    for (var key in languages) {
      arrayLanguages.push(languages[key]);
    }
    return(
      <div>
        <p>Capital: {filteredCountries[0].capital}</p>
        <p>Area: {filteredCountries[0].area}</p>
        <p>Languages</p>
        <ul>
          {arrayLanguages.map((language,i) => <li key={i}>{language}</li>)}
        </ul>
        <p className="Flag">{filteredCountries[0].flag}</p>
      </div>
    )
  } else{
    return(
      <div>
        {filteredCountries.map(country=><p key={country.cca2}>{country.name.common}</p>)}
      </div>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState([]) 

  const changeFilter = (event) =>{
    setFilter(event.target.value);
    console.log(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        console.log("Countries loaded")
      })
  }, [])

  return(
    <>
      <div>
        Find countries: <input onChange={changeFilter} value={filter} />
      </div>
      <Results countries={countries} filter={filter}></Results>
    </>
  )
}

export default App