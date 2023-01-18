import './Course.css'

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

export default Course