import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todos'
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {

  return (
    <Provider store={store}>
    <div className='flex w-[50vw] absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] border p-2 rounded bg-[#0000001f]'>
      <div className='w-[100%]'>
      <h1>Hello redux</h1>
      <AddTodo/>
      <Todo/>
      </div>
    </div>
    </Provider>
  )
}

export default App
