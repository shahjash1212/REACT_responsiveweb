import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import './Button.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Blue.mp4' autoPlay loop muted></video>
      <h1>Welcome</h1>
      <p>
        This Is My First Website On <br />
        <center>React</center>
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Watch Trailer <i className='fa-brands fa-joomla' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
