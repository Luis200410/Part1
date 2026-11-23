const Hello = (props) =>{
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='George' />
      <Hello  name='Luis' />
      <Hello  name='Ruiz' />
    </>
  )
}

export default App
