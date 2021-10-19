import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png";
import initializationAuth from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

initializationAuth();
const auth = getAuth();

const Signup = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/login");
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
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
              <Button variant="outline-success mb-3" style={{ width: "100%" }}>
                Continue with Google
              </Button>{" "}
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
