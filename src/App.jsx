import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Mission from './components/AboutUs/Mission'

function App() {
 

  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/aboutus' Component={Mission} />
    </Routes>
  )
}

export default App
