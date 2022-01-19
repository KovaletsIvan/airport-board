import React from "react";
import { connect } from "react-redux";
import { recivedFlights } from "../flight.actions";
import { curentDate } from "../flight.Gateway";
import Head from "./Head";
import Direction from "./Direction";
import FlightInfo from "./FlightInfo";
import FlightNotFound from "./FlightNotFound";
import * as selectorts from "../flight.selectors";

class Tab extends React.Component {
  componentDidMount() {
    this.props.recivedFlights(curentDate);
  }

  render() {
    const { arrival, departure, searchedFlight } = this.props;

    const flights = searchedFlight.length === 0 ? arrival : searchedFlight;

    const filtredFlights = flights
      .filter(
        (elem) => new Date(elem.actual).getDate() === new Date().getDate()
      )
      .sort((a, b) => new Date(a.actual) - new Date(b.actual));

    return (
      <div className="container">
        <Direction />
        <table className="tabs">
          <Head />
          {filtredFlights.length === 0 ? (
            <FlightNotFound />
          ) : (
            <FlightInfo flight={filtredFlights} />
          )}
        </table>
      </div>
    );
  }
}

const mapDispatch = {
  recivedFlights: recivedFlights,
};

const mapState = (state) => {
  return {
    arrival: selectorts.arreval(state),
    departure: selectorts.departure(state),
    searchedFlight: selectorts.getSearchedFlight(state),
  };
};

export default connect(mapState, mapDispatch)(Tab);
