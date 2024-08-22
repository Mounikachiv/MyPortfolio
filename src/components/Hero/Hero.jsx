import React from 'react'
import './hero.css'
import mypic from '../../assets/mypic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div  id='home'className='hero'>
      <img src={mypic} alt='' className='profile_photo'/>
      <h1> <span>I'm Mounika Chivakala, </span>frontend developer based in India.</h1>
      <p>I am a frontend developer from Punganur,Andhrapradesh with 2years of experience in Tuplescale technologies pvt ltd </p>
     <div className='hero-action'>
      <div className='hero-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink></div>
      <div className='hero-resume'>My resume</div>
    </div>
    </div>

  )
}

export default Hero
