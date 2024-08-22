import React from "react";
import "./mywork.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arror_icon from '../../assets/arrow_icon.svg';
const Mywork = () => {
  return( 
  <div id='work' className="mywork">
    <div className="mywork-title">
      <h1>My latest work</h1>
      <img  src={theme_pattern} alt="" className="themepattern"/>
    </div>  
    <div className="mywork-container">
        {mywork_data.map((work,i)=>{
          return <img src={work.w_img} key={i} alt=""/>
        })}
    </div>
    <div className="mywork-showmore">
      <p>Show more</p>
      <img src={arror_icon} alt=""/>
    </div>
  </div>
  );
};

export default Mywork;
