import React from 'react'
import './footer.css'
import mylogo1 from '../../assets/mylogo1.jpg';
import user_icon from '../../assets/user_icon.svg';
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='logo' src={mylogo1} alt=''/>
                <p>I am a frontend developer from Punganur,with 2 years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt='user'/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Mounika Chivakala,All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
