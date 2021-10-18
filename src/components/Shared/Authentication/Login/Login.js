import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import logo from '../../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png'
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
  let emailError = false

  const onSubmit = (data) => {
    
    if(!data.email){
      emailError = !emailError
      console.log("email",data.email,emailError)
      console.log(data);
      reset();
    }
  }
    return (
        <Container className="py-5">
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <Card className="shadow">
            <Card.Img className="img-fluid p-5" variant="top" src={logo} />
              <Card.Title className="mx-auto">Login Please</Card.Title>
              <Card.Body>
                <form onSubmit={handleSubmit()}>
                  <label className=" mb-2">Email</label>
                  <input className="form-control" {...register("email")} />
  
                  <label className="mt-3  mb-2" >Password</label>
                  <input
                    className="form-control"
                    type="password"
                    {...register("password")}
                  />
  
                  <input 
                    style={{ width: "100%" }}
                    className="btn btn-outline-info mt-3"
                    type="submit"
                  />
                </form>
                <NavLink className="text-center text-danger" to="/signup">Create a new account?</NavLink>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default Login;