import { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonData from './services/PersonData'



const App = () => {
  const [persons, setPersons] = useState([]) 
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

  useEffect(() => {
    PersonData.getAll().then(response => {
        setPersons(response.data)
      })
  }, [])

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
        SavePerson(newPerson)
      }
    }
  }

  const SavePerson = (newPerson) => {
    PersonData.create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          console.log("Contact saved!")
          setNewName('');
          setNewNumber('');
        })
  }

  const DeletePerson = (person) => {
    if(window.confirm("Delete " + person.name + "?")){
      PersonData.remove(person.id)
        .then(response => {
        setPersons(persons.filter(function( stored ) {
          return stored.id !== person.id;
        }))
        console.log("Contact deleted!")
      })
    }
    
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter change={ChangeFilter} value={filter}></Filter>
      <h2>Add a new</h2>
      <PersonForm submit={SubmitPerson} changename={ChangeNewName} name={newName} changenumber={ChangeNewNumber} number={newNumber}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} delete={DeletePerson}></Persons>
    </div>
  )
}

export default App