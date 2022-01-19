import { createSelector } from "reselect";

export const searchedFlight = (state) => {
  return state.flight.searchFlight;
};

export const arreval = (state) => {
  return state.flight.arrival;
};

export const departure = (state) => {
  return state.flight.departure;
};

export const getSearchedFlight = createSelector(
  [departure, arreval, searchedFlight],
  (flightListDeparture, flightListArreval, searchedFlight) => {
    const flightList = flightListDeparture.concat(flightListArreval);
    const result = flightList.filter(
      (flt) => flt.codeShareData[0].codeShare === searchedFlight
    );
    return result;
  }
);
