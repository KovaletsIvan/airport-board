import React, { useState } from "react";
import { connect } from "react-redux";
import { flightSearch } from "../flight.actions";

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
        placeholder="Airline, dastination or flight# "
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn input-field__btn"
        onClick={() => flightSearch(value)}
      >
        SEARCH
      </button>
    </div>
  );
};

const mapDispatch = {
  flightSearch: flightSearch,
};

export default connect(null, mapDispatch)(InputField);
