import React, { useState, useEffect } from 'react';

function FlightList() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/flights')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching flights:', error));
    }, []);

    return (
        <div>
            <h2>Uçuş Listesi</h2>
            <ul>
                {flights.map(flight => (
                    <li key={flight._id}>
                        {flight.flightNumber} - {flight.destination} - {flight.departureTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlightList;
