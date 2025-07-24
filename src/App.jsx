import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'

import Navbar from './components/Attachments/Navbar'
import AnimationTrail from './pages/AnimationTrail'
import AboutUs from './pages/AboutUs'
import Investors from './pages/Investors'
import ContactUs from './pages/ContactUs'
import JobDetails from './pages/Careers/JobDetails'
import Ourteam from './pages/Ourteam'


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/animation' Component={AnimationTrail}/> 
      <Route path='/ourteams' Component={Ourteam}/> 
      <Route path='/about' Component={AboutUs} />
      <Route path='/investors' Component={Investors} />
      <Route path='/contactus' Component={ContactUs} />
      <Route path='/jobdetails' Component={JobDetails} />

    </Routes>
    </>
  )
}

export default App
