import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import ProjectC from './Components/ProjectC'
import MainSection from './Components/MainSection'

function App() {
   const [content,setContent] = useState('home')

  return (
    <div className='bg-[#00395a] text-[#d6ccce]flex flex-col '>
        <Header />
        <Navbar />
        <MainSection />
          <ProjectC />
        

    </div>
  )
}

export default App
