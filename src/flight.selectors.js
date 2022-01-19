import { createSelector } from "reselect";

export const searchedFlight = (state) => {
  return state.flight.searchFlight;
};

export const arrival = (state) => {
  return state.flight.arrivals;
};

export const departure = (state) => {
  return state.flight.departures;
};

export const getSearchedDeparture = createSelector(
  [departure, searchedFlight],
  (flightListDeparture, searchedFlight) => {
    const result = flightListDeparture.filter(
      (flt) => flt.codeShareData[0].codeShare === searchedFlight
    );
    return result;
  }
);
export const getSearchedArrival = createSelector(
  [arrival, searchedFlight],
  (flightListArrival, searchedFlight) => {
    const result = flightListArrival.filter(
      (flt) => flt.codeShareData[0].codeShare === searchedFlight
    );
    return result;
  }
);
