import React from 'react'
import './Navbar.css';
import logoWhite from "../../assets/logo-white.png";
import logoBlack from "../../assets/logo-black.png";
import day from "../../assets/day.png";
import night from "../../assets/night.png";
import searchB from "../../assets/search-b.png";
import searchW from "../../assets/search-w.png";


const Navbar = ({theme,setTheme}) => {

  const toggleMode = ()=>{
    theme === "light"?setTheme("dark"):setTheme("light");
  }
  return (
    <div className='navbar'>
    <img src={theme === "light"?logoBlack:logoWhite} alt="" className='logo'/>
    <ul>
      <li>Home</li>
      <li>Products</li>
      <li>Features</li>
      <li>About</li>
    </ul>
    <div className="search-box">
      <input type="text" placeholder='Search'/>
      <img src={theme === 'light'?searchW:searchB} alt="" />
    </div>
    <img onClick={toggleMode} src={theme === "light"?night:day} alt="" className='toggle'/>    
    </div>
  )
}

export default Navbar
