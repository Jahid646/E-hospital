import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';

import useAuth from '../hooks/useAuth';
const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
      return (
        <p className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </p>
      );
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
  };

export default PrivateRoute;