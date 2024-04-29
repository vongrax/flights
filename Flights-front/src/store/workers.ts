import axiosApi from "../axiosApi";
import {FlightActions} from "./actions/action";

import {put} from 'redux-saga/effects'
import {Flights} from "./reducer/types";

interface IResponse {
    data?: Flights;
}


export function* fetchFlightWorker() {
    try {
        const response: IResponse = yield axiosApi.get('/flights')
        yield put(FlightActions.fetchFlightSuccess(response.data))
    } catch (error) {
        yield put(FlightActions.fetchFlightFailure(error))
    }

}

export function* editFlightWorker(data:any) {

    console.log('watchers', data)

    try {
        yield axiosApi.put('/flights', data.payload)
        yield put(FlightActions.editFlightSuccess())
    } catch (error) {
        yield put(FlightActions.editFlightFailure(error))
    }

}

export function* createFlightWorker(data: any) {

    try {
        yield axiosApi.post('/flights', data.payload)
        yield put(FlightActions.editFlightSuccess())
    } catch (error) {
        yield put(FlightActions.editFlightFailure(error))
    }

}

export function* deleteFlightWorker(data: any) {

    try {
        yield axiosApi.delete('http://localhost:8000/flights/' + data.payload._id)
        yield put(FlightActions.deleteFlightSuccess())
    } catch (error) {
        yield put(FlightActions.deleteFlightFailure(error))
    }

}