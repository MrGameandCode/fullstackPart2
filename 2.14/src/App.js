import { useState, useEffect } from 'react'
import axios from 'axios'

import Results from './Results'


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