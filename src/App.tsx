import './App.css'
import {Hero, Projects, Skills, Experiences, Certifications, Contacts} from './sections/Index'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'


function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  
  useEffect(()=>{
  
    function checkSize(){
      if(window.innerWidth < 820){
        setShowNavbar(false);
      }else{
        setShowNavbar(true);
      }
    }
    checkSize();
  
    window.addEventListener('resize',checkSize);
  
    return ()=>{
      window.removeEventListener('resize',checkSize);
    }
  }, [])
  return <>
    {
      showNavbar && <NavBar />
    }
    <Hero />
    <Projects />
    <Skills />
    <Experiences />
    <Certifications />
    <Contacts />
    <Footer />
  </>
  
}

export default App
