const Person = (person) => {
    return (
        <p>
            {person.name} {person.number}
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
            persons.map((person, i) =>
                <Person key={i} name={person.name} number={person.number} />
            )
        )
    }
}

export default Persons