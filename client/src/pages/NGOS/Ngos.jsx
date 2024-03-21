import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import './ngos.css';
import Ngoscard from './Ngoscard';
const Ngos = () => {
  const ngoss = [
    {
      eventName: 'Blood Drive Boost',
      description: 'Join us for a community blood drive to save lives and support local hospitals in need of blood donations.',
      organizer: 'Local Blood Bank',
      
      contactInfo: 'Contact: John Doe - johndoe@example.com'
    },
    {
      eventName: 'LifeSaver Rally',
      description: 'Participate in our LifeSaver Rally and become a hero by donating blood to those in urgent need.',
      organizer: 'NGO for Blood Donation Awareness',
      
      contactInfo: 'Contact: Jane Smith - janesmith@example.com'
    },
    {
        eventName: 'Blood Drive Boost',
        description: 'Join us for a community blood drive to save lives and support local hospitals in need of blood donations.',
        organizer: 'Local Blood Bank',
        
        contactInfo: 'Contact: John Doe - johndoe@example.com'
      },
      {
        eventName: 'LifeSaver Rally',
        description: 'Participate in our LifeSaver Rally and become a hero by donating blood to those in urgent need.',
        organizer: 'NGO for Blood Donation Awareness',
       
        contactInfo: 'Contact: Jane Smith - janesmith@example.com'
      },
      {
        eventName: 'Blood Drive Boost',
        description: 'Join us for a community blood drive to save lives and support local hospitals in need of blood donations.',
        organizer: 'Local Blood Bank',
        
        contactInfo: 'Contact: John Doe - johndoe@example.com'
      },
      {
        eventName: 'LifeSaver Rally',
        description: 'Participate in our LifeSaver Rally and become a hero by donating blood to those in urgent need.',
        organizer: 'NGO for Blood Donation Awareness',
       
        contactInfo: 'Contact: Jane Smith - janesmith@example.com'
      },
  ];
  return (
    <>

    <Topbar/>
     <div className="ngos-events">
      <section className="ngos-heading">   
      <h2 className="Ngo-event-heading">Ngo's Details</h2>
      </section>  
      <div className="section-mail">
        <div className="want-reg">
          <h3>Want to Register Send Us Mail</h3>
        </div> 
        <div className="click-me">
          <button className="Click-me-button">
             <a href="mailto:someone@example.com"></a>
             Click Me
          </button>
          
          </div>      
     </div>
      <div className="ngos-container">
        {ngoss.map((event, index) => (
        <Ngoscard
          key={index}
          eventName={event.eventName}
          description={event.description}
          organizer={event.organizer}          
          contactInfo={event.contactInfo}
        />
      ))}
        </div>  
        <div className="ngos-container">
        {ngoss.map((event, index) => (
        <Ngoscard
          key={index}
          eventName={event.eventName}
          description={event.description}
          organizer={event.organizer}          
          contactInfo={event.contactInfo}
        />
      ))}
        </div>   
      
    </div>
    </>
    

  
  )
}

export default Ngos