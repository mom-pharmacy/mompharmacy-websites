import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import JobDetails from './pages/Careers/JobDetails'


function App() {
 

  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/jobdetails' Component={JobDetails} />
    </Routes>
  )
}

export default App
