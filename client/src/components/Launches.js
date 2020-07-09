import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import LaunchItem from "./LaunchItem";

const LAUNCH_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {});

  return (
    <div className="container">
      <h1 className="display-4 my-3">Launches </h1>
      {loading && <p>Loading...</p>}

      {data &&
        data.launches.map((o) => (
          <LaunchItem key={o.flight_number} launch={o} />
        ))}
    </div>
  );
}

export default Launches;
