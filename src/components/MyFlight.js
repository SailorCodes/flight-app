import React, { useState, useEffect } from 'react';

function MyFlights() {
    const [myFlights, setMyFlights] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/flights')
            .then(response => response.json())
            .then(data => setMyFlights(data));
    }, []);

    return (
        <div>
            <h2>Uçuşlarım</h2>
            <ul>
                {myFlights.map(flight => (
                    <li key={flight._id}>
                        {flight.flightNumber} - {flight.destination} - {flight.departureTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyFlights;
