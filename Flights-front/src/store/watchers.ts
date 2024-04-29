import {takeEvery} from 'redux-saga/effects'
import {createFlightWorker, deleteFlightWorker, editFlightWorker, fetchFlightWorker} from "./workers";
import {FlightsActionTypes} from "./reducer/types";

export function* fetchFlightWatcher() {
    yield takeEvery(FlightsActionTypes.FETCH_FLIGHT_REQUEST, fetchFlightWorker)
}

export function* editFlightWatcher() {
    yield takeEvery(FlightsActionTypes.EDIT_FLIGHT_REQUEST, editFlightWorker)
}

export function* createFlightWatcher() {
    yield takeEvery(FlightsActionTypes.CREATE_FLIGHT_REQUEST, createFlightWorker)
}

export function* deleteFlightWatcher() {
    yield takeEvery(FlightsActionTypes.DELETE_FLIGHT_REQUEST, deleteFlightWorker)
}