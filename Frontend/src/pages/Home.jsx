import React from 'react'
import Header from '../Section/Header.jsx'
import Hero from '../Section/Hero.jsx'
import Gallery from '../components/Gallery.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2' }}>
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home
