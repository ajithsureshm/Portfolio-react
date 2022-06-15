
import React from 'react'
import './Skills.css'
import github from "../../img/github.png";
import nodejs from "../../img/nodejs.png";
import javascript from "../../img/javascript.png";
import mongodb from "../../img/mongodb.png";
import reactjs from "../../img/reactjs.png";



function Skills() {
  return (
    <div className="skills">
        {/* left */}
        <div className="awesome">
              <span> My creative </span>
               <span> Skills </span> 
              <spane> I'm a Full Stack Developer, mainly concentrated in <br /> MongoDB,Express,React and Nodejs. <br /> I'm a Web Developer also and familiar <br /> with HTML,CSS,JavaScript,Bootstrap etc.</spane>

              <button className="button s-button">Hire Me</button>
        </div>

          {/* right */}

          <div className="s-right">
              <div className="s-mainCircle">

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

              </div>
          </div>

    </div>
  )
}

export default Skills