import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  const firstLocalVariable = "xyz";
  return(
    <div>
      <h1>Custome App! {firstLocalVariable}</h1>
    </div>
  )
}

/*const reactElement = {  //Now we cant pass it because the keys of this object may differe from what react algo aspect
    type : 'a',
    porps:{
        href:"https://go0gle.com",
        target:'_blank',
    },
    children:'click me to visit google'
}
*/
const anotherElem = (
  <a href="https://goggle.com" target='_blank'>Click ME</a>
)

const firstVariable = "xyz";

const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank",
  },
  "click Me to visit google",
  firstVariable
);

createRoot(document.getElementById('root')).render(
    reactElement //since it is a js datatype or object so we not need to use <anotehrElem/> this is for functions
)
