//@ts-check
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BloodBankDashboard = () => {
    const [donationData, setDonationData] = useState([]);

    useEffect(() => {
        axios.get('/api/donations')
            .then(response => setDonationData(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Blood Bank Dashboard</h1>
            <LineChart width={600} height={300} data={donationData}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="A+" stroke="#8884d8" />
                <Line type="monotone" dataKey="A-" stroke="#82ca9d" />
                <Line type="monotone" dataKey="B+" stroke="#ffc658" />
                <Line type="monotone" dataKey="B-" stroke="#ff7300" />
                <Line type="monotone" dataKey="O+" stroke="#0000ff" />
                <Line type="monotone" dataKey="O-" stroke="#ff0000" />
                <Line type="monotone" dataKey="AB+" stroke="#00ff00" />
                <Line type="monotone" dataKey="AB-" stroke="#ffff00" />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default BloodBankDashboard;
