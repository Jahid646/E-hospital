import React, { useContext, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { set, useForm } from "react-hook-form";
import { useHistory, useLocation, NavLink } from "react-router-dom";
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
import { UserContext } from "../../../../App";

initializationAuth();
const auth = getAuth();

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };

 
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
  const googleProvider = new GoogleAuthProvider();
   const auth = getAuth();
  const handleSignIn = () => {
    
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          photoURL: photoURL,
        };
        setUser(signedInUser);
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        const u = JSON.stringify(signedInUser);
        localStorage.setItem("user", u);
        history.replace(from);
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const onSubmit = (data) => {
    console.log(data)
      signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const signedInUser = {
        name: user.name,
        email: user.email,
        photoURL: user.photoURL,
      };
   
      setLoggedInUser(signedInUser);
      const u = JSON.stringify(user);
      localStorage.setItem("user", u);
      history.replace(from);
      // ...
    })
    .catch((error) => {
      alert('Email or Password is Incorrect')
      const errorCode = error.code;
      const errorMessage = error.message;
    });
 
 
  }
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
              <NavLink className="mx-auto text-danger" to="/signup">New User?</NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
