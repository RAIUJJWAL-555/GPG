import Header from '../src/Section/Header.jsx'
import Hero from './Section/Hero.jsx'
import ScrollPath from './components/ScrollPath.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Events from './pages/Events.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  )
}

export default App