import { fetchAllData } from "./flight.Gateway";
import { store } from "../src/store";

export const FLIGHT__DATA = "FLIGHT/FLIGHT__DATA";
export const FLIGHT__SEARCH = "FLIGHT/FLIGHT__SEARCH";

export const getFligts = (flights) => {
  return {
    type: FLIGHT__DATA,
    payload: { flights },
  };
};

export const flightToSearch = (flight) => {
  return {
    type: FLIGHT__SEARCH,
    payload: { flight },
  };
};

export const flightPushData = (flight) => {
  store.dispatch(flightToSearch(flight));
};

export const recivedFlights = (date) => {
  const thunkAction = function (dispatch) {
    fetchAllData(date).then((resp) => dispatch(getFligts(resp.body)));
  };
  return thunkAction;
};
