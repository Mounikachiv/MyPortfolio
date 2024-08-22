import React, { useRef, useState } from 'react';
import './navbar.css';
import mylogo1 from '../../assets/mylogo1.jpg';
import underline from "../../assets/nav_underline.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu=()=>{
    menuRef.current.style.right='-350px';
  }
  const handleHomeClick=(inp)=>{
    setMenu(inp);
    closeMenu();
  }

  return (
    <div  className='navbar'>
      <img src={mylogo1} className='logo' alt="logo" />
      <img  src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img className='nav-mob-close' src={menu_close} onClick={closeMenu} alt=''/>       
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>handleHomeClick('home')}>Home</p></AnchorLink> {menu==="home" ? <img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>handleHomeClick('about')}>About Me</p></AnchorLink>{menu==="about" ? <img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>handleHomeClick('services')}>Services</p></AnchorLink>{menu==="services" ? <img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p  onClick={()=>handleHomeClick('work')}>Portfolio</p></AnchorLink>{menu==="work" ? <img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p  onClick={()=>handleHomeClick('contact')}>Contact</p></AnchorLink>{menu==="contact" ? <img src={underline} alt='' />:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p  onClick={()=>setMenu('contact')}>Connect With Me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
