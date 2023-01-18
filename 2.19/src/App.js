import { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonData from './services/PersonData'

import './App.css'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  

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

  const Notification = ({ message }) => {
    if (!message) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }
  
  const SubmitPerson = (event) => {
    event.preventDefault();
    if (newName.length !== 0 || newNumber.length !== 0) {
      if (persons.filter(person => person.name === newName).length !== 0) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
          const personFound = persons.filter(person => person.name === newName);
          const newPerson = { ...personFound[0], number: newNumber }
          UpdatePerson(newPerson)
        }
      } else if (persons.filter(person => person.number === newNumber).length !== 0) {
        alert(`${newNumber} is already added to phonebook`)
      } else {
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
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage('')
        }, 5000)
      })
  }

  const DeletePerson = (person) => {
    if (window.confirm("Delete " + person.name + "?")) {
      PersonData.remove(person.id)
        .then(response => {
          setPersons(persons.filter(function (stored) {
            return stored.id !== person.id;
          }))
          console.log("Contact deleted!")
          setMessage(`Deleted ${person.name}`)
          setTimeout(() => {
            setMessage('')
          }, 5000)
        })
    }
  } 
  const UpdatePerson = (person) => {
    PersonData.update(person.id, person)
      .then(response => {
        const newPersons = persons.filter(function (stored) {
          return stored.id !== person.id;
        })
        setPersons(newPersons.concat(person))
        console.log("Contact updated!")
        setMessage(`Updated ${person.name}`)
        setTimeout(() => {
          setMessage('')
        }, 5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}></Notification>
      <Filter change={ChangeFilter} value={filter}></Filter>
      <h2>Add a new</h2>
      <PersonForm submit={SubmitPerson} changename={ChangeNewName} name={newName} changenumber={ChangeNewNumber} number={newNumber}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} delete={DeletePerson}></Persons>
    </div>
  )
}

export default App