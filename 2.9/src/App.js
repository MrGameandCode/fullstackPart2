import { useState } from 'react'

const Persons = (person) => {
  return(
    <p>
      {person.name} {person.number}
    </p>
  )
}

const Filter = (props) => {
  const persons = props.persons
  const filter = props.filter
  if(filter){
    return(
      persons.filter(person => person.name.includes(filter)).map((person,i) =>
        <Persons key={i} name={person.name} number={person.number}/>
      )
    )
  } else{
    return(
      persons.map((person,i) =>
        <Persons key={i} name={person.name} number={person.number}/>
      )
    )
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const ChangeNewName = (event) => {
    setNewName(event.target.value);
  }

  const ChangeNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
  
  const ChangeFilter = (event) => {
    setFilter(event.target.value);
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
      <div>
        filter shown with <input onChange={ChangeFilter} value={filter}/>
      </div>
      <h2>Add a new</h2>
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
      <Filter persons={persons} filter={filter}></Filter>
    </div>
  )
}

export default App