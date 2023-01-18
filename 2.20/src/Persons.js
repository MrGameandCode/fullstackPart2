const Person = (person) => {
    return (
        <p>
            {person.name} {person.number} <input type="button" value="delete" onClick={() => person.delete(person)} />
        </p>
    )
}

const Persons = (props) => {
    const persons = props.persons
    const filter = props.filter
    if (filter) {
        return (
            persons.filter(person => person.name.includes(filter)).map((person, i) =>
                <Person key={i} name={person.name} number={person.number} />
            )
        )
    } else {
        return (
            persons.map((person) =>
                <Person key={person.id} name={person.name} number={person.number} id={person.id} delete={props.delete}/>
            )
        )
    }
}

export default Persons