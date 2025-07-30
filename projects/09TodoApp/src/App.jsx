import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts';
import './App.css'
import  TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos((oldTodos)=>[{id:Date.now(),...todo},...oldTodos])
  }

  const updateTodo = (id,todo)=>{
    setTodos((oldTodo)=>oldTodo.map((oldTodo)=>(oldTodo.id === id? todo:oldTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((oldTodo) => oldTodo.filter((Todo) => Todo.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodos((oldTodo)=>oldTodo.map((oldTodo)=> oldTodo.id === id?{...oldTodo,completed:!oldTodo.completed}:oldTodo));
  }

  //Acessing the previous todos from localStorage on Loading dom
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  //Storing the todos to localStorage whenver exsists in useSate todos
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className=" min-h-screen py-8 bg-[#f7f1ec]">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#172842]">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                              <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
