

import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'
import { Link } from "react-scroll";

function Navbar() {
  return (
   <div className="n-wrapper">
       <div className="n-left">
           <div className="n-name">Ajith Suresh</div>
           <Toogle/>
       </div>
       <div className="n-right">
           <div className="n-list">
               <ul style={{listStyleType:'none'}}>

                   <Link spy={true} to="Home" smooth={true} ><li>Home</li></Link>
                   <Link spy={true} to="Services" smooth={true}  ><li>Services</li></Link>
                   <Link spy={true} to="Skills" smooth={true} ><li>Skills</li></Link>

                   


               </ul>
           </div>

           <button className="button n-button">
           <Link id='Link' spy={true} to="Contact" smooth={true} >Contact me</Link>
 
           </button>
       </div>

   </div>
  )
}

export default Navbar