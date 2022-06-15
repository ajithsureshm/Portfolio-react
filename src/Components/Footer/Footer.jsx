
import React from 'react'
import './Footer.css'
import  wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Git from "@iconscout/react-unicons/icons/uil-github";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin";


function Footer() {
  return (
    <div className="footer">

        <img src={wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>ajithsureshm97@gmail.com</span>

            <div className="f-icons">
                    <Insta color="white" size='3rem' />
                    <Git color="white" size='3rem' />
                    <Linked color="white" size='3rem' />

            </div>
        </div>
    </div>
  )
}

export default Footer