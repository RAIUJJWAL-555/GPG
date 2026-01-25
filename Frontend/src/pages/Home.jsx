import React from 'react'
import Hero from '../Section/Hero.jsx'
import About from '../Section/About.jsx'
import Gallery from '../components/Gallery.jsx'
import NoticeBoard from '../components/NoticeBoard.jsx'
import Courses from '../components/Courses.jsx'
import MainShowcase from '../components/MainShowcase.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2' }}>
      <Hero />
      <About />
      <Gallery />
      <NoticeBoard />
      <Courses />
      <MainShowcase />
      <Footer />
    </div>
  )
}

export default Home
