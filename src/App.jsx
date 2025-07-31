import { Route, Routes } from 'react-router'
import{useEffect, useState} from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Attachments/Navbar'
import AnimationTrail from './pages/AnimationTrail'
import AboutUs from './pages/AboutUs'
import Investors from './pages/Investors'
import ContactUs from './pages/ContactUs'
import JobDetails from './pages/Careers/JobDetails'
import Ourteam from './pages/teamour'

import { Career } from './pages/Careers/Career'
import Footer from './components/Home/Footer'
import EarlyAccess from './components/Home/EarlyAccess'
import Founders from './pages/Founders'
import teamour from './pages/teamour'
import LoadingPage from './components/LoadingPage'
// import OpenCardComp from './components/OurTeam/OpenCardComp'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    
    },3000);
    return ()=>clearInterval(timer)
  },[])

  return (
    <>
    {loading?(
      <LoadingPage />
    ):(

<>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/animation' Component={AnimationTrail} />
        <Route path='/ourteams' Component={teamour} />
        <Route path='/about' Component={AboutUs} />
        <Route path='/investors' Component={Investors} />
        <Route path='/contactus' Component={ContactUs} />
        <Route path='/career' Component={Career} />
        <Route path='/jobdetails' Component={JobDetails} />
        <Route path='/founderbio' Component={Founders}/>
       </Routes>
      <EarlyAccess />
       <Footer />
       </>
    )}
    </>
  )
}

export default App
