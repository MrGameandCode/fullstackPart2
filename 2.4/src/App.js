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
  const initialValue = 0;
  const total = props.parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises, initialValue
  );
  return(
    <>
    <p className="Bold">Total of {total} exercises</p>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <>
    {courses.map(course=><Course course={course}></Course>)}
  </>
  )
}

export default App