import { useSubscription } from "@apollo/client";
import React from "react";
import { Alert } from "react-bootstrap";
import { Error, Loading } from "./Components";
import { SUBSCRIPTION_online_user } from "./GraphQL";

export const Users = () => {
  const { data, loading, error } = useSubscription(SUBSCRIPTION_online_user);
  const { count } = data?.online_user[0] || {};

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div className="displayFlex online-users">
      <div className="col-md-6">
        <Alert variant="info">
          <span role="img" aria-label="online users">
            👥
          </span>{" "}
          Online users: {count}
        </Alert>
      </div>
    </div>
  );
};
