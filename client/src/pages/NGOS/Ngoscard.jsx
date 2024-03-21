import React from 'react'
import './ngoscard.css'
const Ngoscard = ({ eventName, description, organizer, date, contactInfo }) => {

  return (
    <>
    
    <div className="events-container">            
    <div className="event-card">
    <h3>{eventName}</h3>
    <p><strong>Description:</strong> {description}</p>
    <p><strong>Organized by:</strong> {organizer}</p>
    <p><strong>Contact:</strong> {contactInfo}</p>
  </div>
  </div>
  </>
  )
}

export default Ngoscard