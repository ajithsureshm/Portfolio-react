
import React from 'react'
import Autosuggest from 'react-autosuggest';
import './Intro.css'
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import pic from "../../img/pic.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';



function Intro() {
  return (
   <div className="intro">
     <div className="i-left">
       <div className="i-name">
         <span>Hy!! I am</span>
         <span>Ajith Suresh</span>
         <span>Hard-working individual with proficiency in HTML, CSS, JavaScript, And the server side Node.JS and the FrameWork Express. Knew the advanced FrontEnd Framework  Angular , And the Library React , with the combination of NONSQL DataBase  Mongo DB.
                Ability to communicate effectively in a team setting, and   strong willingness to learn about more in the IT sector.
          </span>
       </div>
       <button className="button i-button">Hire me</button>
       <div className="i-icons">

         <a href="https://github.com/ajithsureshm?tab=repositories">
         <img src={github} alt="" />
         </a>

         <a href="https://www.linkedin.com/in/ajithsureshm/">
         <img src={linkedin} alt="" />
         </a>

         <a href="https://www.instagram.com/ajith_suresh_m_9105/">
         <img src={instagram} alt="" />
         </a>

       </div>
     </div>

     <div className="i-right">

       <img src={vector2} alt="" />
       <img src={pic} alt="" />

       <img src={glassesimoji} alt="" />

       <div style={{top:'-17%', left:'68%'}} >
         <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
       </div>

       <div style={{top:'13rem'}} >
         <FloatingDiv image={thumbup} txt1='React' txt2='Developer' />
       </div>


    </div>

   </div>
  )
}

export default Intro