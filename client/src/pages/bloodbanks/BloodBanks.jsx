import React, { useState, useEffect } from 'react';
import './bloodbanks.css';

const BloodBanks = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (selectedLocation) {
      // Fetch details based on the selected location
      fetchDetails(selectedLocation);
    }
  }, [selectedLocation]);

  const fetchDetails = (location) => {
    // Call your API to fetch blood bank details for the given location
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
    fetch(`YOUR_API_ENDPOINT?location=${location}`)
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains the blood bank details
        setDetails(data);
      })
      .catch(error => {
        console.error('Error fetching blood bank details:', error);
      });
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
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
          setSelectedLocation("Your Current Location");
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
      <nav>
        <ul>
          <li><a href="#" onClick={() => handleLocationChange('Jaipur')}>Jaipur</a></li>
          <li><a href="#" onClick={() => handleLocationChange('Kota')}>Kota</a></li>
          <li><a href="#" onClick={() => handleLocationChange('Delhi')}>Delhi</a></li>
          {/* Add more locations as needed */}
        </ul>
        <button onClick={handleCurrentLocation}>Detect Current Location</button>
      </nav>
      <div>
        <h2>Blood Bank Details for {selectedLocation}</h2>
        {details && (
          <div>
            {/* Display blood bank details */}
            {details.map((bank, index) => (
              <div key={index}>
                <p>Name: {bank.name}</p>
                <p>Address: {bank.address}</p>
                <p>Contact: {bank.contact}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodBanks;
