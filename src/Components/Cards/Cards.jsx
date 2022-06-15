
import Services from '../Services/Services';
import React from 'react'
import './Cards.css'

function Cards({emoji,heading,details}) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">Learn More</button>
    </div>
  )
}

export default Cards