import React, { useContext, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import logo from "../../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png";
import initializationAuth from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { UserContext } from "../../../../App";
import { addToDb, getUserInfo } from "../../../../fakeDB";

initializationAuth();

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email, uid } = result.user;

        const signedInUser = {
          name: displayName,
          email: email,
          uid: uid,
        };

        addToDb(uid, displayName);

        setLoggedInUser(signedInUser);
        console.log(signedInUser);

        history.replace(from);

      })
      .catch((error) => {

        const errorMessage = error.message;
console.log(errorMessage)

      });
  };

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        const savedUserInfo = getUserInfo();
        // console.log("object", savedUserInfo);
        const userName = savedUserInfo[user.uid];
        // console.log("after uid", user.email);

        //     console.log("sign in email",savedUserInfo)

            const signedInUser = {
              name: userName,
              email: user.email,
              uid:user.uid
            };
            setLoggedInUser(signedInUser);
            console.log("data set",loggedInUser)
        //     const u = JSON.stringify(user);
        //     // localStorage.setItem("user", u);
            history.replace(from);
            // window.location.reload();
      })
      .catch((error) => {
        alert("Email or Password is Incorrect");

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={4} className="mx-auto">
          <Card className="shadow">
            <Card.Img className="img-fluid" variant="top" src={logo} />
            <Card.Title className="mx-auto">Login Please</Card.Title>
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className=" mb-2">Email</label>
                <input className="form-control" {...register("email")} />

                <label className="mt-2">Password</label>
                <input
                  className="form-control"
                  type="password"
                  {...register("password")}
                />

                <br />

                <input
                  style={{ width: "100%" }}
                  className="btn btn-outline-info mt-3 mb-3"
                  type="submit"
                  value="Login"
                />
              </form>
              <Button
                onClick={handleSignIn}
                variant="outline-success mb-3"
                style={{ width: "100%" }}
              >
                Continue with Google
              </Button>{" "}
              <NavLink className="mx-auto text-danger" to="/signup">
                New User?
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
