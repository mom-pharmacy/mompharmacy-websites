import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Attachments/Navbar'
import AnimationTrail from './pages/AnimationTrail'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/animation' Component={AnimationTrail}/>
    </Routes>
    </>
  )
}

export default App
