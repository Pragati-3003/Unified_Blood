import React, { useState } from 'react';
import './bloodbanks.css'

import Topbar from '../../components/topbar/Topbar';

const BloodBanks = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [details, setDetails] = useState(null);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    // Fetch details based on the selected location
    fetchDetails(location);
  };

  const fetchDetails = (location) => {
    // Simulated function to fetch details based on location
    // Replace with actual API call
    const details = {
      location: location,
      // Example data
      bloodTypeA: "Smart City Blood Bank",
      bloodTypeB: "Indian Blood Bank",
      bloodTypeAB: "State Blood Bank",
      bloodTypeO: "Health Care Blood Bank",
    };
    setDetails(details);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get latitude and longitude
          const { latitude, longitude } = position.coords;
          // You can use these coordinates to fetch details or display them
          console.log("Latitude:", latitude, "Longitude:", longitude);
          // Simulated location detection
          setSelectedLocation("Banasthali Vidyapith");
          // Fetch details based on the detected location
          fetchDetails("Your Current Location");
        },
        (error) => {
          console.error("Error getting location:", error.message);
          // Handle error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle unsupported browser
    }
  };

  return (
    <div>
      <Topbar/>
      <nav>
        <ul>
          <li><a href="#" onClick={() => handleLocationChange('Location A')}>Jaipur</a></li>
          <li><a href="#" onClick={() => handleLocationChange('Location B')}>Kota</a></li>
          <li><a href="#" onClick={() => handleLocationChange('Location C')}>Delhi</a></li>
          {/* Add more locations as needed */}
        </ul>
        <button onClick={handleCurrentLocation}>Detect Current Location</button>
      </nav>
      <div>
        <h2>Blood Bank Details for {selectedLocation}</h2>
        {details && (
          <div>
            <p>Blood Bank : {details.bloodTypeA}</p>
            <p>Blood Bank : {details.bloodTypeB}</p>
            <p>Blood Bank : {details.bloodTypeAB}</p>
            <p>Blood BAnk : {details.bloodTypeO}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default BloodBanks