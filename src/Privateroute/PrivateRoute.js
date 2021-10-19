import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../App';

const PrivateRoute = ({children, ...rest}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.email || localStorage.getItem('user')? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;