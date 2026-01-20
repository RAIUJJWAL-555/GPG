import Header from '../src/Section/Header.jsx'
import Hero from './Section/Hero.jsx'
import ScrollPath from './components/ScrollPath.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Events from './pages/Events.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import Syllabus from './pages/Syllabus.jsx'
import PlacementCell from './pages/PlacementCell.jsx'
import Admission from './pages/Admission.jsx'
import About from './Section/About.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/placement-cell" element={<PlacementCell />} />
         <Route path="/admission" element={<Admission />} />
         <Route path="/pages/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App