import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MOUNIKA_PHOTO from '../../assets/MOUNIKA_PHOTO.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" className='themepattern'/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={MOUNIKA_PHOTO} alt="" className='myaboutpic'/>
            </div>
            <div className="about-right">
                <p>I'm a passionate software engineer with nearly 2 years of experience in crafting responsive and user-friendly web applications. My expertise spans across React.js, JavaScript, and full-stack development, where I blend creativity with technical precision. I thrive in collaborative environments, constantly learning and pushing the boundaries of innovation. Let's build something amazing together! 
                    <br/>  <br/> Beyond the code, I'm an advocate for clean, ethical programming practices and believe in the power of technology to make a positive impact. I'm always looking for new ways to grow, innovate, and contribute to the tech community.</p>
            
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className='about-skill'><p>React Js</p><hr style={{width:"100%"}}/></div>
                <div className='about-skill'><p>Javascript</p><hr style={{width:"80%"}}/></div>
                <div className='about-skill'><p>Node.js</p><hr style={{width:"40%"}}/></div>
                <div className='about-skill'><p>Express.js</p><hr style={{width:"50%"}}/></div>
                <div className='about-skill'><p>MongoDB</p><hr style={{width:"30%"}}/></div>
            </div>
           
                

            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                        <h1>2+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p> 
                </div>
            </div>
    </div>
  )
}

export default About
