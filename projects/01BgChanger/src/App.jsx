import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200 transition-all ease-in-out' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-[2rem] inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center  gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>{setColor("red")}}
           className='btn' style={{backgroundColor:"red"}}>
            Red
          </button>
           <button onClick={()=>setColor("green")}
            className='btn' style={{backgroundColor:"green"}}>
            Green
          </button>
           <button onClick={()=>setColor("Yellow")}
            className='btn' style={{backgroundColor:"Yellow"}}>
            Yellow
          </button>
           <button onClick={()=>setColor("gray")}
           className='btn' style={{backgroundColor:"Gray"}}>
            Gray
          </button>
           <button onClick={()=>setColor("Pink")}
           className='btn' style={{backgroundColor:"Pink"}}>
            Pink
          </button>
           <button onClick={()=>setColor("Blue")}
           className='btn' style={{backgroundColor:"Blue"}}>
            Blue
          </button>
          <button onClick={()=>setColor("Lavender")}
           className='btn' style={{backgroundColor:"Lavender"}}>
            Lavender
          </button>
          <button onClick={()=>setColor("White")}
           className='btn' style={{backgroundColor:"white"}}>
            white
          </button>
          <button onClick={()=>setColor("#000")}
           className='btn text-white' style={{backgroundColor:"#000"}}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
