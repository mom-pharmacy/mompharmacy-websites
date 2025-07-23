import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Investors from './pages/Investors'

function App() {
 

  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={AboutUs} />
      <Route path='/investors' Component={Investors} />
    </Routes>
  )
}

export default App
