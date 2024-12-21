import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import ProjectC from './Components/ProjectC'
import MainSection from './Components/MainSection'
import ProjectD from './Components/ProjectD'

function App() {
   const [content,setContent] = useState('home')

  return (
    <div className='bg-[#00395a] flex flex-col '>
        <Header />
        <Navbar />
        <div id='home'>
          <MainSection />
        </div>
        <div id='projects'>
          <ProjectC />
        </div>
      
          <ProjectD 
            productHed='Flexbar: A Versatile & Fully Customizable Touch-Bar Solution'
            productDesc='Streamline and customize interactions with software, games, and streaming for Win & Mac—keeping you focused, in control, and connected.'
            productImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t0wW_ju7zxaYjNSO-PFWOZgXduksbrT8QQ&s'
            fundTobeRaised='30,000'
            fundRaised='100,000'
          />
        
    </div>
  )
}

export default App
