import React from 'react';
import DonorDetails from './DonorDetails';
import './donor.css';
import Topbar from '../../components/topbar/Topbar';

const Donar = () => {
    const donors = [
        {
            name: 'John Doe',
            bloodGroup: 'O+',
            city: 'New York',
            pastRecord: 'Regular blood donor'
        },
        {
            name: 'Jane Smith',
            bloodGroup: 'AB-',
            city: 'Los Angeles',
            pastRecord: 'First-time donor'
        },
        {
            name: 'Michael Johnson',
            bloodGroup: 'A+',
            city: 'Chicago',
            pastRecord: 'Regular blood donor'
        },
        {
            name: 'Emily Brown',
            bloodGroup: 'B-',
            city: 'Houston',
            pastRecord: 'Regular blood donor'
        }
    ];

    return (
        <>
        <Topbar/>
        <div className="app">
            <h1>Donor Information</h1>
            
            {donors.map((donor, index) => (
                <DonorDetails 
                    key={index}
                    name={donor.name} 
                    bloodGroup={donor.bloodGroup} 
                    city={donor.city} 
                    pastRecord={donor.pastRecord} 
                />
            ))}
        </div>
        </>
        
    );
}

export default Donar;
