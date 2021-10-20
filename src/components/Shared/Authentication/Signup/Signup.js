import React, { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png";
import initializationAuth from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addToDb } from "../../../../fakeDB";
import { UserContext } from "../../../../App";

initializationAuth();
const auth = getAuth();

const Signup = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("from singup", data.name);
        addToDb(user.uid, data.name);
        const signedInUser = {
          name: data.name,
          email: user.email,
          uid: user.uid,
        };

        setLoggedInUser(signedInUser);

        history.push("/login");

        console.log(user);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={4} className="mx-auto">
          <Card className="shadow">
            <Card.Img className="img-fluid" variant="top" src={logo} />
            <Card.Title className="mx-auto">Signup Please</Card.Title>
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className=" mb-2 ">Name</label>
                <input className="form-control" {...register("name")} />

                <label className=" mb-2 mt-2">Email</label>
                <input className="form-control" {...register("email")} />

                <label className="mt-2 mb-2">Password</label>
                <input
                  className="form-control"
                  type="password"
                  {...register("password")}
                />

                <input
                  style={{ width: "100%" }}
                  className="btn btn-outline-info mt-3 mb-3"
                  type="submit"
                  value="Signup"
                />
              </form>

              <br />
              <NavLink className="mx-auto text-danger" to="/login">
                Already have an account?
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
