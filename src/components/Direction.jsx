import React from "react";
import { Link } from "react-router-dom";

const Direction = () => {
  return (
    <div className="direction">
      <li className="direction-departures">
        <Link className="direction-link" to="#">
          <span className="direction-link__png">
            <i className="fas fa-plane-departure"></i>
          </span>
          DEPARTURES
        </Link>
      </li>
      <li className="direction-arrivals">
        <Link className="direction-link" to="#">
          <span className="direction-link__png">
            <i className="fas fa-plane-arrival"></i>
          </span>
          ARRIVALS
        </Link>
      </li>
    </div>
  );
};
export default Direction;
