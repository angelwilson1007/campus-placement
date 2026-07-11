import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './components/AddRegistration'
import SearchRegistration from './components/SearchRegistration'
import DeleteRegistration from './components/DeleteRegistration'
import ViewAllRegistration from './components/ViewAllRegistration'
import NavRegistration from './components/NavRegistration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddRegistration />} />
      <Route path='/Search' element={<SearchRegistration />} />
      <Route path='/Delete' element={<DeleteRegistration />} />
      <Route path='/View' element={<ViewAllRegistration />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
