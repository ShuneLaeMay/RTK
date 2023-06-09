import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Detail from './components/Detail'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/edit/:id' element={<Edit/>} />

      </Routes>
    </div>
  )
}

export default App
