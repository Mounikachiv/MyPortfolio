import React, { useState } from 'react'
import './contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';

import mail_icon from '../../assets/mail_icon.svg'
import  call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
 const [result,setResult]=useState('')
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "204b192f-9602-4ad3-9860-c6dcce8be7e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' className='themepattern'/>
      </div>
      <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently looking for career advancement,feel free to contact.</p>
                <div className='contact-details'>
                <div className='contact-detail'>
                    <img  src={mail_icon} alt=''/><p>mounikachivakala@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={call_icon} alt=''/><p>+91-7799321068</p>
                </div>
                <div className='contact-detail'>
                    <img src={location_icon} alt=''/><p>Punganur,Andhra pradesh 517247</p>
                </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter yourname' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='emailonS' placeholder='Enter your email' name='email'/>
                <label>Write your message here.</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
      </div>
      
    </div>
  )
}

export default Contact
