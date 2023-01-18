import WeatherDetails from './WeatherDetails'

const CountryDetails = (props) => {
  
    if(props.country.length === 0){
      return (<></>)
    }
    const languages = props.country.languages
    const arrayLanguages = []
    for (var key in languages) {
    arrayLanguages.push(languages[key]);
    }
    
    return(
        <div>
          <p>Capital: {props.country.capital}</p>
          <p>Area: {props.country.area}</p>
          <p>Languages</p>
          <ul>
            {arrayLanguages.map((language,i) => <li key={i}>{language}</li>)}
          </ul>
          <p className="Flag">{props.country.flag}</p>
          <WeatherDetails country={props.country}></WeatherDetails>
        </div>
    )
}

export default CountryDetails