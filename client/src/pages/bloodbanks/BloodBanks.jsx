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
      bloodTypeA: {
        bank: "Smart City Blood Bank",
        bloodAvailable: "100 units",
        typesAvailable: ["A+", "A-", "AB+", "AB-"],
        contact: "+1234567890"
      },
      bloodTypeB: {
        bank: "Indian Blood Bank",
        bloodAvailable: "150 units",
        typesAvailable: ["B+", "B-"],
        contact: "+9876543210"
      },
      bloodTypeAB: {
        bank: "State Blood Bank",
        bloodAvailable: "80 units",
        typesAvailable: ["AB+", "AB-"],
        contact: "+1122334455"
      },
      bloodTypeO: {
        bank: "Health Care Blood Bank",
        bloodAvailable: "200 units",
        typesAvailable: ["O+", "O-"],
        contact: "+9988776655"
      },
      bloodTypeAaa: {
        bank: "Smart City Blood Bank",
        bloodAvailable: "100 units",
        typesAvailable: ["A+", "A-", "AB+", "AB-"],
        contact: "+1234567890"
      },
      bloodTypebB: {
        bank: "Indian Blood Bank",
        bloodAvailable: "150 units",
        typesAvailable: ["B+", "B-"],
        contact: "+9876543210"
      },
      bloodTypeAbB: {
        bank: "State Blood Bank",
        bloodAvailable: "80 units",
        typesAvailable: ["AB+", "AB-"],
        contact: "+1122334455"
      },
      bloodTypeOnn: {
        bank: "Health Care Blood Bank",
        bloodAvailable: "200 units",
        typesAvailable: ["O+", "O-"],
        contact: "+9988776655"
      },
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
          <li><a href="#" onClick={() => handleLocationChange('Jaipur')}>Jaipur</a></li>
          <li><a href="#" onClick={() => handleLocationChange('Kota')}>Kota</a></li>
          <li><a href="#" onClick={() => handleLocationChange('Delhi')}>Delhi</a></li>
          {/* Add more locations as needed */}
        </ul>
        <button onClick={handleCurrentLocation}>Detect Current Location</button>
      </nav>
      <div className="container">
        <h2>Blood Bank Details for {selectedLocation}</h2>
        {details && (
          <div className="details-container">
            {Object.keys(details).map((bloodType, index) => (
              details[bloodType] && (
                <div className="card" key={index}>
                  <h3>{details[bloodType].bank}</h3>
                  <p><strong>Blood Available:</strong> {details[bloodType].bloodAvailable}</p>
                  {details[bloodType].typesAvailable && (
                    <p><strong>Types Available:</strong> {details[bloodType].typesAvailable.join(", ")}</p>
                  )}
                  <p><strong>Contact:</strong> {details[bloodType].contact}</p>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BloodBanks;
