import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_name
        rocket_id
        rocket_type
      }
    }
  }
`;

function Launch(props) {
  let flight_number = parseInt(props.match.params.flight_number);
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: flight_number },
  });

  return (
    <>
      {loading && <p>Loading...</p>}

      {data && !loading && (
        <div className="card card-body container">
          <h4>Mission: {data.launch.mission_name}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Flight Number: {data.launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch year: {data.launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch success:{" "}
              <span
                className={classNames({
                  "text-success": data.launch.launch_success,
                  "text-danger": !data.launch.launch_success,
                })}
              >
                {data.launch.launch_success ? "Yes" : "No"}
              </span>
            </li>
          </ul>

          <h4>Rocket details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rocket name: {data.launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket id: {data.launch.rocket.rocket_id}
            </li>
            <li className="list-group-item">
              Rocket type: {data.launch.rocket.rocket_type}
            </li>
          </ul>

          <Link to={"/"} className="btn btn-primary">
            Go back
          </Link>
        </div>
      )}
    </>
  );
}

export default Launch;
