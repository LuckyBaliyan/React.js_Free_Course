import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0);

  function Increment(){
    setCount((callBackForCount)=>callBackForCount+1);
    setCount((callBackForCount)=>callBackForCount+1);
    setCount((callBackForCount)=>callBackForCount+1);
    setCount((callBackForCount)=>callBackForCount+1);
  }

  return (
    <>
      <h1>Counter Scenario</h1>
      <p>{count}</p>
      <button onClick={Increment}
      >Click Me</button>
    </>
  )
}

export default App
