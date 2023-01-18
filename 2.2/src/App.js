import './App.css'

const Course = (props) =>{
  return(
    <div>
      <Header name={props.course.name}></Header>
      {props.course.parts.map(part=><Part key={part.id} part={part}></Part>)}
      <Total parts={props.course.parts}></Total>
    </div>
  )
}

const Header = (props) => {
  return(
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p id={props.part.id}>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  let total = 0;
  props.parts.map(part => total+= part.exercises)
  return(
    <>
    <p className="Bold">Total of {total} exercises</p>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App