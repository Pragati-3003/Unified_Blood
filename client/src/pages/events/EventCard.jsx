import React from 'react'

const EventCard = ({ eventName, description, organizer, date, contactInfo }) => {
  return (
    <div className="event-card">
    <h3>{eventName}</h3>
    <p><strong>Date:</strong> {date}</p>
    <p><strong>Description:</strong> {description}</p>
    <p><strong>Organized by:</strong> {organizer}</p>
    <p><strong>Contact:</strong> {contactInfo}</p>
  </div>
  )
}

export default EventCard