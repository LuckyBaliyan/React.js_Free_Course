import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)     //[count--> variable,setCounter-->function that cahnge the variable]

  //let counter = 5;
  const addValue = () =>{
    //console.log("Value added",Math.floor(Math.random()*3000 + 1));
    //counter++;
    //counter = counter+1; we can directly pass the js in the refreced function setCounter
    if(counter>=20)return;
    setCounter(++counter);  // use preincrement as we need the variable change first then rendered
    console.log(counter);
  }

  const removeValue = ()=>{
    if(counter <= 0 ) return;
    setCounter(--counter);
  }

  const resetCounter = ()=>{
    setCounter(0);
  }

  return (
    <>
     <h1>Hekki</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}
     >Add value</button>
     <br />
     <br />
     <button onClick={removeValue}
     >Decrease Value: {counter}</button>
     <p>{counter}</p>
     <button onClick={resetCounter}
     >Reset</button>
    </>
  )
}

export default App
