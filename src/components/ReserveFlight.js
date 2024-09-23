import React, { useState } from 'react';

function ReserveFlight() {
    const [flightData, setFlightData] = useState({
        flightNumber: '',
        departureTime: '',
        destination: '',
        date: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/api/flights', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(flightData)
        });
        alert('Uçuş başarıyla kaydedildi!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uçuş Rezervasyonu Yap</h2>
            <input
                type="text"
                placeholder="Uçuş Numarası"
                value={flightData.flightNumber}
                onChange={(e) => setFlightData({ ...flightData, flightNumber: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Kalkış Saati"
                value={flightData.departureTime}
                onChange={(e) => setFlightData({ ...flightData, departureTime: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Varış Yeri"
                value={flightData.destination}
                onChange={(e) => setFlightData({ ...flightData, destination: e.target.value })}
                required
            />
            <input
                type="date"
                value={flightData.date}
                onChange={(e) => setFlightData({ ...flightData, date: e.target.value })}
                required
            />
            <button type="submit">Rezervasyon Yap</button>
        </form>
    );
}

export default ReserveFlight;
