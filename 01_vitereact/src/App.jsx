
import Hello from "./hello"


function App() {
  //how to declare variable in jsx
  //we use curly braces for variable which is evaluated expression whre we can declare the variable but cant write other js logic we can code outside and can add the evaluated expression
  const userName="Salman Khan"

  return (
    <>
    <Hello/>
    <h1>Hello i am {userName}</h1>
    </>
  )
}

export default App
