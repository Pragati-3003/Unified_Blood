import React from 'react'
import EventCard from './EventCard';

const Event = () => {
    const eventss = [
        {
          eventName: 'Blood Drive Boost',
          description: 'Join us for a community blood drive to save lives and support local hospitals in need of blood donations.',
          organizer: 'Local Blood Bank',
          date: 'March 25, 2024',
          contactInfo: 'Contact: John Doe - johndoe@example.com'
        },
        {
          eventName: 'LifeSaver Rally',
          description: 'Participate in our LifeSaver Rally and become a hero by donating blood to those in urgent need.',
          organizer: 'NGO for Blood Donation Awareness',
          date: 'April 10, 2024',
          contactInfo: 'Contact: Jane Smith - janesmith@example.com'
        },
        {
            eventName: 'Blood Drive Boost',
            description: 'Join us for a community blood drive to save lives and support local hospitals in need of blood donations.',
            organizer: 'Local Blood Bank',
            date: 'March 25, 2024',
            contactInfo: 'Contact: John Doe - johndoe@example.com'
          },
          {
            eventName: 'LifeSaver Rally',
            description: 'Participate in our LifeSaver Rally and become a hero by donating blood to those in urgent need.',
            organizer: 'NGO for Blood Donation Awareness',
            date: 'April 10, 2024',
            contactInfo: 'Contact: Jane Smith - janesmith@example.com'
          },
          {
            eventName: 'Blood Drive Boost',
            description: 'Join us for a community blood drive to save lives and support local hospitals in need of blood donations.',
            organizer: 'Local Blood Bank',
            date: 'March 25, 2024',
            contactInfo: 'Contact: John Doe - johndoe@example.com'
          },
          {
            eventName: 'LifeSaver Rally',
            description: 'Participate in our LifeSaver Rally and become a hero by donating blood to those in urgent need.',
            organizer: 'NGO for Blood Donation Awareness',
            date: 'April 10, 2024',
            contactInfo: 'Contact: Jane Smith - janesmith@example.com'
          },
      ];
  return (
    <div className="blood-donation-events">
      <h2>Blood Donation Events</h2>
      {eventss.map((event, index) => (
        <EventCard
          key={index}
          eventName={event.eventName}
          description={event.description}
          organizer={event.organizer}
          date={event.date}
          contactInfo={event.contactInfo}
        />
      ))}
    </div>
  )
}

export default Event