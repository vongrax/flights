export interface Flights {
    _id: string
    flightNumber: string
    airline: string
    departureCity: string
    arrivalCity: string
    aircraftType: string
    departureTime: string
    arrivalTime: string
    actualDepartureTime: string
    actualArrivalTime: string
    status: string
    comment: string
    __v: number
}

export interface FlightState {
    loading: boolean
    flights: Array<Flights>
    error: null | string
}

export const FlightsActionTypes = {

    FETCH_FLIGHT_REQUEST: 'FETCH_FLIGHT_REQUEST',
    FETCH_FLIGHT_SUCCESS: 'FETCH_FLIGHT_SUCCESS',
    FETCH_FLIGHT_FAILURE: 'FETCH_FLIGHT_FAILURE',

    EDIT_FLIGHT_REQUEST: 'EDIT_FLIGHT_REQUEST',
    EDIT_FLIGHT_SUCCESS: 'EDIT_FLIGHT_SUCCESS',
    EDIT_FLIGHT_FAILURE: 'EDIT_FLIGHT_FAILURE',

    CREATE_FLIGHT_REQUEST: 'CREATE_FLIGHT_REQUEST',
    CREATE_FLIGHT_SUCCESS: 'CREATE_FLIGHT_SUCCESS',
    CREATE_FLIGHT_FAILURE: 'CREATE_FLIGHT_FAILURE',

    DELETE_FLIGHT_REQUEST: 'DELETE_FLIGHT_REQUEST',
    DELETE_FLIGHT_SUCCESS: 'DELETE_FLIGHT_SUCCESS',
    DELETE_FLIGHT_FAILURE: 'DELETE_TODO_FAILURE',

}
