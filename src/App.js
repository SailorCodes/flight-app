import React from 'react';
import FlightList from './components/FlightList';
import ReserveFlight from './components/ReserveFlight';
import MyFlights from './components/MyFlights';

function App() {
    return (
        <div>
            <h1>Uçuş Rezervasyon Sistemi</h1>
            <FlightList />
            <ReserveFlight />
            <MyFlights />
        </div>
    );
}

export default App;
