import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import ProjectC from './Components/ProjectC'

function App() {
   const [content,setContent] = useState('home')

  return (
    <div className='h-screen bg-[#00395a] text-[#d6ccce]flex flex-col '>
        <Header />
        <Navbar />
        <div>
          <ProjectC />
        </div>
    </div>
  )
}

export default App
