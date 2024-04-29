import {createReducer} from "@reduxjs/toolkit";
import {FlightActions} from "../actions/action";
import {FlightState} from "./types";


const initialState: FlightState = {
    loading: true,
    flights: [],
    error: null
};

export default createReducer(initialState, builder => {
    builder.addCase(FlightActions.fetchFlightRequest, (state) => ({
        ...state,
        loading: true,
    }))

    builder.addCase(FlightActions.fetchFlightSuccess, (state, action) => ({
        ...state,
        loading: false,
        flights: action.payload
    }))

    builder.addCase(FlightActions.fetchFlightFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    }))

    builder.addCase(FlightActions.editFlightRequest, (state) => ({
        ...state,
        loading: true,
    }))

    builder.addCase(FlightActions.editFlightSuccess, (state) => ({
        ...state,
        loading: false,
    }))

    builder.addCase(FlightActions.editFlightFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    }))

    builder.addCase(FlightActions.createFlightFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    }))
})
