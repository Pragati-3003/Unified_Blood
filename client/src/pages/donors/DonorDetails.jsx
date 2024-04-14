import React from "react";
import "./donor.css";
import Topbar from "../../components/topbar/Topbar";
const DonorDetails = ({ name, bloodGroup, city, pastRecord }) => {
  return (
    <>
     
      <div className="donor-details">
        <h2>Donor Details</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Blood Group:</strong> {bloodGroup}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>Past Record:</strong> {pastRecord}
        </p>
      </div>
    </>
  );
};

export default DonorDetails;
