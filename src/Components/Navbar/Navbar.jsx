import React from 'react'
import './Navbar.css'
import menuicon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search.png'
import uploadicon from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profileicon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
   <nav className="flex-div">
    <div className="nav-left flex-div">
        <img src={menuicon} alt="" className='menuicon' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
       
       <Link to={'/'}> <img src={logo} alt="" className='logo' /></Link>
    </div>
    <div className="nav-middle flex-div">
        <div className="search-box" flex-div>
        <input type="text" placeholder='Search' name="" id="" />
        <img src={searchicon} alt="" />
        </div>
       
    </div>
    <div className="nav-right flex-div">
        <img src={uploadicon} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={profileicon} alt="" className='user-icon'/>
    </div>
   </nav>
  )
}

export default Navbar
