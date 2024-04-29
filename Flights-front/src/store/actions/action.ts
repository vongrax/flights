import {createAction} from "@reduxjs/toolkit";
import {FlightsActionTypes} from "../reducer/types";


export const FlightActions = {
    fetchFlightRequest: createAction(FlightsActionTypes.FETCH_FLIGHT_REQUEST),
    fetchFlightSuccess: createAction(FlightsActionTypes.FETCH_FLIGHT_SUCCESS, (data) => ({payload: data})),
    fetchFlightFailure: createAction(FlightsActionTypes.FETCH_FLIGHT_FAILURE, (error) => ({payload: error})),

    editFlightRequest: createAction(FlightsActionTypes.EDIT_FLIGHT_REQUEST, (data) => ({payload: data})),
    editFlightSuccess: createAction(FlightsActionTypes.EDIT_FLIGHT_SUCCESS),
    editFlightFailure: createAction(FlightsActionTypes.EDIT_FLIGHT_FAILURE, (error) => ({payload: error})),

    createFlightRequest: createAction(FlightsActionTypes.CREATE_FLIGHT_REQUEST, (data) => ({payload: data})),
    createFlightSuccess: createAction(FlightsActionTypes.CREATE_FLIGHT_SUCCESS),
    createFlightFailure: createAction(FlightsActionTypes.CREATE_FLIGHT_FAILURE, (error) => ({payload: error})),

    deleteFlightRequest: createAction(FlightsActionTypes.DELETE_FLIGHT_REQUEST, (data) => ({payload: data})),
    deleteFlightSuccess: createAction(FlightsActionTypes.DELETE_FLIGHT_SUCCESS),
    deleteFlightFailure: createAction(FlightsActionTypes.DELETE_FLIGHT_FAILURE, (error) => ({payload: error}))
}


