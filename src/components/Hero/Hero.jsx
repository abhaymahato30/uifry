import React from 'react'
import Rightsection from './Rightsection'
import Leftsection from './Leftsection'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero_Section flex padding_xaxis">
    <Leftsection/>
    <Rightsection/>
    </div>
    


      
    </>
  )
}

export default Hero
