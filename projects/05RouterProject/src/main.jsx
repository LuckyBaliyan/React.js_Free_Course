import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App/>}>
      <Route path ='' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/user/:userName' element={<User/>}></Route>
      <Route
      loader={githubInfoLoader}  //loder is used to fetch data as a user hover on a link so it uses it in cache..
      path='github'
      element={<Github/>}>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
