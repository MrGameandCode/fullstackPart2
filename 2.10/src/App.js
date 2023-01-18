import { useState } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'



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
      <Filter change={ChangeFilter} value={filter}></Filter>
      <h2>Add a new</h2>
      <PersonForm submit={SubmitPerson} changename={ChangeNewName} name={newName} changenumber={ChangeNewNumber} number={newNumber}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}></Persons>
    </div>
  )
}

export default App