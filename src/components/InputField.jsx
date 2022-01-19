import React, { useState } from "react";
import { connect } from "react-redux";
import { flightPushData } from "../flight.actions";

const InputField = () => {
  const [value, setValue] = useState("");

  return (
    <div className="input-field">
      <div className="input-field__search">
        <i className="fas fa-search "></i>
      </div>

      <input
        className="input-field__input"
        type="text"
        placeholder="Airline, destination or flight# "
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn input-field__btn"
        onClick={() => flightPushData(value)}
      >
        SEARCH
      </button>
    </div>
  );
};

const mapDispatch = {
  flightPushData: flightPushData,
};

export default connect(null, mapDispatch)(InputField);
