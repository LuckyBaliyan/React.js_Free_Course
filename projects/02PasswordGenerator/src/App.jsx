import { useState, useCallback, useEffect,useRef } from 'react'
import './Main.css';



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [pass,setPass] = useState('');

  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+=-[]{}`~";

    for(let i = 1;i<= length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass)
  },[length,numberAllowed,charAllowed,setPass])

  //ref hook
  const passwordRef = useRef(null)  // used select the refrence of the element we pass the refrence variable

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]);


  return (
    <>
     <div className='w-full h-fit max-w-md mx-auto px-4 py-4 text-white shadow-md rounded-lg my-8  bg-gray-500'>
      <h1 className='text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
          <input type="text" value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} 
          className='p-2 bg-blue-500 text-white cursor-pointer'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{setnumberAllowed((prev)=>!prev)}} 
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={()=>{setcharAllowed((prev)=>!prev)}} 
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
     </div>

    </>
  )
}

export default App
