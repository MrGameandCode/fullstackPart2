const PersonForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div>
        name: <input onChange={props.changename} value={props.name} />
      </div>
      <div>
        number: <input onChange={props.changenumber} value={props.number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm