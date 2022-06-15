
import React from 'react'
import './Services.css'
import heartemoji from "../../img/heartemoji.png";
import humble from "../../img/humble.png";
import glasses from "../../img/glasses.png";
import Cards from '../Cards/Cards';
import Resume from './Resume.pdf'


function Services() {
  return (
      <div className="services">

          {/* left */}
          <div className="awesome">
              <span>My Awesome</span>
              <span>Services</span>
              <span>I'm a Self Taught, who enjoy building things that live on the internet <br /> .I develop static websites and web apps with front end and back end also. <br /> I aspire toward a career that will allow me to change my creativity through <br /> crafting beautiful software and engaging experiences</span>

              <a href={Resume} download>
              <button className="button s-button">Download CV</button>
              </a>
          </div>

          {/* right */}
          <div className="cards">

              {/* first card */}
              <div style={{left:'12rem'}}>
                  <Cards
                  emoji={heartemoji}
                  heading={'Web Design'}
                  details={'I value simple content structure, clean design patterns, and thoughtful interactions.'}
                  />
              </div>

              {/* second card */}

              <div style={{top:'10rem',left:'-6rem'}}>
                  <Cards
                  emoji={glasses}
                  heading={'Web Developer'}
                  details={'I like to code things from scratch, and enjoy bringing ideas to life in the browser. '}
                  />
              </div>

                {/* Third card */}

                <div style={{top:'16rem',left:'9rem'}}>
                  <Cards
                  emoji={humble}
                  heading={'Node Developer'}
                  details={'I like to code things from scratch, and enjoy bringing ideas to life in the browser. '}
                  />
              </div>
          </div>

      </div>
    )
}

export default Services