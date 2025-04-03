import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
//let counter=57;

//addValue funtion
  const addValue=()=>{
  counter=counter+1;
  if(counter>20 ){
    alert("Maximum value reached")
    counter=0
  }
  setCounter(counter);
  console.log("button is clicked",Math.random(),counter)
 }

//  removeValue funtion

 const removeValue=()=>{
  if(counter<=0)
  {
    alert("Value can not be negative")
     
  }else{

    setCounter(counter-1)
  }
 }

  return (
    <>
    <h1>Chai Aur Code</h1>
    <h2>counter Value : {counter}</h2>
    {/* //Passing the reference not calling the funtion */}
      <button onClick={addValue}>add Value {counter} </button>
      <br />  
      <button onClick={removeValue}>remove Value  {counter} </button>
      <p>Footer : {counter} </p>
      
    </>
  )
}

export default App
