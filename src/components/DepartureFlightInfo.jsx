import React from "react";
import FlightNotFound from "./FlightNotFound";
import { clock } from "../flight.Gateway";
const dot = require("dot-object");

const DepartureFlightInfo = ({ flight }) => {
  const fligeArray = flight.map((flt) => dot.object(flt));

  const blue = "#1eb7ee";
  const green = "#63c745";

  return (
    <tbody className="tbody">
      {fligeArray.map((flt) => {
        return (
          <tr key={flt.ID} className="flight-data">
            <td className="flight-data__data">
              <span
                className="flight-data__terminal"
                style={{
                  color: `${flt.term === "D" ? blue : green}`,
                  borderColor: `${flt.term === "D" ? blue : green}`,
                }}
              >
                {flt.term}
              </span>
            </td>
            <td className="flight-data__data">
              <span className="flight-data__time">{clock(flt.actual)}</span>
            </td>
            <td className="flight-data__data">
              <span className="flight-data__way">{flt.airportToID.name}</span>
            </td>
            <td className="flight-data__data">
              <span className="flight-data__status">
                {`${flt.status}  ${clock(flt.timeToStand)}`}
              </span>
            </td>
            <td className="flight-data__data">
              <div className="flight-data__company">
                <img
                  className="flight-data__company-img"
                  src={flt.airline.en.logoName}
                  alt="logo"
                />
                <p>{flt.airline.en.name}</p>
              </div>
            </td>
            <td className="flight-data__data">
              <span className="flight-data__flight">
                {flt.codeShareData[0].codeShare}
              </span>
            </td>
          </tr>
        );
      })}
      {fligeArray.length === 0 ? <FlightNotFound /> : null}
    </tbody>
  );
};

export default DepartureFlightInfo;
