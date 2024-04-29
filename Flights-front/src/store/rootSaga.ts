import {all} from 'redux-saga/effects'
import {createFlightWatcher, deleteFlightWatcher, editFlightWatcher, fetchFlightWatcher} from "./watchers";

export function* rootSaga() {
    yield all([
        fetchFlightWatcher(),
        editFlightWatcher(),
        createFlightWatcher(),
        deleteFlightWatcher()
    ])
}