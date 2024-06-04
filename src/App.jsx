
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeatureSection from './components/Feature/FeatureSection'
import FaqSection from './components/Faq_section/FaqSection'
import Download from './components/DownloadSection/Download'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <FeatureSection/>
  <FaqSection/>
  <Download/>
  <Footer/>


  </>
  )
}

export default App
