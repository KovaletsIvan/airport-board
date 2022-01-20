import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { recivedFlights } from "../flight.actions";
import { curentDate } from "../flight.Gateway";
import Head from "./Head";
import Direction from "./Direction";
import ArrivalsFlightInfo from "./ArrivalsFlightInfo";
import DepartureFlightInfo from "./DepartureFlightInfo";
import FlightNotFound from "./FlightNotFound";
import * as selectorts from "../flight.selectors";

class Tab extends React.Component {
  componentDidMount() {
    this.props.recivedFlights(curentDate);
  }

  render() {
    const {
      arrivals,
      departures,
      getSearchedDeparture,
      getSearchedArrival,
      searchFlight,
    } = this.props;

    const arrivalsFlights =
      searchFlight.length === 0 ? arrivals : getSearchedArrival;
    const departuresFlights =
      searchFlight.length === 0 ? departures : getSearchedDeparture;

    const filtredArrivals = arrivalsFlights
      .filter(
        (elem) => new Date(elem.actual).getDate() === new Date().getDate()
      )
      .sort((a, b) => new Date(a.actual) - new Date(b.actual));

    const filtredDepartures = departuresFlights
      .filter(
        (elem) => new Date(elem.actual).getDate() === new Date().getDate()
      )
      .sort((a, b) => new Date(a.actual) - new Date(b.actual));

    return (
      <div className="container">
        <BrowserRouter>
          <React.StrictMode>
            <Direction />
            <table className="tabs">
              <Head />
              <Switch>
                <Route exact path="/">
                  <DepartureFlightInfo flight={filtredDepartures} />
                </Route>
                <Route path="/arrivals">
                  <ArrivalsFlightInfo flight={filtredArrivals} />
                </Route>
                <Route path="*">
                  <FlightNotFound />
                </Route>
              </Switch>
            </table>
          </React.StrictMode>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatch = {
  recivedFlights: recivedFlights,
};

const mapState = (state) => {
  return {
    arrivals: selectorts.arrival(state),
    departures: selectorts.departure(state),
    searchFlight: selectorts.searchedFlight(state),
    getSearchedDeparture: selectorts.getSearchedDeparture(state),
    getSearchedArrival: selectorts.getSearchedArrival(state),
  };
};

export default connect(mapState, mapDispatch)(Tab);
