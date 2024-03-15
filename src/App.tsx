import './App.css'
import {Hero, Projects, Skills, Experiences, Certifications, Contacts} from './sections/Index'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return <>
    <NavBar />
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
