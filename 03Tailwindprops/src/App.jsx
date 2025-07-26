import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Card'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let price = [1.00,5.90,2.50];

  return (
    <>
      <img src="assets/react.svg" alt="" className='logo'/>
      <div className='flex items-center justify-center gap-10'>
      <Card value = {price[0]}/>
      <Card value = {price[1]}/>
      <Card value = {price[2]}/>
      </div>   
    </>
  )
}

export default App
