

import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'

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
                   <li>Home</li>
                   <li>Services</li>
                   <li>Skills</li>


               </ul>
           </div>

           <button className="button n-button">
               Contact me
           </button>
       </div>

   </div>
  )
}

export default Navbar