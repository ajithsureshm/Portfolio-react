
import React, {useContext} from 'react'
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
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
import {fadeIn} from '../../variants'
import { Link } from "react-scroll";


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div className="intro" id='Home'>
     <div className="i-left">
       <div className="i-name">
         <span style={{ color: darkMode ? "white" : "" }}>Hy!! I am</span>
         <motion.span
         variants={fadeIn()} initial="initial" animate="animate">
          Ajith Suresh</motion.span>
         <span>Hard-working individual with proficiency in HTML, CSS, JavaScript, And the server side Node.JS and the FrameWork Express. Knew the advanced FrontEnd Framework  Angular , And the Library React , with the combination of NONSQL DataBase  Mongo DB.
                Ability to communicate effectively in a team setting, and   strong willingness to learn about more in the IT sector.
          </span>
       </div>
       <button className="button i-button"><Link id='Link' spy={true} to="Contact" smooth={true} >Hire me</Link></button>
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

     <div className="i-right" >

       <img src={vector2} alt="" />
       <img src={pic} alt="" />

       <motion.img 
       initial={{left:'-36%'}}
       animate={{left:'20%'}}
       transition={transition}

       src={glassesimoji} />

       <motion.div
          initial={{ top: "-15%", left: "74%" }}
          animate={{ left: "68%" }}
          transition={transition} 
            className='floating-div'>

         <FloatingDiv image={crown}  txt1='Web' txt2='Developer' />
       </motion.div>

       <motion.div style={{top:'13rem'}}
        initial={{ top: "70%", left: "50%" }}
        animate={{ left: "10%" }}
        transition={transition}  
        className='floating-div'>
       
         <FloatingDiv image={thumbup} txt1='React' txt2='Developer' />
       </motion.div>


    </div>

   </div>
  )
}

export default Intro