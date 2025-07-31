import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"first todo"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos =  state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
});

export const {addTodo,removeTodo} = todoSlice.actions; //to export  them so that they are used individually 
export default todoSlice.reducer; // to give info about each reducers to store