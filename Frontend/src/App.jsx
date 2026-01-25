import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Events from './pages/Events.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import Syllabus from './pages/Syllabus.jsx'
import PlacementCell from './pages/PlacementCell.jsx'
import Admission from './pages/Admission.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './Section/Header.jsx'
import SplashScreen from './components/SplashScreen.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/events" element={<Events />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/placement-cell" element={<PlacementCell />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
