import React from 'react';
import FlightForm from "../../components/FlightForm/FlightForm";

const NewFlight = () => {

    return (
        <div>
            <h1 className='mt-3'>Создать новый рейс</h1>
            <FlightForm/>
        </div>
    );
};

export default NewFlight;