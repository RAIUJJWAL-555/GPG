import Header from '../src/Section/Header.jsx'
import Hero from './Section/Hero.jsx'
import ScrollPath from './components/ScrollPath.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Events from './pages/Events.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Courses from './components/Courses.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/events" element={<Events />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course" element={<Courses/>} />
      </Routes>
    </>
  )
}

export default App