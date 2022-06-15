
import React, {useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact =() =>{

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
    <div className="contact">

        <div className="c-left">
             <div className="awesome">
                <span> Get in touch </span>
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