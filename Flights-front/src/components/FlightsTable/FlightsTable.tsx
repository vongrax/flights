import React from 'react';
import {Button, Table} from 'reactstrap';
import {NavLink as RouterNavLink, NavLink} from "react-router-dom";
import './FlightTable.css'
import {Flights} from "../../store/reducer/types";

interface FlightsTableProps {
    data: Array<Flights> ;
    admin: boolean;
}

export type dataType = {
    actualArrivalTime: string,
    actualDepartureTime: string,
    aircraftType: string,
    airline: string,
    arrivalCity: string,
    arrivalTime: string,
    comment: string,
    departureCity: string,
    departureTime: string,
    flightNumber: string,
    status: string,
    __v: number,
    _id: string,
}

const FlightsTable: React.FC<FlightsTableProps> = ({data, admin}) => {


    return (
        <div>
            {admin? <Button className="offset-10" tag={RouterNavLink} to='/flight/new'>Создать новый рейс</Button>:null}
            <Table striped className='flight-table mt-3'>
                <thead>
                <tr>
                    <th>Номер рейса</th>
                    <th>Авиакомпания</th>
                    <th>Город вылета</th>
                    <th>Город прилёта</th>
                    <th>Тип самолёта</th>
                    <th>Ожидаемое время вылета</th>
                    <th>Ожидаемое время прилёта</th>
                    <th>Фактическое время вылета</th>
                    <th>Фактическое время прилёта</th>
                    <th>Статус</th>
                    <th>Комментарии</th>
                    {admin ? <th/> : null}
                </tr>
                </thead>
                <tbody>

                {data.map((flight: dataType) => (
                    <tr key={flight._id}>
                        <th scope="row">{flight.flightNumber}</th>
                        <td>{flight.airline}</td>
                        <td>{flight.departureCity}</td>
                        <td>{flight.arrivalCity}</td>
                        <td>{flight.aircraftType}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.arrivalTime}</td>
                        <td>{flight.actualDepartureTime}</td>
                        <td>{flight.actualArrivalTime}</td>
                        <td>{flight.status}</td>
                        <td>{flight.comment}</td>
                        {admin ? <td><NavLink className='edit' to={'/flight/' + flight._id + '/edit'}>
                            <i className="far fa-edit"/></NavLink></td> : null}
                    </tr>))}
                </tbody>
            </Table>
        </div>
    );
};

export default FlightsTable;