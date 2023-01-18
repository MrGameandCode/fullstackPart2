import { useState } from 'react'

const Persons = (person) => {
  return(
    <p>
      {person.name}
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const ChangeNewName = (event) => {
    setNewName(event.target.value);
  }

  const SubmitPerson = (event) =>{
    event.preventDefault();
    if(newName.length !== 0){
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson));
      setNewName('');
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i) =>
          <Persons key={i} name={person.name} />
      )}
    </div>
  )
}

export default App