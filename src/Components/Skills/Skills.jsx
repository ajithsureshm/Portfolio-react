
import React, {useContext} from 'react'
import './Skills.css'
import github from "../../img/github.png";
import nodejs from "../../img/nodejs.png";
import javascript from "../../img/javascript.png";
import mongodb from "../../img/mongodb.png";
import reactjs from "../../img/reactjs.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
import { Link } from "react-scroll";



function Skills() {


  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills" id='Skills'>
        {/* left */}
        <div className="awesome">
              <span style={{ color: darkMode ? "white" : "" }}> My creative </span>
               <span> Skills </span> 
              <spane> I'm a Full Stack Developer, mainly concentrated in <br /> MongoDB,Express,React and Nodejs. <br /> I'm a Web Developer also and familiar <br /> with HTML,CSS,JavaScript,Bootstrap etc.</spane>

              <button className="button s-button"><Link id='Link' spy={true} to="Contact" smooth={true} >Hire me</Link></button>
        </div>

          {/* right */}

          <div className="s-right">

              <motion.div 
              initial={{ rotate: 45 }}
              animate={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              repeat={Infinity}
             circle cx="420.9" cy="296.5" r="45.7"

              className="s-mainCircle">

                  <div className="s-secCircle">
                      <img src={github} alt="" />
                  </div>

                  <div className="s-secCircle">
                      <img src={nodejs} alt="" />
                  </div>

                  <div className="s-secCircle">
                      <img src={javascript} alt="" />
                  </div>

                  <div className="s-secCircle">
                      <img src={mongodb} alt="" />
                  </div>

                  <div className="s-secCircle">
                      <img src={reactjs} alt="" />
                  </div>

                  {/* background circle */}

                  <div className="s-backCircle blueCircle"></div>
                  <div className="s-backCircle yellowCircle"></div>

              </motion.div>
          </div>

    </div>
  )
}

export default Skills