
import React,{useContext} from 'react'
import './Services.css'
import heartemoji from "../../img/heartemoji.png";
import humble from "../../img/humble.png";
import glasses from "../../img/glasses.png";
import Cards from '../Cards/Cards';
import Resume from './Resume.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";



function Services() {

    const transition = { duration: 2, type: "spring" };



  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className="services" id='Services'>

          {/* left */}
          <div className="awesome">
              <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
              <span>Services</span>
              <span>I'm a Self Taught, who enjoy building things that live on the internet <br /> .I develop static websites and web apps with front end and back end also. <br /> I aspire toward a career that will allow me to change my creativity through <br /> crafting beautiful software and engaging experiences</span>

              <a href={Resume} download>
              <button className="button s-button">Download CV</button>
              </a>
          </div>

          {/* right */}
          <div className="cards">

              {/* first card */}
              <motion.div 
              initial={{ left: "25rem" }}
              animate={{ left: "10rem" }}
              transition={transition}

              style={{left:'12rem'}}>
                  <Cards
                  emoji={heartemoji}
                  heading={'Web Design'}
                  details={'I value simple content structure, clean design patterns, and thoughtful interactions.'}
                  />
              </motion.div>

              {/* second card */}

              <motion.div
              initial={{ left: "-11rem", top: "12rem" }}
              animate   ={{ left: "-6rem" }}
              transition={transition}

              style={{top:'10rem',left:'-6rem'}}>
                  <Cards
                  emoji={glasses}
                  heading={'Web Developer'}
                  details={'I like to code things from scratch, and enjoy bringing ideas to life in the browser. '}
                  />
              </motion.div>

                {/* Third card */}

                <motion.div
                initial={{ top: "17rem", left: "25rem" }}
                animate={{ left: "9rem" }}
                transition={transition}

                style={{top:'9rem',left:'9rem'}}>
                  <Cards
                  emoji={humble}
                  heading={'Node Developer'}
                  details={'I like to code things from scratch, and enjoy bringing ideas to life in the browser. '}
                  />
              </motion.div>
          </div>

      </div>
    )
}

export default Services