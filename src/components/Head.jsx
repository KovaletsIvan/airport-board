import React from "react";

class Head extends React.PureComponent {
  render() {
    return (
      <thead className="theader">
        <tr className="theader-row">
          <th className="theader-row__item">Terminal</th>
          <th className="theader-row__item">Locale time</th>
          <th className="theader-row__item">Destination</th>
          <th className="theader-row__item">Status</th>
          <th className="theader-row__item">Airline</th>
          <th className="theader-row__item">Flight</th>
        </tr>
      </thead>
    );
  }
}
export default Head;