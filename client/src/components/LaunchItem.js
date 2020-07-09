import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function LaunchItem({ launch }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9 text-left">
          <h4>
            <span
              className={classNames({
                "text-success": launch.launch_success,
                "text-danger": !launch.launch_success,
              })}
            >
              Mission: {launch.mission_name}
            </span>
          </h4>
          <p>
            Date:{" "}
            <Moment format="DD-MM-YYYY HH:mm">
              {launch.launch_date_local}
            </Moment>{" "}
          </p>
        </div>
        <div className="col-md-3">
          <Link
            to={`/launch/${launch.flight_number}`}
            className="btn btn-secondary"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaunchItem;
