import { useState } from 'react'

const Persons = (person) => {
  return(
    <p>
      {person.name} {person.number}
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const ChangeNewName = (event) => {
    setNewName(event.target.value);
  }

  const ChangeNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const SubmitPerson = (event) =>{
    event.preventDefault();
    if(newName.length !== 0 || newNumber.length !== 0){
      if(persons.filter(person => person.name === newName).length !== 0){
        alert(`${newName} is already added to phonebook`)
      } else if(persons.filter(person => person.number === newNumber).length !== 0){
        alert(`${newNumber} is already added to phonebook`)
      } else{
        const newPerson = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      }
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={SubmitPerson}>
        <div>
          name: <input onChange={ChangeNewName} value={newName}/>
        </div>
        <div>
          number: <input onChange={ChangeNewNumber} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i) =>
          <Persons key={i} name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App