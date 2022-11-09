import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useReadingProgress from '../../hooks/useReadingProgress';
import "./navbar.css"

// eslint-disable-next-line react/prop-types
export default function Navbar({currentPage}) {

  const scrollProgress = useReadingProgress();

  const [menuState,setMenuState] = useState(true);

  return (
    <>     
      <nav className='navbar'>
      <div className='scrollProgress' style={{width: `${scrollProgress}%`}}></div> 
        {window.innerWidth > 800 
        ? <ul className="menu">
            <img src={`/images/Logo.svg`} alt="" />
            {navBarLink({link: "", currentPage, name: "Home"})}
            {navBarLink({link: "solaris_news", currentPage, name: "News"})}
            {/* {navBarLink({link: "community", currentPage, name: "Community"})} */}
         </ul> 
         : <ul className='menu'>
          <img src={`/images/Logo.svg`} alt="" />
          <img src={menuState ? `/images/menu.svg` : `/images/menu-close.svg`} onClick={() => setMenuState(state => !state)} alt="" />
         </ul>}
         {window.innerWidth < 800 
         ? <ul style={menuState ? {opacity: "0"} : {opacity: "1"}}>
           <ul className='menu-mobile'>
            {navBarLink({link: "", currentPage, name: "Home"})}
            {navBarLink({link: "solaris_news", currentPage, name: "News"})}
            {/* {navBarLink({link: "community", currentPage, name: "Community"})} */}
           </ul>
         </ul> 
         : null}
      </nav>
    </>
  )
}

const navBarLink = (props) => {
  return (
    <li className='navbar-item'>
      <Link to={`/${props.link}`}>
        <span className={props.currentPage === props.name ? "active" : null}>{props.name}</span>
      </Link>
    </li>
  )
}
