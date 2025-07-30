import React, { useState } from "react";
import { useTodo } from "../contexts";


function TodoForm(){
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo(); //useTodo wraps the useContext

    const add = (e)=>{
        e.preventDefault();
        if(!todo) return;

        addTodo({todo,completed:false}); // we dont pass the id:Date.now() here becsuse we have already passed it
        //and why we pass Date.now() because we want a new id value we evry time create or add a new todo
        setTodo("") //set the doto again to empty String 
    }

    return (
       <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e)=> setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
              Add
          </button>
      </form>
    )
}

export default TodoForm;