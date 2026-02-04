
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Events from './pages/Events.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import Syllabus from './pages/Syllabus.jsx'
import PlacementCell from './pages/PlacementCell.jsx'
import Admission from './pages/Admission.jsx'
import AboutUs from './pages/AboutUs.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import PublicLayout from './layouts/PublicLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminTeachers from './pages/admin/AdminTeachers.jsx'
import AdminStudents from './pages/admin/AdminStudents.jsx'
import AdminNotices from './pages/admin/AdminNotices.jsx'
import AdminSettings from './pages/admin/AdminSettings.jsx'
import AdminTimetable from './pages/admin/AdminTimetable.jsx'

// Teacher Pages
import TeacherDashboard from './pages/teacher/TeacherDashboard.jsx'
import TeacherNotices from './pages/teacher/TeacherNotices.jsx'

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard.jsx'
import Profile from './components/Profile.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('splashShown');
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashShown', 'true');
    setIsLoading(false);
  };

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/events" element={<Events />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/placement-cell" element={<PlacementCell />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<DashboardLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="teachers" element={<AdminTeachers />} />
              <Route path="students" element={<AdminStudents />} />
              <Route path="notices" element={<AdminNotices />} />
              <Route path="timetable" element={<AdminTimetable />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Route>

          {/* Teacher Routes */}
          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route path="/teacher" element={<DashboardLayout />}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="notices" element={<TeacherNotices />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Student Routes */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/student" element={<DashboardLayout />}>
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="notices" element={<StudentDashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

        </Routes>
      )}
    </AuthProvider>
  )
}

export default App
