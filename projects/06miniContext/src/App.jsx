import './App.css'
import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider'
import Showcard from './components/Showcard';

function App() {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile/>
      <div className='card-container'>
        <Showcard baseValue={1}/>
        <Showcard baseValue={2}/>
        <Showcard baseValue={3}/>
      </div>
    </UserContextProvider>
  )
}

export default App;
