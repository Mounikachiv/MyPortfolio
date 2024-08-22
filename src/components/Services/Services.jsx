import React from 'react'
import './services.css'
import Services_Dta from '../../assets/services_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
const Services = () => {
  return (
    <div id='service' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" className='themepattern' />
        </div>
        <div className="services-container">
            {
                Services_Dta.map((service,i)=>{
                    return <div key={i} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="service-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Services
