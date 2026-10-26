import './App.css'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Students } from './Pages/Students'
import { Home } from './Pages/Home'
import { Courses } from './Pages/Courses'
import { Studentform } from './Components/Studentform'

function App() {
  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/students" element={<Students />} />
       <Route path="/courses" element={<Courses />} />
       <Route path='/Studentform' element={<Studentform/>}/>
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
