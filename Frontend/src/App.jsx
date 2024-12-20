import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'

function App() {
   const [content,setContent] = useState('home')

  return (
    <div className='h-screen bg-[#00395a] text-[#d6ccce] '>
        <Header />
        <Navbar />
    </div>
  )
}

export default App
