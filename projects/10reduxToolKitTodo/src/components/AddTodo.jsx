import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddTodo(){
    const [input,setInput] = useState('');
    const dispatch = useDispatch(); // use to change value un store using the reducers 

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));// passing input as a payload {} to the reducer defined in todoSlice 
        setInput('');// clearing input back to null after adding  a todod
    }

    return(
        <form onSubmit={addTodoHandler}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
              Add
          </button>
      </form>
    )
}

export default AddTodo;