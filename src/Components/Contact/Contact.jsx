
import React, {useRef, useState,useContext} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";



const Contact =() =>{


  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_g513pz4', 'template_yrju14o', form.current, '66GXK3RASWkUh-RXK')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <div className="contact" id='Contact'>

        <div className="c-left">
             <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}> Get in touch </span>
                 <span> Contact Me </span> 

            </div>
        </div>

        {/* right */}

        <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
           
            <input type="text" name="user_name" placeholder="Name" className="user" />
             <input type="email" name="user_email" placeholder="Email" className="user" />
             <textarea name="message" placeholder="Messaage" className="user" />
             <input type="submit" value="Submit" className="button" id="c-button" />

             <span>{done && "Thanks for Contact Me"}</span>
        </form>
        </div>
    </div>
  )
}

export default Contact