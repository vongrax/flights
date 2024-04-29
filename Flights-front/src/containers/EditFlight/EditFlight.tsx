import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../index";
import {useParams} from "react-router";
import FlightForm from "../../components/FlightForm/FlightForm";
import {dataType} from "../../components/FlightsTable/FlightsTable";


const EditFlight = () => {

    const {id} = useParams<{ id: string }>()

    const data = useSelector((state: RootState) => state.appReducer.flights);

    const singleFlight:dataType = data.filter((flight: dataType) => flight._id === id)[0]


    return (
        <div>
            <h1 className='mt-3'>Редактировать рейс {singleFlight.flightNumber}</h1>
            <FlightForm data={singleFlight}/>
        </div>
    );
};

export default EditFlight;