const initialState = { departures: [], arrivals: [], searchFlight: [] };
import { FLIGHT__DATA, FLIGHT__SEARCH } from "./flight.actions";

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT__DATA:
      return {
        ...state,
        departures: action.payload.flights.departure,
        arrivals: action.payload.flights.arrival,
      };
    case FLIGHT__SEARCH:
      return { ...state, searchFlight: action.payload.flight };
    default:
      return state;
  }
};
