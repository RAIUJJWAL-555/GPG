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
      </Routes>
    </>
  )
}

export default App