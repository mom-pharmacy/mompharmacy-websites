import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import JobDetails from './pages/Careers/JobDetails'

function App() {
 

  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/contactus' Component={ContactUs} />
      <Route path='/jobdetails' Component={JobDetails} />
    </Routes>
  )
}

export default App
